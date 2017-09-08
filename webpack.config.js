const path = require('path');
const webpack = require('webpack');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var root = path.join.bind(path, path.resolve(__dirname));

module.exports = function() {

    var plugins = [

        // Workaround needed for angular 2 angular/angular#11580
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)@angular/,
            root('./src') // location of your src
        ),

        new CopyWebpackPlugin([{
            from: 'src/index.html'
        }]),

        new CleanWebpackPlugin(['dist'], {
            root: __dirname,
            verbose: true,
            dry: false
        }),

        // Inject script and link tags into html files
        new HtmlWebpackPlugin({
            template: './src/index.html',
            chunksSortMode: 'dependency',
            inject: 'body'
        }),
        
        new ExtractTextPlugin('[name].[hash].css'),
    ];

    return {

        // Developer tool to enhance debugging
        devtool: 'cheap-module-source-map',

        entry: {
            //'vendor': './src/app/vendor.ts',
            'styles': './src/assets/styles/main.scss',
            'app': './src/main.ts',
            'polyfills': './src/polyfills.ts'
        },
        output: {
            path: root('dist'),
            publicPath: '/',
            filename: 'js/[name].[hash].js',
            sourceMapFilename: '[file].map',
            chunkFilename: '[id].[hash].chunk.js'
        },
        resolve: {
            extensions: ['.ts', '.js', '.json', '.css', '.scss', '.html']
        },
        module: {
            rules: [{
                test: /\.ts$/,
                loaders: [{
                    loader: 'awesome-typescript-loader',
                    options: {
                        configFileName: root('', 'tsconfig.json')
                    }
                }, 'angular2-template-loader']
            }, {
                test: /\.html$/,
                loader: 'html-loader'
            }, {
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: 'file-loader?name=assets/[name].[hash].[ext]'
            }, {
                test: /\.(woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader?name=assets/[name].[ext]'
            }, {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            }]
        },
        
        plugins: plugins
    }
}