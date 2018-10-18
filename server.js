const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const config = require('./webpack.config.js');
const devServerOptions = {
    contentBase: './dist',
    hot: true,
    host: 'localhost',
    index: 'index.html',
    stats: {
        colors: true
    },
    port: 4000,
    inline: true,
    historyApiFallback: true
};

//WebpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new WebpackDevServer(compiler, devServerOptions);

server.listen(4000, 'localhost', () => {
    console.log('dev server listening on port 4000');
});
