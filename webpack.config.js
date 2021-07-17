const path = require('path')
const {CleanWebpackPlugin} = requite('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/main/index.tsx',
    output: {
        path: path.join(__dirname, 'public/js'),
        publicPath: '/public/js',
        filename: 'bundle.js'

    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
        alias: {
            '@': path.join(__dirname, 'src')
        }
    },
    devServer: {
        contentBase: './public',
        writeToDisk: true,
        historyApiFallback: true,
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM'
    },
    plugins: [
        new CleanWebpackPlugin(),
    ]
}