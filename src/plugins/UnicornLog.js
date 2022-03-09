import UnicornLogCore from './UnicornLogCore';

const UnicornLog = {
	install(Vue, options = {}) {
		const Magical = Vue;

		if (Vue.prototype.$unicornLog || Vue.prototype.$uniLog) {
			return;
		}

		// Set the Global options //
		this.options = { ...this.options, ...options };

		// Add an instance methods //
		Magical.prototype.$unicornLog = function(logOptions) {
			// Only run logs if .env config is set to true //

			// ! Need to test this on a real project to verify how it works //
			if (process.env.MIX_UNICORN_LOG !== 'true' || process.env.UNICORN_LOG !== 'true') {
				return false;
			}

			UnicornLogCore.init(Vue, UnicornLog.options, logOptions);
			return false;
		};

		// Magical.prototype.$uniLog = function(logOptions) {
		// 	// Only run logs if .env config is set to true //
		// 	if (process.env?.MIX_UNICORN_LOG !== 'true' || process.env?.UNICORN_LOG !== 'true') {
		// 		return false;
		// 	}

		// 	UnicornLogCore.init(Vue, UnicornLog.options, logOptions);
		// 	return false;
		// };
	},
	options: {
		logPrefix: false,
		styles: '',
		type: 'log',
	},
};

export default UnicornLog;
