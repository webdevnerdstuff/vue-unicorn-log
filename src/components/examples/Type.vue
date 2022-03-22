<template>
	<div>
		<div class="row mb-2">
			<div class="col-12">
				<h5 class="my-0"><code>type</code></h5>
			</div>
		</div>

		<!-- ======================= Simple Example -->
		<div class="row mb-4" id="defaultStyles-simple-example">
			<div class="col-xl-4 col-6 d-flex align-items-center">
				<div class="col-xl-8 col-lg-12 mt-2">
					<select v-model="logType" class="form-select" @change="checkType">
						<option v-for="type in types" :key="type">{{ type }}</option>
					</select>
				</div>
			</div>
			<div class="col-xl-4 col-6 d-flex align-items-center justify-content-end">
				<button
					@click="simpleExample"
					class="btn btn-outline-primary btn-sm"
					type="button"
					:disabled="this.logType === 'groupEnd'"
				>
					Run
				</button>
			</div>

			<div class="col-xl-8 col-lg-12 my-2" v-if="logNote">
				<div
					class="alert alert-primary d-flex align-items-center mb-0"
					role="alert"
					v-html="logNote"
				></div>
			</div>

			<div class="col-xl-8 col-lg-12">
				<vue-code-highlight language="js">
					<pre>
this.$unicornLog({
	text: 'Hello World',
	type: 'log',
});
						</pre
					>
				</vue-code-highlight>
			</div>
		</div>
	</div>
</template>

<script>
import Vue from 'vue';
import UnicornLog from '@plugins/UnicornLog';
import { component as VueCodeHighlight } from 'vue-code-highlight';

Vue.use(UnicornLog);

export default {
	name: 'TypeExample',
	components: {
		VueCodeHighlight,
	},
	data: () => ({
		logNote: '',
		logType: 'log',
		types: [
			'clear',
			'debug',
			'dir',
			'error',
			'group',
			'groupCollapsed',
			'groupEnd',
			'info',
			'log',
			'table',
			'trace',
			'warn',
		],
	}),
	methods: {
		checkType() {
			this.logNote = '';

			const iconSvg = `
				<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
					<symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
						<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
					</symbol>
				</svg>
			`;

			const infoIcon = `
			${iconSvg}
			 <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Info:"><use xlink:href="#info-fill"></use></svg>
			`;

			if (this.logType === 'dir' || this.logType === 'table') {
				this.logNote = `${infoIcon}<div>Console method <code>${this.logType}</code> will work, but does not support colors.</div>`;
				return false;
			}

			if (this.logType === 'groupEnd') {
				this.logNote = `${infoIcon}<div><code>groupEnd</code> only works when used with <code>group</code> or <code>groupCollapsed</code><div>`;

				return false;
			}

			return false;
		},
		simpleExample() {
			if (this.logType === 'dir') {
				this.$unicornLog({
					text: 'Hello World',
					type: 'dir',
					objects: { foo: 'bar' },
				});

				return false;
			}

			if (this.logType === 'table') {
				this.$unicornLog({
					text: 'Hello World',
					type: this.logType,
					array: [{ foo: 'foo' }, { foo: 'bar' }],
				});

				return false;
			}

			if (this.logType === 'debug') {
				this.$unicornLog({
					text: 'Hello World',
					type: this.logType,
					array: [{ foo: 'foo' }, { foo: 'bar' }],
				});

				return false;
			}

			if (this.logType === 'group' || this.logType === 'groupCollapsed') {
				this.$unicornLog({
					text: `${this.logType}`,
					type: this.logType,
				});

				this.$unicornLog({
					text: 'Foo',
					type: 'log',
				});

				this.$unicornLog({
					text: 'Bar',
					type: 'log',
				});

				this.$unicornLog({
					type: 'groupEnd',
					array: [{ foo: 'foo' }, { foo: 'bar' }],
				});

				return false;
			}

			this.$unicornLog({
				text: 'Hello World',
				type: this.logType,
			});

			return false;
		},
	},
};
</script>
