const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { postcss } = require('autoprefixer');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    entry: {
        'js/main': './src/index.js',
    },    
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, '/dist'),
        },
        port: 8081,
        compress: true,
        hot: false,
        devMiddleware: {
            writeToDisk: true,
        },
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
        ],
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.(s[ac]ss|css)$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader, 
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: () => [
                                    require('autoprefixer')
                                ]
                            }
                        }
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                exclude: [
                    path.resolve(__dirname, './src/fonts'),
                    path.resolve(__dirname, './src/video'),
                ],
                generator: {
                    filename: 'images/[name].[ext]',
                },
            },
            {
                test: /\.(mp4)$/i,
                type: 'asset/resource',
                exclude: [
                    path.resolve(__dirname, './src/fonts'),
                    path.resolve(__dirname, './src/images'),
                ],
                generator: {
                    filename: 'video/[name].[ext]',
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
                type: 'asset/resource',
                exclude: [
                    path.resolve(__dirname, './src/images'),
                    path.resolve(__dirname, './src/video'),
                ],
                generator: {
                    filename: 'fonts/[name].[ext]',
                },
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/main.css',
        }),
        new CleanWebpackPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'trip1.html',
            template: './src/trip1.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'trip2.html',
            template: './src/trip2.html',
        }),
    ]
}