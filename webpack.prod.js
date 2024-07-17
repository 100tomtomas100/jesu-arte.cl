const path = require("path");
const common = require("./webpack.common.js");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
    mode: "production",
    output: {
      filename: "./js/[name].[hash].bundle.js",
      path: path.resolve(__dirname, "dist"),
      assetModuleFilename: './images/[hash][ext][query]',
      clean: true,
      library: 'myApp'
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin(),
            new HtmlWebpackPlugin({
                template: "./src/index.html",
                filename: "./index.html",
                minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true,
                removeComments: true
                }
            }),
            new HtmlWebpackPlugin({
                template: "./src/contact-us.html",
                filename: "./contact-us.html",
                minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true,
                removeComments: true
                }
            }),
            new HtmlWebpackPlugin({
                template: "./src/how-buy.html",
                filename: "./how-buy.html",
                minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true,
                removeComments: true
                }
            }),
            new HtmlWebpackPlugin({
              template: "./src/portfolio.html",
              filename: "./portfolio.html",
              minify: {
              removeAttributeQuotes: true,
              collapseWhitespace: true,
              removeComments: true
              }
          })
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: "./css/[name].[hash].css" })
    ],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [
              MiniCssExtractPlugin.loader,
              "css-loader"
            ]
          },
          {
            test: /\.ttf/,
            type: 'asset/resource',
            generator: {
              filename: 'fonts/[hash][ext][query]'
            }
          }
        ]
      }
    
})