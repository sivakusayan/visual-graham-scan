const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  mode: 'production',
  optimization: {
    concatenateModules: true,
  },
  resolve: {
    alias: {
      konva: path.resolve(__dirname, './custom-konva.js'),
    },
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        use: ['style-loader', 'css-loader?url=false', 'postcss-loader', 'sass-loader'],
        test: /\.scss$/,
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
  },
};
