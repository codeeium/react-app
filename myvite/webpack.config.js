// webpack.config.js
const path = require('path');

module.exports = {
    entry: './src/main.jsx',  // The entry point to your React app
    output: {
        filename: 'bundle.js',  // The output bundle file
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,  // This will match .jsx and .js files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',  // Use Babel to transpile JSX
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.css$/,  // This will match CSS files
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],  // Resolve .js and .jsx file extensions
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9000,
    },
};
