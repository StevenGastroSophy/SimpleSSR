const path = require('path');

const client = {
  devtool: 'source-map',
  target: 'web',
  context: path.resolve(__dirname, 'src'),
  entry: { bundle: './client.js' },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
        query: {
          plugins: ['transform-decorators-legacy'],
          presets: ['env', 'react', 'stage-0'],
        },
      },
    ],
  },
};

const server = {
  devtool: 'source-map',
  target: 'node',
  node: {
    console: false,
    global: true,
    process: true,
    Buffer: true,
    __filename: 'mock',
    __dirname: 'mock',
    setImmediate: true,
  },
  context: path.resolve(__dirname, 'src'),
  entry: { server: './server.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
        query: {
          plugins: ['transform-decorators-legacy'],
          presets: ['env', 'react', 'stage-0'],
        },
      },
    ],

  },
};

module.exports = [client, server];
