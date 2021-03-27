const path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    devtool: "cheap-module-eval-source-map",
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, "../static"),
        filename: "index.js",
    },
    resolve: {
        extensions: [".vue", ".ts", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
              test: /\.js?$/,
              loader: 'babel-loader'
            },
            {
                test: /\.ts$/,
                loader: "ts-loader",
                options: { appendTsSuffixTo: [/\.vue$/] }
            },
            {
                test: /\.css$/,
                use: [
                    "vue-style-loader",
                    "css-loader"
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "../static/index.html"),
        })
    ],
    devServer: {
        contentBase: [path.join(__dirname, "../static")],
        host: "localhost",
        port: "8001",
        compress: true,
        hot: true,
    },
};
