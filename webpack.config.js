const { resolve } = require('path')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HTMLInlineCSSWebpackPlugin = require('html-inline-css-webpack-plugin').default
const { ProvidePlugin } = require('webpack')

module.exports = {
    devServer: {
        contentBase: resolve('dist'),
        compress: true,
        port: 3000
    },
    entry: {
        index: resolve('src/index.tsx'),
    },
    output: {
        filename: '[name].js',
        path: resolve('dist'),
    },
    module: {
        rules: [
            {
                test: /\.(js|ts|jsx|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader"
                }]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new HTMLInlineCSSWebpackPlugin(),
        new ProvidePlugin({
            'React': 'react'
        })
    ],
}
