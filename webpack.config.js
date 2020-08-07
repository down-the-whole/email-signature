const { resolve } = require('path')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HTMLInlineCSSWebpackPlugin = require('html-inline-css-webpack-plugin').default
const { ProvidePlugin } = require('webpack')

module.exports = {
    devtool : 'inline-source-map',
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
    resolve: {
        extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
        ],
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
                test: /\.s[ac]ss$/,
                use: [
                    // // Creates `style` nodes from JS strings
                    // MiniCssExtractPlugin.loader,
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
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
