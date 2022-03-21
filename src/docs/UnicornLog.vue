<template>
	<div>
		<Nav />

		<div class="container mb-5">
			<div class="row mb-3">
				<div class="col-12 text-center">
					<h1 class="rainbow-text">Vue Unicorn Log</h1>
				</div>
			</div>

			<div class="row">
				<div class="col-12 mb-4">
					<h3 class="text-center mb-4">
						A <span class="rainbow-text">magical</span> 🦄 plugin to make
						coloring the console output easier and more flexible.
					</h3>
					<p>
						Sometimes when building your application/site you don't want to see
						your linter complaining about using console functions. This helps to
						keep your linter happy so you can concentrate on writing bug free
						magical code.
					</p>
					<p>
						It also has the ability to run the console functions depending on
						environment variables so you can keep your production site's console
						quiet.
					</p>
				</div>

				<div class="col-12">
					<h5>Demo</h5>
				</div>

				<div class="col-12">
					Open DevTools and click on the "Console" tab and try out some
					<a href="#ul-examples">Examples</a>.
				</div>
			</div>
		</div>

		<div class="container">
			<!-- ============================================== Installation -->
			<div class="row mb-5" id="ul-installation">
				<div class="col-12">
					<h2>Installation</h2>
				</div>

				<div class="col-xl-8 col-lg-12">
					<vue-code-highlight language="shell">
						<pre>
npm i -D vue-unicorn-log
						</pre
						>
					</vue-code-highlight>
				</div>
			</div>

			<!-- ============================================== Usage -->
			<div class="row mb-5" id="ul-usage">
				<div class="col-12">
					<h2>Usage</h2>
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
									<td valign="top">defaultStyles</td>
									<td valign="top" class="option-type">Object</td>
									<td valign="top">
										<code>
											<pre>
const rainbowLinearGradient = `linear-gradient(to right,
	hsl(0, 100%, 50%),
	hsl(60, 100%, 50%),
	hsl(120, 100%, 50%),
	hsl(180, 100%, 50%),
	hsl(240, 100%, 50%),
	hsl(300, 100%, 50%),
	hsl(360, 100%, 50%)
)`;

