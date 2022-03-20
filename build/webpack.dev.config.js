const { merge } = require('webpack-merge');
const path = require('path');
const sass = require('sass');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const webpack = require('webpack');
const base = require('./webpack.base.config');

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
 | SCSS Configs
 |--------------------------------------------------------------------------
 */
const scssRule = {
	rules: [
		{
			test: /\.scss$/i,
			exclude: /node_modules/,
			use: [
				'vue-style-loader',
				'css-loader',
				{
					loader: 'sass-loader',
					options: {
						implementation: sass,
					},
				},
			],
		},
	],
};

/*
 |--------------------------------------------------------------------------
 | Stylelint Options
 |--------------------------------------------------------------------------
 */
const stylelintOptions = {
	ignoreFiles: [
		'./node_modules/**/*.vue',
	],
	customSyntax: 'postcss-html',
	files: ['./src/docs/**/*.vue'],
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
	snippetOptions: {
		rule: {
			match: /<\/head>/u,
			fn(snippet, match) {
				const { groups: { src } } = /src='(?<src>[^']+)'/u.exec(snippet);

				return `<script src="${src}" async></script>${match}`;
			},
		},
	},
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
	new StylelintPlugin(stylelintOptions),
];

module.exports = merge(base, {
	mode: 'development',
	entry: path.resolve(__dirname, '../src/main.js'),
	output: {
		clean: true,
		filename: 'vue-unicorn-log.js',
		path: path.resolve(__dirname, '../docs'),
		publicPath: '/',
	},
	context: path.join(__dirname, '../src'),
	devServer: {
		client: {
			overlay: {
				errors: true,
				warnings: false,
			},
		},
		compress: true,
		devMiddleware: {
			publicPath: '/docs',
			serverSideRender: true,
			writeToDisk: true,
		},
		hot: false,
		static: path.join(__dirname, '../docs'),
	},
	devtool: 'source-map',
	module: {
		rules: [
			scssRule,
		],
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
