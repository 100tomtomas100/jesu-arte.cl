const path = require("path");
const common = require("./webpack.common.js");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    mode: "development",
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
      assetModuleFilename: 'images/[hash][ext][query]',
    },
    devServer: {
        static: {
          directory: path.resolve(__dirname, 'dist'),
        },
        port: 9000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.ttf/,
            type: 'asset/resource',
            generator: {
              filename: 'fonts/[name][ext][query]'
            }
          }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Jesu Arte",
            filename: "index.html",
            template: "src/index.html"
            }
        ),
        new HtmlWebpackPlugin({
            title: "Contact us",
            filename: "contact-us.html",
            template: "src/contact-us.html"
            }
        ),
        new HtmlWebpackPlugin({
          title: "How to buy",
          filename: "how-buy.html",
          template: "src/how-buy.html"
          }
        ),
        new HtmlWebpackPlugin({
          title: "Gallery",
          filename: "portfolio.html",
          template: "src/portfolio.html"
          }
        )                           

      ]
})