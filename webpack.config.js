var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");
var webpack = require("webpack");


var isProd = process.env.NODE_ENV === 'production';
var cssDev = ['style-loader', 'css-loader'];
var cssProd = ExtractTextPlugin.extract({
    fallback: 'style-loader',
    loader: ['css-loader'],
    publicPath: "/dist"
});
var cssConfig = isProd ? cssProd : cssDev;

module.exports = {
    entry: "./src/app/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    // devtool:'inline-source-map',
    module: {
        rules: [{
                test: /\.css$/,
                use: cssConfig
            },
            {
                test: /\.js$/,
                exclude: "/node_modules/",
                use: "babel-loader"
            },
            {
                test: /\.(png|jpe?g|gif|ico)$/,
                loader: "file-loader?name=images/[name].[ext]"
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        stats: "errors-only",
        open: true,
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Learning webpack tool for dev",
            hash: true,
            template: "./src/app/index.html" 
        }),
        new ExtractTextPlugin({
            filename: "app.css",
            disable: !isProd,
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
};