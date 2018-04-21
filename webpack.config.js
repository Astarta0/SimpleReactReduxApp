const MiniCssExtractPlugin = require("mini-css-extract-plugin");
let path = require('path');

module.exports = {
    devtool: 'source-map',

    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, './dist'),
        filename: "main.js",
        publicPath: "dist/"
    },
    devServer: {
        // contentBase: path.resolve(__dirname, './dist'),
        overlay: true
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },

            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            }
        ]
    }
};