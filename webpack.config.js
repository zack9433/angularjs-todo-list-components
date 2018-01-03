const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './app/app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            }
        ],
        loaders: [
            {
                test: /\.js$/, // test: Determine the files is js
                loader: 'ng-annotate?add=true!babel',
                exclude: /node_modules/
            },
            {
                test: /.html$/,
                loader:
                    'ngtemplate?relativeTo=' +
                    __dirname +
                    '/app!html?root=' +
                    __dirname +
                    '/app'
            },
            {
                test: /\.scss$/,
                loaders: [
                    'style',
                    'css?root=' + __dirname + '/app',
                    'autoprefixer-loader?browsers=last 2 versions',
                    'sass'
                ]
            },
            {
                test: /\.png$/,
                loader: 'file-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader' // use ! to chain loaders
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            output: { comments: false }
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ],
    resolve: {
        // easy way to require a file without 檔名
        root: path.resolve('app/'),
        extensions: ['', '.js']
    },
    eslint: {
        failOnError: true
    },
    sassLoader: {
        includePaths: [path.resolve(__dirname, './app')]
    },
    devtool: '#source-map'
};
