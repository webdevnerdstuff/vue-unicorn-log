<template>
	<div>
		<UnicornLog />
	</div>
</template>

<script>
import Vue from 'vue';
import UnicornLog from '@components/UnicornLog.vue';

const EventBus = new Vue();

Object.defineProperties(Vue.prototype, {
	$bus: {
		get() {
			return EventBus;
		},
	},
});

export default {
	name: 'App',
	components: {
		UnicornLog,
	},
};
</script>
