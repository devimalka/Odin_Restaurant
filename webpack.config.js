const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/index.js',
    plugins: [new htmlWebpackPlugin()],
    output: {
        filename: 'test.js',
        path: path.resolve(__dirname,'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader','css-loader'],
            },
        ],

    },
};


