const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { NODE_ENV = 'production' } = process.env;

module.exports = merge(common, {
  watch: NODE_ENV === 'development',
});
