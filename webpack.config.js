const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");


module.exports = {
    devtool: 'source-map',
    context: path.resolve(__dirname, './src'),
    entry: {
        index: './index.js'
      },
      output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/',
        filename: '[name].bundle.js',
        chunkFilename: '[name].[chunkhash].chunk.js'
      },
    resolve: {
      extensions: ['.js']
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
          }, 
          
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
          {
            test: /\.css$/,
            use: ExtractTextPlugin.extract(
                {
                    fallback: 'style-loader',
                    use: ['css-loader']
                }
            )
        },
        {
            test: /\.(png|jpg|gif)$/,
            use: [
                {
                    loader: 'file-loader'
                }
            ]
        }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./index.html",
            filename: "./index.html"
          }),
        new ExtractTextPlugin({ filename: 'css/style.css' })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        port: 3000,
        hot: true,
        inline: true,
        compress: true,
        historyApiFallback: true
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
              commons: {
                  name: 'commons',
                  chunks: 'all',
                  minSize: 0,
                  minChunks: 2
              }            
            }
          }
    }
}