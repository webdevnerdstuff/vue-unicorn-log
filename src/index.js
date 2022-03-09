import UnicornLog from '@plugins/UnicornLog';

export const version = '__VERSION__';

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(UnicornLog);
}

export default UnicornLog;
