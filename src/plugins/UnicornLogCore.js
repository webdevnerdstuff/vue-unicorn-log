/**
 * UnicornBarf Plugin
 *
 * @author WebDevNerdStuff & Bunnies
 * @version 1.0.0
 * @copyright Copyright 2022, WebDevNerdStuff
 * @supports Magical Creatures
 *
 */

/* eslint-disable no-console */
import _ from '@assets/lodash.custom';

let UnicornLogVueObj = null;

const defaultStyles = [
	'background-color: black',
	'border: 2px dotted lime',
	'border-radius: 5px',
	'color: lime',
	'font-weight: normal',
	'padding: 5px 10px',
].join(';');

const unicornBarfStyles = 'font-size: 200px;';

const UnicornLog = {
	// ========================================== Variables //
	errors: 0,
	logOptions: {},
	name: 'UnicornLog',
	output: null,
	pluginOptions: {},
	types: [
		'dir',
		'error',
		'info',
		'log',
		'warn',
	],
	// ========================================== Default Options //
	defaultOptions: {
		array: [],
		logPrefix: false,
		name: 'UnicornLog',
		objects: {},
		styles: '',
		text: '🌈🦄',
		type: 'log',
	},

	// ========================================== Methods //

	// ===================== Init //
	init(Vue, pluginOptions = {}, logOptions = {}) {
		UnicornLogVueObj = Vue;

		// Set Options //
		this.pluginOptions = pluginOptions;
		this.logOptions = { ...this.defaultOptions, ...this.pluginOptions, ...logOptions };

		console.log({ logOptions });

		// Run validation functions //
		console.log('%c%s', 'color: lime', '========================================== Run Validation Functions');
		Object.values(this.validateOptions).map((value) => {
			if (typeof value === 'function') {
				return value.call();
			}

			return false;
		});

		// Run Build functions //
		console.log('%c%s', 'color: lime', '========================================== Run Build Functions');
		Object.values(this.build).map((value) => {
			if (typeof value === 'function') {
				return value.call();
			}

			return false;
		});

		this.determineType();
	},

	// ===================== Determine the type of console function to use //
	determineType() {
		console.log('%c%s', 'color: lime', '========================================== determineType()');

		if (this.errors) {
			return false;
		}
		this.consoleOutput(this.logOptions.type);
		return false;
	},
	// ===================== Validate the options //
	validateOptions: {
		type() {
			const type = UnicornLog.logOptions.type;
			const types = UnicornLog.types;

			if (!types.includes(type)) {
				UnicornLog.error(`console.${type}() is not supported at this time or is not a valid console method.`, 'warn');
				return false;
			}

			return false;
		},
		// Build log styles //
		styles(value = UnicornLog.logOptions.styles) {
			console.log('%c%s', 'color: lime;', '===================== validateOptions.styles()', { value });
		},
		logPrefix(value = UnicornLog.logOptions.logPrefix) {
			console.log('%c%s', 'color: lime;', '===================== validateOptions.logPrefix()', { value });

			if (typeof value === 'object' || value instanceof Boolean) {
				UnicornLog.error('The "logPrefix" option is not a string or boolean.');
			}
		},
		text(value = UnicornLog.logOptions.text) {
			console.log('%c%s', 'color: lime', '===================== validateOptions.text()', { value });

			if (typeof value !== 'string') {
				UnicornLog.error('The "text" option is not a string.');
			}
		},
		objects(value = UnicornLog.logOptions.objects) {
			console.log('%c%s', 'color: lime', '===================== validateOptions.objects()', { value });

			if (value instanceof Array || typeof value === 'string' || Number.isInteger(value)) {
				UnicornLog.error('The "objects" option is not an object.');
			}
		},
		array(value = UnicornLog.logOptions.array) {
			console.log('%c%s', 'color: lime', '===================== validateOptions.array()', { value });

			if (!(value instanceof Array) || typeof value === 'string' || Number.isInteger(value)) {
				UnicornLog.error('The "array" option is not an array.');
			}
		},
	},
	// ===================== Build stuff //
	build: {
		// Add Prefix if option set //
		prefix() {
			console.log('%c%s', 'color: lime', '===================== build.prefix()');
			const options = UnicornLog.logOptions;

			if (options.logPrefix) {
				if (typeof options.logPrefix === 'string') {
					options.text = `[${options.logPrefix}]: ${options.text}`;
				}
				else {
					options.text = `[${options.name}]: ${options.text}`;
				}
			}
		},
		// Build log styles //
		styles() {
			console.log('%c%s', 'color: lime', '===================== build.styles()');
			const options = UnicornLog.logOptions;
			let styles = options.styles;

			// If styles is an array, join them //
			if (Array.isArray(styles)) {
				styles = styles.join(';');
			}

			options.styles = styles;
		},
		text(value = UnicornLog.logOptions.text) {
			console.log('%c%s', 'color: lime', '===================== build.text()');
		},
		objects(value = UnicornLog.logOptions.objects) {
			console.log('%c%s', 'color: lime', '===================== build.objects()');
		},
		// Build the output //
		output(options = UnicornLog.logOptions) {
			console.log('%c%s', 'color: lime', '===================== build.output()', options);
			let styles = options.styles;

			if (styles === false) {
				styles = '';
			}
			else {
				styles = styles || defaultStyles;
			}

			const results = ['%c%s', styles];

			if (options.text) {
				results.push(options.text);
			}

			UnicornLog.output = results;
		},
	},
	// ===================== Console Functions //
	consoleDir() {
		const value = {};

		if (Object.keys(this.logOptions.objects).length) {
			if (Object.keys(this.logOptions.array).length) {
				value.objects = this.logOptions.objects;
			}
			else {
				Object.assign(value, this.logOptions.objects);
			}
		}

		if (Object.keys(this.logOptions.array).length) {
			if (Object.keys(this.logOptions.objects).length) {
				value.array = this.logOptions.array;
			}
			else {
				Object.assign(value, this.logOptions.array);
			}
		}

		if (!Object.keys(value).length) {
			return UnicornLog.error('console.dir() expects the "objects" and/or array option value to be set.');
		}

		return value;
	},
	consoleError() {
		console.error(...this.output);
	},
	consoleInfo() {
		console.info(...this.output);
	},
	consoleLog() {
		const styles = this.logOptions.styles || defaultStyles;
		console.log(...this.output);
	},
	consoleWarn() {
		console.warn(...this.output);
	},
	consoleOutput(logType) {
		if (logType === 'dir') {
			this.output = [this.consoleDir()];
		}

		console[logType](...this.output);
	},
	// ========================================== Error Handling //
	error(msg = 'An error has occurred.', logType = 'error') {
		const label = logType.charAt(0).toUpperCase() + logType.slice(1);
		this.errors += 1;

		console[logType](`[${UnicornLog.name} ${label}]: ${msg}`);
		return false;
	},
};

