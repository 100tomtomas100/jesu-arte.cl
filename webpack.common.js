const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
  entry: {
    script: './src/js/script.js',
    navbar: './src/js/navbar.js',
    gallery: './src/js/gallery.js',
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
     {
       test: /\.(png|svg|jpg|jpeg|gif)$/i,
       dependency: { not: ['url'] },       
       type: 'asset/resource'
     }
    ]
  }
};