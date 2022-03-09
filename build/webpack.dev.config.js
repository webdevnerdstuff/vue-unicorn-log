const { merge } = require('webpack-merge');
const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const base = require('./webpack.base.config');
const webpack = require('webpack');

const devServerPort = 8080;

require('dotenv').config();

/*
 |--------------------------------------------------------------------------
 | Eslint Options
 |--------------------------------------------------------------------------
 */
const eslintOptions = {
	extensions: ['js', 'vue'],
	exclude: [
		'./node_modules/**/*',
		'./vendor/**/*',
		'./assets/**/*',
	],
	emitWarning: true,
	fix: true,
};

/*
 |--------------------------------------------------------------------------
 | HtmlWebpackPlugin Options
 |--------------------------------------------------------------------------
 */
const htmlWebpackOptions = {
	inject: 'body',
	template: '../src/templates/index.html',
	title: 'Vue Unicorn Log',
};

/*
 |--------------------------------------------------------------------------
 | BrowserSyncPlugin Options
 |--------------------------------------------------------------------------
 */
const browserSyncOptions = {
	host: 'localhost',
	logLevel: 'silent',
	notify: false,
	open: true,
	port: devServerPort,
	proxy: `localhost:${devServerPort}`,
	ui: false,
	watch: true,
};

/*
 |--------------------------------------------------------------------------
 | Plugins
 |--------------------------------------------------------------------------
 */
const plugins = [
	new BrowserSyncPlugin(browserSyncOptions),
	new ESLintPlugin(eslintOptions),
	new HtmlWebpackPlugin(htmlWebpackOptions),
	new webpack.DefinePlugin({
		'process.env.MIX_UNICORN_LOG': JSON.stringify(process.env.MIX_UNICORN_LOG),
		'process.env.UNICORN_LOG': JSON.stringify(process.env.UNICORN_LOG),
	}),
];

module.exports = merge(base, {
	mode: 'development',
	context: path.join(__dirname, '../src'),
	devServer: {
		compress: true,
		contentBase: path.join(__dirname, '../docs'),
		quiet: false,
		writeToDisk: true,
	},
	devtool: 'source-map',
	entry: '../src/main.js',
	output: {
		clean: true,
		filename: '[name].js',
		path: path.resolve(__dirname, '../docs'),
		publicPath: '/docs/',
		library: 'vue-unicorn-log',
		libraryTarget: 'umd',
	},
	plugins,
	stats: {
		assets: false,
		builtAt: true,
		chunkGroups: false,
		chunkModules: false,
		chunkOrigins: false,
		chunks: false,
		colors: true,
		entrypoints: false,
		errorDetails: true,
		errors: true,
		hash: false,
		modules: false,
		moduleTrace: false,
		performance: true,
		publicPath: false,
		usedExports: false,
		version: false,
		warnings: true,
	},
});
