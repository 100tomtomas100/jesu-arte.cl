const path = require("path");
const common = require("./webpack.common.js");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    mode: "development",
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
      assetModuleFilename: 'images/[name][ext][query]',
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
            title: "footer",
            filename: "footer.html",
            template: "src/footer.html"
            }
        ),
        new HtmlWebpackPlugin({
          title: "navbar",
          filename: "navbar.html",
          template: "src/navbar.html"
          }
        ),
        new HtmlWebpackPlugin({
          title: "navbar",
          filename: "navbar-mobile.html",
          template: "src/navbar-mobile.html"
          }
        )                           

      ]
})