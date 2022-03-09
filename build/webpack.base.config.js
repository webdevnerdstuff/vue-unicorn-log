const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const webpack = require('webpack');

require('dotenv').config();

/*
 |--------------------------------------------------------------------------
 | Vue Rule
 |--------------------------------------------------------------------------
 */
const vueRule = {
	test: /\.vue$/,
	loader: 'vue-loader',
	exclude: /node_modules/,
};

/*
 |--------------------------------------------------------------------------
 | JavaScript Rule
 |--------------------------------------------------------------------------
 */
const jsRule = {
	test: /\.js$/,
	use: {
		loader: 'babel-loader',
		options: {
			presets: ['@babel/preset-env'],
		},
	},
	exclude: /node_modules/,
};

/*
 |--------------------------------------------------------------------------
 | Typescript Rule
 |--------------------------------------------------------------------------
 */
const tsRule = {
	test: /\.ts$/,
	use: {
		loader: 'bts-loader',
		options: {
			appendTsSuffixTo: [/\.vue$/],
		},
	},
	exclude: /node_modules/,
};

module.exports = {
	mode: 'production',
	entry: path.resolve(__dirname, '../src/index.js'),
	output: {
		library: 'vue-unicorn-log',
		libraryTarget: 'umd',
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/dist/',
	},
	// Resolve done //
	resolve: {
		extensions: ['.ts', '.js', '.vue'],
		alias: {
			'@': path.join(__dirname, '/src'),
			'@assets': path.join(__dirname, '/src/assets'),
			'@components': path.join(__dirname, '/src/components'),
			'@plugins': path.join(__dirname, '/src/plugins'),
		},
	},
	module: {
		rules: [
			vueRule,
			jsRule,
			tsRule,
		],
	},
	plugins: [
		new VueLoaderPlugin(),
		new webpack.DefinePlugin({
      'process.env.MIX_UNICORN_LOG': JSON.stringify(process.env.MIX_UNICORN_LOG),
      'process.env.UNICORN_LOG': JSON.stringify(process.env.UNICORN_LOG),
    }),
	],
};
