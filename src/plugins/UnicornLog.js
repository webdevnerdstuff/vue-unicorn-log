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
			UnicornLogCore.init(Vue, UnicornLog.options, logOptions);
			return false;
		};

		Magical.prototype.$uniLog = function(logOptions) {
			UnicornLogCore.init(Vue, UnicornLog.options, logOptions);
			return false;
		};
	},
	options: {
		defaultStyles: {},
		disabled: false,
		logPrefix: false,
		styles: '',
		type: 'log',
	},
};

export default UnicornLog;
