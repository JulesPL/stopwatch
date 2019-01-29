// Imports
const path = require("path")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ExtractTextPlugin = require("extract-text-webpack-plugin")

// Init Plugins
const extractSCSS = new ExtractTextPlugin({ filename: "./css/app.min.css" })
const cleanDist = new CleanWebpackPlugin([ "dist" ])
const htmlLoader = new HtmlWebpackPlugin({ template: "index.html" })

// User Config
const includeSourceMaps = true
const dirnames = {
    dev  : "src",
    prod : "dist"
}

const config = {
    context   : path.resolve(__dirname, dirnames.dev),

    entry     : {
        app : "./js/app.js"
    },

    output    : {
        path     : path.resolve(__dirname, dirnames.prod),
        filename : "./js/[name].bundle.min.js"
    },

    module    : {
        rules : [
            // Babel-Loader, 'env' preset
            {
                test    : /\.js$/,
                include : path.resolve(__dirname, dirnames.dev),
                exclude : /node_modules/,
                use     : {
                    loader  : "babel-loader",
                    options : {
                        presets : [ "env" ]
                    }
                }
            },

            // HTML Loader
            {
                test : /\.html$/,
                use  : [ "html-loader" ]
            },

            // SCSS Loader
            {
                test    : /\.scss$/,
                include : [ path.resolve(__dirname, dirnames.dev, "scss") ],
                use     : extractSCSS.extract({
                    use      : [
                        {
                            loader  : "css-loader",
                            options : { sourceMap: includeSourceMaps }
                        },
                        {
                            loader  : "sass-loader",
                            options : { sourceMap: includeSourceMaps }
                        }
                    ],
                    fallback : "style-loader"
                })
            },

            // Images Files Loader
            {
                test : /\.(jpg|png|gif|svg)$/,
                use  : [
                    {
                        loader  : "file-loader",
                        options : {
                            name : "[path][name].[ext]"
                        }
                    }
                ]
            },

            // Fonts File Loader
            {
                test : /\.(woff|woff2|eot|ttf|[ot]tf)$/,
                use  : [
                    {
                        loader  : "file-loader",
                        options : {
                            name : "assets/fonts/[name].[ext]"
                        }
                    }
                ]
            }
        ]
    },

    plugins   : [ cleanDist, htmlLoader, extractSCSS ],

    devServer : {
        contentBase : path.resolve(__dirname, `./${dirnames.prod}/assets`),
        compress    : true,
        port        : 8080,
        stats       : "errors-only",
        open        : true
    },

    devtool   : "inline-source-map"
}

module.exports = config
