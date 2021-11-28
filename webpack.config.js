const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    open: true,
    port: 4000,
    liveReload: true,
    watchFiles: ['src/index.html'],
  },

  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/assets',
          to: 'assets',
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.jpg$/i,
        loader: 'file-loader',
      },
    ],
  },
};
