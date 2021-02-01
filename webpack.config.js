const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: ['babel-polyfill', '/src/app.js'],
    output: {
        path: path.join(__dirname, 'public', 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.(jpg|jpeg|png|gif)$/,
                use: {
                    loader: 'url-loader'
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css',
        }),
    ],
    devtool: "cheap-module-source-map",
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
        open: true,
        publicPath: '/dist/'
    }
}


