<template>
	<div>
		<Nav />

		<div class="container mb-5">
			<div class="row">
				<div class="col-12">
					<h1 class="mb-4">Unicorn Log</h1>
				</div>
			</div>
			<div class="row">
				<div class="col-12 mb-4">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus
					odio nulla, numquam similique repellat tempore? Ratione unde similique
					aperiam exercitationem a, veritatis soluta sunt officia cupiditate
					laboriosam, dicta ipsa fuga.
				</div>

				<div class="col-12">
					<h5>Demo</h5>
				</div>

				<div class="col-12">Open DevTools and click on the "Console" tab.</div>
			</div>
		</div>

		<div class="container">
			<!-- ============================================== Installation -->
			<div class="row mb-5" id="ul-installation">
				<div class="col-12">
					<h2>Installation</h2>
					<hr />
				</div>

				<div class="col-xl-8 col-lg-12">
					<vue-code-highlight language="shell">
						<pre>
	$ npm i -D vue-unicorn-log
						</pre
						>
					</vue-code-highlight>
				</div>
			</div>

			<!-- ============================================== Usage -->
			<div class="row mb-5" id="ul-usage">
				<div class="col-12">
					<h2>Usage</h2>
					<hr />
				</div>

				<div class="col-xl-8 col-lg-12">
					<vue-code-highlight language="js">
						<pre>
import Vue from 'vue';
import UnicornLog from 'vue-unicorn-log';

Vue.use(UnicornLog);
								</pre
						>
					</vue-code-highlight>
				</div>
			</div>

			<!-- ============================================== Plugin Options -->
			<div class="row mb-5" id="ul-plugin-options">
				<div class="col-12 mb-3">
					<h2>Plugin Options</h2>
				</div>

				<div class="col-12 mb-3">
					<div class="table-responsive">
						<table class="table table-striped table-bordered">
							<thead>
								<tr>
									<th>Name</th>
									<th>Type</th>
									<th>Default</th>
									<th>Options</th>
									<th>Description</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>defaultStyles</td>
									<td class="option-type">Object</td>
									<td><code>{ log, info, goNuts }</code></td>
									<td>-</td>
									<td>-</td>
								</tr>
								<tr>
									<td>disabled</td>
									<td class="option-type">Boolean</td>
									<td class="boolean">false</td>
									<td>-</td>
									<td>-</td>
								</tr>
								<tr>
									<td>logPrefix</td>
									<td class="option-type">Boolean | String</td>
									<td class="boolean">false</td>
									<td>-</td>
									<td>-</td>
								</tr>
								<tr>
									<td>styles</td>
									<td class="option-type">String</td>
									<td>-</td>
									<td>-</td>
									<td>-</td>
								</tr>
								<tr>
									<td>type</td>
									<td class="option-type">String</td>
									<td>log</td>
									<td>
										clear
										<br />
										count
										<br />
										countReset
										<br />
										countReset
										<br />
										debug
										<br />
										dir
										<br />
										error
										<br />
										group
										<br />
										groupCollapsed
										<br />
										groupEnd
										<br />
										info
										<br />
										log
										<br />
										table
										<br />
										time
										<br />
										timeEnd
										<br />
										timeLog
										<br />
										trace
										<br />
										warn
									</td>
									<td>-</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>

				<!-- ======================= Plugin Option Overriding -->
				<div class="col-12">
					<h5>Overriding the plugin default options</h5>
				</div>

				<div class="col-xl-8 col-lg-12">
					<vue-code-highlight language="js">
						<pre>
import Vue from 'vue';
import UnicornLog from 'vue-unicorn-log';