export default UnicornLog;

// const blarg = {
// 	install(Vue) {
// 		const Magical = Vue;

// 		// this.greetings(globalOptions, unicornBarfStyles);

// 		Magical.prototype.$unicornBarf = function(options = globalOptions, stringStyles = '', data = false, moreData = false) {
// 			// Only run if .env config is set to true //
// 			if (process.env.MIX_UNICORN_BARF !== 'true') {
// 				return false;
// 			}

// 			let text = options.text || '';
// 			let styles = options.styles || '';
// 			let additionalData = options.objects || false;
// 			let evenMoreData = moreData;

// 			// If incoming options is an Array //
// 			if (Array.isArray(options)) {
// 				text = options[0];
// 				styles = options[1] || null;
// 				additionalData = options[2] || null;
// 				evenMoreData = options[3] || null;
// 			}
// 			// If incoming options are strings //
// 			else if (typeof options === 'string') {
// 				text = options;
// 				styles = stringStyles;
// 				additionalData = data;
// 			}

// 			if (styles === '') {
// 				styles = defaultStyles;
// 			}

// 			// Default //
// 			if (text === '🌈🦄') {
// 				text = options.text;
// 				styles = unicornBarfStyles;
// 			}

// 			let results = ['%c%s', styles, text];

// 			// If there is multiple extra data //
// 			if (additionalData && evenMoreData) {
// 				results = ['%c%s', styles, text, additionalData, evenMoreData];
// 			}
// 			// If there are additional data //
// 			else if (additionalData) {
// 				results = ['%c%s', styles, text, additionalData];
// 			}
// 			// If additional data is a string
// 			else if (typeof additionalData === 'string') {
// 				results = ['%c%s', styles, text, additionalData];
// 			}

// 			// Unicode Barf //
// 			console.log(...results);
// 			return false;
// 		};
// 	},
// 	greetings() {
// 		const unicornBarfStylesText = `
// 			color: #fff;
// 			font-family: sans-serif;
// 			font-size: 3rem;
// 			letter-spacing: 0.15rem;
// 			margin-bottom: 25px;
// 			margin-top: 0px;
// 			text-shadow: -4px 4px #ef3550,
// 									-8px 8px #f48fb1,
// 									-12px 12px #7e57c2,
// 									-16px 16px #2196f3,
// 									-20px 20px #26c6da,
// 									-24px 24px #43a047,
// 									-28px 28px #eeff41,
// 									-32px 32px #f9a825,
// 									-36px 36px #ff5722;
// 			text-transform: uppercase;
// 			margin-bottom: 50px;
// 		`;

// 		console.log('%c%s%c%s', unicornBarfStylesText, 'Welcome to UnicornBarf\n', unicornBarfStyles, globalOptions.text);
