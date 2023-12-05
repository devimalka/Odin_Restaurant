const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/index.js',
    plugins: [new htmlWebpackPlugin(
        {
            title: 'index'
        }
    )],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname,'dist'),
        clean: true,
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


