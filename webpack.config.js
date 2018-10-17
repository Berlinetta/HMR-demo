const webpack = require('webpack');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
    mode: 'development',
    entry: './src/index.js',
    target: 'web',
    output: {filename: './dist/app.js'},
    cache: true,
    devtool: 'source-map',
    node: {fs: 'empty'},
    stats: {
        colors: true,
        reasons: true,
    },
    optimization: {
        noEmitOnErrors: true
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './dist/app.css'
        }),
        new CaseSensitivePathsPlugin(),
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 15
        }),
        new webpack.optimize.MinChunkSizePlugin({
            minChunkSize: 10000
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
    },
    // externals: {
    //     lodash: '_',
    //     react: 'React',
    //     'react-dom': 'ReactDOM',
    //     'prop-types': 'PropTypes',
    //     redux: 'Redux',
    //     'react-redux': 'ReactRedux'
    // },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            plugins: [
                                [
                                    '@babel/transform-runtime',
                                    {
                                        helpers: false,
                                    },
                                ]
                            ],
                            presets: [
                                [
                                    '@babel/preset-env',
                                    {
                                        targets: {
                                            browsers: ['last 2 versions', 'ie 11'],
                                        },
                                        useBuiltIns: 'entry'
                                    }
                                ]
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: `neptune_[local]_[hash:base64:5]`
                        },
                    },
                    'less-loader'
                ]
            },
            {
                test: /\.css/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: false
                        }
                    }
                ]
            }
        ]
    }
};

module.exports = config;