Vue.use(UnicornLog, {
  defaultStyles: {},
  disabled: true,
  logPrefix: 'FooBar',
  styles: '',
  type: 'info'
});
								</pre
						>
					</vue-code-highlight>
				</div>
			</div>

			<!-- ============================================== Log Options -->
			<div class="row mb-5" id="ul-log-options">
				<div class="col-12 mb-3">
					<h2>Log Options</h2>
				</div>

				<div class="col-lg-12">
					<div class="table-responsive">
						<table class="table table-striped table-bordered">
							<thead>
								<tr>
									<th>Name</th>
									<th>Type</th>
									<th>Default</th>
									<th>Options</th>
									<th>Description</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td valign="top">array</td>
									<td valign="top" style="color: #7b1fa2; font-weight: 500">
										Array
									</td>
									<td valign="top"><code>[]</code></td>
									<td valign="top">-</td>
									<td valign="top">-</td>
								</tr>
								<tr>
									<td valign="top">defaultStyles</td>
									<td valign="top" style="color: #7b1fa2; font-weight: 500">
										Object
									</td>
									<td valign="top"><code>{ log, info, goNuts }</code></td>
									<td valign="top">-</td>
									<td valign="top">-</td>
								</tr>
								<tr>
									<td valign="top">disabled</td>
									<td valign="top" style="color: #7b1fa2; font-weight: 500">
										Boolean
									</td>
									<td valign="top" style="color: blue; font-weight: 400">
										false
									</td>
									<td valign="top">-</td>
									<td valign="top">-</td>
								</tr>
								<tr>
									<td valign="top">logPrefix</td>
									<td valign="top" style="color: #7b1fa2; font-weight: 500">
										Boolean | String
									</td>
									<td valign="top" style="color: blue; font-weight: 400">
										false
									</td>
									<td valign="top"></td>
									<td valign="top"></td>
								</tr>
								<tr>
									<td valign="top">magical</td>
									<td valign="top" style="color: #7b1fa2; font-weight: 500">
										Boolean | String
									</td>
									<td valign="top" style="color: blue; font-weight: 400">
										false
									</td>
									<td valign="top">-</td>
									<td valign="top">-</td>
								</tr>
								<tr>
									<td valign="top">name</td>
									<td valign="top" style="color: #7b1fa2; font-weight: 500">
										String
									</td>
									<td valign="top">UnicornLog</td>
									<td valign="top">-</td>
									<td valign="top">-</td>
								</tr>
								<tr>
									<td valign="top">objects</td>
									<td valign="top" style="color: #7b1fa2; font-weight: 500">
										Object
									</td>
									<td valign="top"><code>{}</code></td>
									<td valign="top">-</td>
									<td valign="top">-</td>
								</tr>
								<tr>
									<td valign="top">styles</td>
									<td valign="top" style="color: #7b1fa2; font-weight: 500">
										String
									</td>
									<td valign="top">-</td>
									<td valign="top">-</td>
									<td valign="top">-</td>
								</tr>
								<tr>
									<td valign="top">text</td>
									<td valign="top" style="color: #7b1fa2; font-weight: 500">
										String
									</td>
									<td valign="top">🌈🦄</td>
									<td valign="top">-</td>
									<td valign="top">-</td>
								</tr>
								<tr>
									<td valign="top">type</td>
									<td valign="top" style="color: #7b1fa2; font-weight: 500">
										String
									</td>
									<td valign="top">
										clear
										<br />
										count
										<br />
										countReset
										<br />
										countReset
										<br />
										debug
										<br />
										dir
										<br />
										error
										<br />
										group
										<br />
										groupCollapsed
										<br />
										groupEnd
										<br />
										info
										<br />
										log
										<br />
										table
										<br />
										time
										<br />
										timeEnd
										<br />
										timeLog
										<br />
										trace
										<br />
										warn
									</td>
									<td valign="top">-</td>
									<td valign="top">-</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>

			<!-- ============================================== Instance Methods -->
			<div class="row mb-5" id="ul-instance-methods">
				<div class="col-12">
					<h2>Instance Methods</h2>
					<hr />
				</div>

				<div class="col-12">
					There are two instance methods available to use:
					<br />
					<code>$unicornLog</code>
					<br />
					<code>$uniLog</code>
				</div>
			</div>

			<!-- ============================================== Console Methods -->
			<div class="row mb-5" id="ul-console-methods">
				<div class="col-12">
					<h2>Console Methods</h2>
					<hr />
				</div>

				<div class="col-12">
					For a description of the different log methods, refer to the
					<a
						href="https://developer.mozilla.org/en-US/docs/Web/API/console"
						target="_blank"
						>Web APIs MDN</a
					>
					developer documentation for console.
				</div>
			</div>

			<!-- ============================================== Examples -->
			<div class="row mb-5" id="ul-examples">
				<div class="col-12">
					<h2>Examples</h2>
					<hr />
				</div>
				<div class="col-12" id="basic-example">
					<h5>Basic</h5>
				</div>

				<div class="col-xl-8 col-lg-12">
					<vue-code-highlight language="js">
						<pre>
this.$unicornLog({
  text : 'Hello World',
});
						</pre
						>
					</vue-code-highlight>
				</div>
			</div>

			<!-- ============================================== Dependencies -->
			<div class="row mb-5" id="ul-dependencies">
				<div class="col-12">
					<h2>Dependencies</h2>
					<hr />
				</div>

				<div class="col-xl-8 col-lg-12">
					<a href="https://vuejs.org/" target="_blank">Vue</a>
				</div>
			</div>

			<!-- ============================================== Change Log -->
			<div class="row mb-5" id="ul-change-log">
				<div class="col-12">
					<h2>Change Log</h2>
					<hr />
				</div>

				<div class="col-12">
					<a
						href="https://github.com/webdevnerdstuff/vue-unicorn-log/blob/master/CHANGELOG.md"
						target="_blank"
						>CHANGELOG.md</a
					>
				</div>
			</div>

			<!-- ============================================== License -->
			<div class="row mb-5" id="ul-license">
				<div class="col-12">
					<h2>License</h2>
					<hr />
				</div>

				<div class="col-12">
					<p>
						Copyright &copy; 2022 WebDevNerdStuff
						<br />
						Licensed under the MIT license.
					</p>
					<p>
						<a
							href="https://github.com/webdevnerdstuff/vue-unicorn-log/blob/master/LICENSE.md"
							target="_blank"
							>LICENSE.md</a
						>
					</p>

					<p></p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Vue from 'vue';
import Nav from '@components/Nav.vue';
import UnicornLog from '@plugins/UnicornLog';
import { component as VueCodeHighlight } from 'vue-code-highlight';

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
	components: {
		Nav,
		VueCodeHighlight,
	},
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
				text: 'hello world Basdfasdfasdf',
				logPrefix: true,
				magical: 'rainbow',
				// styles: false,
				type: 'log',
				objects: { testObj, testObjTwo, internalObject },
			});

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

<style lang="scss">
@import 'vue-code-highlight/themes/prism-tomorrow.css';
@import 'vue-code-highlight/themes/window.css';

.table {
	tbody {
		td {
			code {
				background-color: #2d2d2d;
				border-radius: 5px;
				color: #ccc;
				display: block;
				padding: 1em;
			}

			pre {
				background-color: #fafafa !important;
				// color: #fff;
				border-radius: 5px;
				padding: 1rem;
				tab-size: 2;
			}

			&.option-type {
				font-weight: 500;
				color: #7b1fa2 !important;
			}

			&.boolean {
				font-weight: 400;
				color: #00f;
			}
		}
	}
}
</style>
