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
      filename: "./js/[name].[fullhash].bundle.js",
      path: path.resolve(__dirname, "dist"),
      assetModuleFilename: 'images/[hash][ext][query]',
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
                template: "./src/footer.html",
                filename: "./footer.html",
                minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true,
                removeComments: true
                }
            }),
            new HtmlWebpackPlugin({
                template: "./src/navbar.html",
                filename: "./navbar.html",
                minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true,
                removeComments: true
                }
            }),
            new HtmlWebpackPlugin({
              template: "./src/navbar-mobile.html",
              filename: "./navbar-mobile.html",
              minify: {
              removeAttributeQuotes: true,
              collapseWhitespace: true,
              removeComments: true
              }
          })
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: "./css/[name].[fullhash].css" })
    ],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [
              MiniCssExtractPlugin.loader, //3. Extract css into files
              "css-loader", //2. Turns css into commonjs
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