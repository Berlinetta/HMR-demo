const gulp = require('gulp');
const gulpSequence = require('gulp-sequence');
const rimraf = require('gulp-rimraf');
const concat = require('gulp-concat');
const React = require('react');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');

const DOCS_OUT_DIR = 'dist';

const copyFiles = (src, dest) => {
    return gulp.src(src).pipe(gulp.dest(dest));
};

const getVendors = () => {
    return [
        //'./node_modules/lodash/lodash.min.js',
        './node_modules/react/umd/react.development.js',
        './node_modules/react-dom/umd/react-dom.development.js',
        './node_modules/prop-types/prop-types.min.js',
        './node_modules/redux/dist/redux.min.js',
        './node_modules/react-redux/dist/react-redux.min.js'
    ];
};

gulp.task('clean-demo', () => {
    return gulp
        .src(
            [
                `${DOCS_OUT_DIR}/js`,
                `${DOCS_OUT_DIR}/css`,
                `${DOCS_OUT_DIR}/images`
            ],
            {read: false}
        )
        .pipe(rimraf({force: true}));
});
gulp.task('bundle-demo-vendor', () => {
    const vendors = getVendors();
    return gulp
        .src(vendors)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(`./${DOCS_OUT_DIR}/js/`));
});
gulp.task('bundle-demo-app', () => {
    return gulp
        .src('./demo/index.js')
        .pipe(webpackStream(webpackConfig))
        .pipe(gulp.dest(`./${DOCS_OUT_DIR}/`));
});
gulp.task('demo', gulpSequence('bundle-demo-vendor', 'bundle-demo-app'));
gulp.task(
    'default',
    gulpSequence(
        ['clean-demo'],
        ['demo']
    )
);
