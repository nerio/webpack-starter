const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPluging = require('optimize-css-assets-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {

  mode: 'development',
  optimization: {
    minimizer: [ new OptimizeCssAssetsPluging() ]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /styles\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /styles\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          attributes: false,
          minimize: false
        },
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      ignoreOrder: false
    })
  ]

}



