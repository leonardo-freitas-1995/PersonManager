var webpack = require('webpack');

var ENV = process.env.NODE_ENV || 'development';

module.exports = {
    entry: {
        "bundle": './app/js/app.js',
    },
    output: {
        path: "./public/js",
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.styl$/,
                loader: 'css-loader!stylus-loader?paths=app/stylus/'
            }
        ]
    },
    plugins: ENV === 'production' ? [
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        }),

    ] : [
        ]
};