defaultStyles: {
	log: [
		'background-color: black',
		`border-image: ${rainbowLinearGradient} 1`,
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
}</pre
											>
										</code>
									</td>
									<td valign="top">
										<code>
											<pre>
{
	log: [],
	info: [],
}</pre
											>
										</code>
									</td>
									<td valign="top">{{ copy.defaultStyles }}</td>
								</tr>
								<tr>
									<td valign="top">disabled</td>
									<td valign="top" class="option-type">Boolean</td>
									<td valign="top" class="boolean-style">false</td>
									<td valign="top" v-html="options.boolean"></td>
									<td valign="top">{{ copy.disabled }}</td>
								</tr>
								<tr>
									<td valign="top">logPrefix</td>
									<td valign="top" class="option-type">Boolean | String</td>
									<td valign="top" class="boolean-style">false</td>
									<td valign="top">-</td>
									<td valign="top">{{ copy.logPrefix }}</td>
								</tr>
								<tr>
									<td valign="top">styles</td>
									<td valign="top" class="option-type">String | Array</td>
									<td valign="top">-</td>
									<td valign="top" v-html="options.styles"></td>
									<td valign="top">{{ copy.styles }}</td>
								</tr>
								<tr>
									<td valign="top">type</td>
									<td valign="top" class="option-type">String</td>
									<td valign="top">log</td>
									<td valign="top" v-html="options.type"></td>
									<td valign="top">{{ copy.type }}</td>
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
  disabled: process.env.UNICORN_LOG !== 'true',
  logPrefix: '[OMG LOOK HERE!]',
  styles: 'font-weight: bold;',
  type: 'info'
});
								</pre
						>
					</vue-code-highlight>
				</div>

				<div class="col-12">
					<svg xmlns="http://www.w3.org/2000/svg" style="display: none">
						<symbol
							id="exclamation-triangle-fill"
							fill="currentColor"
							viewBox="0 0 16 16"
						>
							<path
								d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
							/>
						</symbol>
					</svg>

					<div
						class="alert alert-primary d-flex align-items-center my-2"
						role="alert"
					>
						<svg
							class="bi flex-shrink-0 me-2"
							width="24"
							height="24"
							role="img"
							aria-label="Info:"
						>
							<use xlink:href="#exclamation-triangle-fill"></use>
						</svg>
						<div>
							It is recommended to set the <code>disabled</code> option to use a
							<span class="fst-italic">.env</span> variable when possible. This
							way you will not have your logs exposed to the public when on a
							production site.
						</div>
					</div>
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
									<td valign="top" class="option-type">Array</td>
									<td valign="top"><code>[]</code></td>
									<td valign="top">-</td>
									<td valign="top">{{ copy.array }}</td>
								</tr>
								<tr>
									<td valign="top">disabled</td>
									<td valign="top" class="option-type">Boolean</td>
									<td valign="top" class="boolean-style">false</td>
									<td valign="top" v-html="options.boolean"></td>
									<td valign="top">{{ copy.disabled }}</td>
								</tr>
								<tr>
									<td valign="top">logPrefix</td>
									<td valign="top" class="option-type">Boolean | String</td>
									<td valign="top" class="boolean-style">false</td>
									<td valign="top">-</td>
									<td valign="top">{{ copy.logPrefix }}</td>
								</tr>
								<tr>
									<td valign="top">magical</td>
									<td valign="top" class="option-type">Boolean</td>
									<td valign="top" class="boolean-style">false</td>
									<td valign="top" v-html="options.boolean"></td>
									<td valign="top">{{ copy.magical }}</td>
								</tr>
								<tr>
									<td valign="top">name</td>
									<td valign="top" class="option-type">String</td>
									<td valign="top">[UnicornLog]:</td>
									<td valign="top">-</td>
									<td valign="top">
										If <code>logPrefix</code> option is set as a
										<span class="option-type">Boolean</span> of
										<span class="boolean-style">true</span>, it will use the
										<code>name</code> option for the prefix.
									</td>
								</tr>
								<tr>
									<td valign="top">objects</td>
									<td valign="top" class="option-type">Object</td>
									<td valign="top"><code>{}</code></td>
									<td valign="top">-</td>
									<td valign="top">{{ copy.object }}</td>
								</tr>
								<tr>
									<td valign="top">styles</td>
									<td valign="top" class="option-type">String | Array</td>
									<td valign="top">-</td>
									<td valign="top" v-html="options.styles"></td>
									<td valign="top">{{ copy.styles }}</td>
								</tr>
								<tr>
									<td valign="top">text</td>
									<td valign="top" class="option-type">String</td>
									<td valign="top">🦄</td>
									<td valign="top">-</td>
									<td valign="top">{{ copy.text }}</td>
								</tr>
								<tr>
									<td valign="top">type</td>
									<td valign="top" class="option-type">String</td>
									<td valign="top">log</td>
									<td valign="top" v-html="options.type"></td>
									<td valign="top">{{ copy.type }}</td>
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
			<div class="mb-5" id="ul-examples">
				<div class="row">
					<div class="col-12 mb-3">
						<h2>Examples</h2>
						<p class="fst-italic">
							Open DevTools and click on the "Console" tab to view example
							results.
						</p>
					</div>
				</div>

				<!-- ======================= Basic -->
				<SimpleExample id="simple-examples" />

				<!-- ======================= Text Option -->
				<TextExample id="text-examples" />

				<!-- ======================= Type Option -->
				<TypeExample id="type-examples" />

				<!-- ======================= Styles Option -->
				<StylesExample id="styles-examples" />

				<!-- ======================= Disabled Option -->
				<DisabledExample id="disabled-examples" />

				<!-- ======================= Log Prefix Option -->
				<LogPrefixExample id="logPrefix-examples" />

				<!-- ======================= Magical Option -->
				<MagicalExample id="magical-examples" />

				<!-- ======================= Name Option -->
				<LogPrefixExample id="name-examples" :isNameOption="true" />

				<!-- ======================= Objects Option -->
				<ObjectsExamples id="objects-examples" />

				<!-- ======================= Array Option -->
				<ArraysExample id="array-examples" />
			</div>

			<!-- ============================================== Dependencies -->
			<div class="row mb-5" id="ul-dependencies">
				<div class="col-12">
					<h2>Dependencies</h2>
				</div>

				<div class="col-xl-8 col-lg-12">
					<a href="https://vuejs.org/" target="_blank">Vue</a>
				</div>
			</div>

			<!-- ============================================== Change Log -->
			<div class="row mb-5" id="ul-change-log">
				<div class="col-12">
					<h2>Change Log</h2>
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
						>
							LICENSE.md
						</a>
					</p>
				</div>
			</div>

			<div class="row rainbow-border mb-5">
				<div class="col-12 text-center">
					<h1 class="rainbow-text mb-0">Vue Unicorn Log</h1>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Vue from 'vue';
