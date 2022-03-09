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
const rainbowLinearGradient = `linear-gradient(to right,
	rgb(255, 0, 0),
	rgb(255, 191, 0),
	rgb(128, 255, 0),
	rgb(0, 255, 64),
	rgb(0, 255, 255),
	rgb(0, 64, 255),
	rgb(128, 0, 255),
	rgb(255, 0, 191),
	rgb(255, 0, 0)
)`;

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
	// ========================================== Default Styles //
	defaultStyles: {
		log: [
			'background-color: black',
			`border-image: ${rainbowLinearGradient} 1`,
			'border-radius: 5px',
			'border-style: solid',
			'border-width: 4px',
			'color: #fff',
			'font-weight: normal',
			'padding: 8px',
		],
		info: [
			'background-color: hsla(225, 100%, 8%, 1)',
			'box-shadow: 999px 0 0 hsla(225, 100%, 8%, 1)',
			'color: hsla(225, 100%, 85%, 1)',
			'display: block',
			'padding: 2px',
		],
		goNuts: [
			`background: ${rainbowLinearGradient}`,
			'color: #f7f7f7',
			'display: block',
			'font-family: "Helvetica", "Arial"',
			'font-size: 15px',
			'font-weight: bold',
			'margin: 5px 0',
			'padding: 10px',
			'text-shadow: 1px 1px 2px #000',
		],
	},
	// ========================================== Default Options //
	defaultOptions: {
		array: [],
		disabled: true,
		logPrefix: false,
		magical: false,
		name: 'UnicornLog',
		objects: {},
		styles: '',
		text: '🌈🦄',
		type: 'log',
	},

	// ========================================== Methods //

	// ===================== Init //
	init(Vue, pluginOptions = {}, logOptions = {}) {
		// Do not run if disabled in the Plugin options //
		if (pluginOptions.disabled) {
			return false;
		}

		// Set Options //
		this.pluginOptions = pluginOptions;
		this.logOptions = { ...this.defaultOptions, ...this.pluginOptions, ...logOptions };

		console.log('%c%s', this.defaultStyles.goNuts, '===================== build.styles()');

		console.log({ logOptions });

		// Run validation functions //
		console.log('%c%s', 'color: Lime', '========================================== Run Validation Functions');
		Object.values(this.validateOptions).map((value) => {
			if (typeof value === 'function') {
				return value.call();
			}

			return false;
		});

		// Run Build functions //
		console.log('%c%s', 'color: Lime', '========================================== Run Build Functions');
		Object.values(this.build).map((value) => {
			if (typeof value === 'function') {
				return value.call();
			}

			return false;
		});

		this.determineType();
		return false;
	},

	// ===================== Determine the type of console function to use //
	determineType() {
		console.log('%c%s', 'color: Lime', '========================================== determineType()');

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
				UnicornLog.logger(`console.${type}() is not supported at this time or is not a valid console method.`, 'warn');
				return false;
			}

			return false;
		},
		// Build log styles //
		styles(value = UnicornLog.logOptions.styles) {
			console.log('%c%s', 'color: Lime;', '===================== validateOptions.styles()', { value });
		},
		logPrefix(value = UnicornLog.logOptions.logPrefix) {
			console.log('%c%s', 'color: Lime;', '===================== validateOptions.logPrefix()', { value });

			if (typeof value === 'object' || value instanceof Boolean) {
				UnicornLog.logger('The "logPrefix" option is not a string or boolean.', 'error');
			}
		},
		text(value = UnicornLog.logOptions.text) {
			console.log('%c%s', 'color: Lime', '===================== validateOptions.text()', { value });

			if (typeof value !== 'string') {
				UnicornLog.logger('The "text" option is not a string.', 'error');
			}
		},
		objects(value = UnicornLog.logOptions.objects) {
			console.log('%c%s', 'color: Lime', '===================== validateOptions.objects()', { value });

			if (value instanceof Array || typeof value === 'string' || Number.isInteger(value)) {
				UnicornLog.logger('The "objects" option is not an object.', 'error');
			}
		},
		array(value = UnicornLog.logOptions.array) {
			console.log('%c%s', 'color: Lime', '===================== validateOptions.array()', { value });

			if (!(value instanceof Array) || typeof value === 'string' || Number.isInteger(value)) {
				UnicornLog.logger('The "array" option is not an array.', 'error');
			}
		},
	},
	// ===================== Build stuff //
	build: {
		// Add Prefix if option set //
		prefix() {
			console.log('%c%s', 'color: Lime', '===================== build.prefix()');
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
			console.log('%c%s', 'color: Lime', '===================== build.styles()');
			const options = UnicornLog.logOptions;
			let styles = options.styles;
			console.log({ styles });

			// If styles should be magical AF //
			if (options.type === 'log' && (options.styles === 'rainbow' || options.magical)) {
				styles = UnicornLog.defaultStyles.goNuts.join(';');
			}
			// If styles is an array, join them //
			if (Array.isArray(styles)) {
				styles = styles.join(';');
			}

			options.styles = styles;
		},
		// text(value = UnicornLog.logOptions.text) {
		// 	console.log('%c%s', 'color: Lime', '===================== build.text()');
		// },
		// objects(value = UnicornLog.logOptions.objects) {
		// 	console.log('%c%s', 'color: Lime', '===================== build.objects()');
		// },
		// Build the output //
		output(options = UnicornLog.logOptions) {
			console.log('%c%s', 'color: Lime', '===================== build.output()', options);
			let styles = options.styles;

			console.log({ styles });

			if (styles === false) {
				styles = '';
			}
			else {
				styles = styles || UnicornLog.defaultStyles.log.join(';');
			}

			console.log({ styles });

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
			return UnicornLog.logger('console.dir() expects the "objects" and/or array option value to be set.', 'error');
		}

		UnicornLog.logger('console.dir() does not support colors.', 'info');

		return value;
	},
	consoleOutput(logType) {
		if (logType === 'dir') {
			this.output = [this.consoleDir()];
		}

		console[logType](...this.output);
	},
	// ========================================== Unicorn Logger //
	logger(msg = 'An error has occurred.', logType = 'log') {
		const label = logType.charAt(0).toUpperCase() + logType.slice(1);
		let style = '';

		if (logType === 'error') {
			this.errors += 1;
		}

		if (logType === 'info') {
			style = this.defaultStyles.info.join(';');
		}

		console[logType]('%c%s', style, `[${UnicornLog.name} ${label}]: ${msg}`);
		return false;
	},
};

export default UnicornLog;
