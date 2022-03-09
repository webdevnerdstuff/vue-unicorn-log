import UnicornLogCore from './UnicornLogCore';

const UnicornLog = {
	install(Vue, options = {}) {
		if (Vue.prototype.$unicornLog || Vue.prototype.$uniLog) {
			return;
		}

		// Set the Global options //
		this.options = { ...this.options, ...options };

		// Add an instance methods //
		Vue.prototype.$unicornLog = function(logOptions) {
			UnicornLogCore.init(Vue, UnicornLog.options, logOptions);
		};

		Vue.prototype.$uniLog = function(logOptions) {
			UnicornLogCore.init(Vue, UnicornLog.options, logOptions);
		};
	},
	options: {
		logPrefix: false,
		styles: '',
		type: 'log',
	},
};

export default UnicornLog;