import Nav from '@components/Nav.vue';
import ArraysExample from '@components/examples/Arrays.vue';
import DisabledExample from '@components/examples/Disabled.vue';
import LogPrefixExample from '@components/examples/LogPrefix.vue';
import MagicalExample from '@components/examples/Magical.vue';
import ObjectsExamples from '@components/examples/Objects.vue';
import SimpleExample from '@components/examples/Simple.vue';
import StylesExample from '@components/examples/Styles.vue';
import TextExample from '@components/examples/Text.vue';
import TypeExample from '@components/examples/Type.vue';
import UnicornLog from '@plugins/UnicornLog';
import { component as VueCodeHighlight } from 'vue-code-highlight';

Vue.use(UnicornLog);

export default {
	name: 'UnicornLog',
	props: {},
	components: {
		ArraysExample,
		DisabledExample,
		LogPrefixExample,
		MagicalExample,
		Nav,
		ObjectsExamples,
		SimpleExample,
		StylesExample,
		TextExample,
		TypeExample,
		VueCodeHighlight,
	},
	data: () => ({
		examples: {
			log: {
				text: 'Hello World',
			},
		},
		copy: {
			array: 'Used to include an array in the log.',
			defaultStyles: 'Used to adjust the default styles.',
			disabled: 'Disables the output of the log in the console. This works best when using an environment to conditionally set so it 										will log in development, but not on the production site.',
			logPrefix: 'Prepends a string to to the output.',
			magical: 'Adds a magical style to the output.',
			object: 'Used to include objects in the log.',
			styles: 'Sets the styles for the log.',
			text: 'Used to include a string in the log.',
			type: 'Specifies which console method should be used.',
		},
		options: {
			boolean: '<span class="boolean-style">true<br />false</span>',
			styles: '<a href="https://developer.mozilla.org/en-US/docs/Web/API/console#styling_console_output" target="_blank"											>Styling Console Output</a>',
			type: `
				clear
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
				trace
				<br />
				warn
			`,
		},
		rainbowLinearGradient: `linear-gradient(to right,
			hsl(0, 100%, 50%),
			hsl(39, 100%, 50%),
			hsl(60, 100%, 50%),
			hsl(120, 100%, 50%),
			hsl(180, 100%, 50%),
			hsl(240, 100%, 50%),
			hsl(300, 100%, 50%),
			hsl(360, 100%, 50%)
		)`,
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
		// this.welcomeLog();
		this.testingLogs();
	},
	methods: {
		exampleTextOption() {
			this.$unicornLog({
				text: this.examples.log.text,
			});
		},
		testingLogs() {
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
				text: 'test',
				logPrefix: true,
				magical: 'rainbow',
				styles: true,
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
		welcomeLog() {
			this.$unicornLog({
				text: 'Vue Unicorn Log... It\'s magical!',
				styles: [
					`background: ${this.rainbowLinearGradient}`,
					'color: #f7f7f7',
					'display: block',
					'font-family: "Helvetica", "Arial"',
					'font-size: 25px',
					'font-weight: bold',
					'margin: 5px 0',
					'padding: 15px',
					'text-align: center',
					'text-shadow: 1px 1px 2px #000',
				],
				type: 'log',
			});
		},
	},
};
</script>

<style lang="scss">
@import 'vue-code-highlight/themes/prism-tomorrow.css';
@import 'vue-code-highlight/themes/window.css';

$rainbow-gradient: linear-gradient(
	to right,
	hsl(0, 100%, 50%),
	hsl(39, 100%, 50%),
	hsl(60, 100%, 50%),
	hsl(120, 100%, 50%),
	hsl(180, 100%, 50%),
	hsl(240, 100%, 50%),
	hsl(300, 100%, 50%),
	hsl(0, 100%, 50%)
);

html {
	scroll-padding-top: 70px;
}

h1 {
	font-family: 'Henny Penny', cursive;
	font-weight: bold;
	font-size: 3em;
}

h2 {
	font-family: 'Indie Flower', cursive;

	&::after {
		content: ' ';
		background-image: $rainbow-gradient;
		border-radius: 5px;
		display: block;
		height: 2px;
	}
}

.table {
	tbody {
		td {
			pre {
				background-color: #fafafa !important;
				border-radius: 5px;
				padding: 1rem;
				tab-size: 2;
			}
		}
	}
}

.option-type {
	color: #7b1fa2 !important;
	font-weight: 500;
}

.boolean-style {
	color: #00f !important;
	font-weight: 500;
}

.rainbow-text {
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
	background-image: $rainbow-gradient;
	border-radius: 5px;
	color: transparent;
	display: inline-block;
	font-weight: bold;
	height: 60px;
	text-shadow: 0 2px 3px rgba(255, 255, 255, 0.3), 0 -1px 2px rgba(0, 0, 0, 0.2);
}

.rainbow-border {
	background-color: black;
	border-image: $rainbow-gradient 1;
	border-style: solid;
	border-width: 4px;
	padding: 2rem;
}
</style>
