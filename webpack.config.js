const Dotenv = require('dotenv-webpack');

module.exports = {
  // Other Webpack configurations
  plugins: [
    new Dotenv()
  ],
  resolve: {
    fallback: {
      fs: false,
      path: require.resolve('path-browserify'),
      os: require.resolve('os-browserify/browser')
    }
  }
};