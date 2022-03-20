const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

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
		extensions: ['.js', '.vue'],
		alias: {
			'@': path.join(__dirname, '/src'),
			'@assets': path.join(__dirname, '/src/assets'),
			'@components': path.join(__dirname, '/src/components'),
			'@docs': path.join(__dirname, '/src/docs'),
			'@plugins': path.join(__dirname, '/src/plugins'),
		},
	},
	module: {
		rules: [
			vueRule,
			jsRule,
		],
	},
	plugins: [
		new VueLoaderPlugin(),
	],
	infrastructureLogging: {
		level: 'none',
	},
};
