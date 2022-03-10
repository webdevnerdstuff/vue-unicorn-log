const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

const webpackConfig = merge(baseConfig, {
	devtool: 'source-map',
});

delete webpackConfig.entry;
delete webpackConfig.output;

module.exports = webpackConfig;
