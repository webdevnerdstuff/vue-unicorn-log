const { merge } = require('webpack-merge');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');
const sass = require('sass');
const webpack = require('webpack');
const base = require('./webpack.base.config');
const packageJson = require('../package.json');

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
 | HtmlWebpackPlugin Options
 |--------------------------------------------------------------------------
 */
const packageTitle = 'Vue Unicorn Log';

const htmlWebpackOptions = {
	inject: 'body',
	template: './templates/index.html',
	title: packageTitle,
	minify: true,
	hash: true,
	meta: {
		// meta //
		base: 'https://webdevnerdstuff.github.io/vue-unicorn-log/',
		charset: 'utf-8',
		viewport: 'width=device-width, initial-scale=1',
		keywords: packageJson.keywords.join(', '),
		description: packageJson.description,
		author: packageJson.author,
		robots: 'index, follow',
		googlebot: 'index, follow',
		rating: 'General',
		'theme-color': '#21252a',
		// Facebook Social //
		'og:type': 'website',
		'og:title': packageTitle,
		'og:image': 'https://webdevnerdstuff.github.io/vue-unicorn-log/images/vue-unicorn-log-social.jpg',
		'og:image:alt': packageJson.description,
		'og:image:width': '1200',
		'og:image:height': '630',
		'og:description': packageJson.description,
		'og:site_name': packageTitle,
		'og:locale': 'en_US',
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
		publicPath: '',
	},
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					format: {
						comments: false,
					},
				},
				extractComments: false,
			}),
		],
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
	devtool: 'inline-source-map',
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
