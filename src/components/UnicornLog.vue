<template>
	<div style="font-family: 'Open Sans', sans-serif; padding: 20px 0">
		<div class="container">
			<div class="row">
				<div cols="12">
					<h1 class="mb-4">Unicorn Log</h1>
				</div>
			</div>
			<div class="row">
				<div cols="12">Open DevTools and click on the "Console" tab.</div>
			</div>
		</div>
	</div>
</template>

<script>
import Vue from 'vue';
import UnicornLog from '@plugins/UnicornLog';

Vue.use(UnicornLog, {
	// type: 'warn',
	// logPrefix: true,
	// styles: 'background: #0f0; color: #fff;',
	// disabled: process.env.UNICORN_LOG !== 'true',
	// defaultStyles: {
	// 	info: [
	// 		'background-color: white',
	// 		'color: #000',
	// 		'font-weight: normal',
	// 		'padding: 8px',
	// 	],
	// },
});

export default {
	name: 'UnicornLog',
	props: {},
	data: () => ({
		testObj: {
			foo: 'foo',
			bar: 'bar',
		},
		testObjTwo: {
			fooTwo: 'fooTwo',
			barTwo: 'barTwo',
		},
	}),
	mounted() {
		this.consoleLog();
	},
	methods: {
		consoleLog() {
			const internalObject = {
				internalFoo: 'internalFoo',
				internalBar: 'internalBar',
			};

			const testObj = this.testObj;
			const testObjTwo = this.testObjTwo;

			// this.$unicornLog({
			// 	text: 'hello world A',
			// 	logPrefix: true,
			// 	type: 'log',
			// 	// styles: 'trippy',
			// 	// styles: 'background: #000; color: #fff; padding: 10px;',
			// 	// styles: 'rainbow',
			// 	// magical: true,
			// 	// styles: false,
			// 	// type: 'dir',
			// 	objects: { internalObject },
			// 	// objects: 'string',
			// 	// objects: { testObj, testObjTwo, internalObject },
			// 	// array: { testObj, testObjTwo, internalObject },
			// 	// array: ['foo', 'bar'],
			// 	// array: [
			// 	// 	{ foo: 'bar' },
			// 	// ],
			// 	// objects: ['foo', 'bar'],
			// 	// objects: '20',
			// 	// objects: [this.testObj, this.testObjTwo, internalObject],
			// });

			this.$unicornLog({
				text: 'hello world B',
				logPrefix: true,
				// magical: 'rainbow',
				styles: false,
				type: 'debug',
				// objects: { internalObject },
				// objects: 'string',
				objects: { testObj, testObjTwo, internalObject },
				// array: { testObj, testObjTwo, internalObject },
				// array: [this.testObj, this.testObjTwo, internalObject],
				// array: ['foo', 'bar'],
				// array: [
				// 	{ foo: 'bar' },
				// ],
				// objects: ['foo', 'bar'],
				// objects: '20',
				// objects: [this.testObj, this.testObjTwo, internalObject],
			});

			// this.$unicornLog({
			// 	// type: 'clear',
			// });

			// this.$unicornLog({
			// 	type: 'countReset',
			// 	text: 'Some Group',
			// 	// array: [
			// 	// 	{ foo: 'bar' },
			// 	// 	{ foo: 'moo' },
			// 	// 	{ foo: 'derp' },
			// 	// ],
			// });

			// this.$unicornLog({
			// 	type: 'log',
			// 	text: 'hi',
			// });
			// this.$unicornLog({
			// 	type: 'log',
			// 	text: 'hi',
			// });
			// this.$unicornLog({
			// 	type: 'log',
			// 	text: 'hi',
			// });
			// this.$unicornLog({
			// 	type: 'groupEnd',
			// 	text: 'Some Group',
			// });
		},
	},
};
</script>
