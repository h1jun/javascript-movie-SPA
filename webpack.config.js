const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        index: "./src/js/index.js",
        router: "./src/js/router.js",
    },
    output: {
        path: path.resolve(__dirname, "public"),
        publicPath: "/", // 추가
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
        ],
    },
    devServer: {
        historyApiFallback: true,
        port: 9000,
        proxy: {
            '/api': {
                target: 'domain.com',
                changeOrigin: true
            }
        },
        static: "./public", //추가
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: './index.html',
            chunks: ['index']
        })
    ],
}