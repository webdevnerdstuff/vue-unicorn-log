<template>
	<div>
		<div class="row mb-2">
			<div class="col-12">
				<h5 class="my-0"><code>styles</code></h5>
			</div>

			<div class="col-xl-8 col-lg-12">
				For a list of the different available styles, refer to the
				<a
					href="https://developer.mozilla.org/en-US/docs/Web/API/console#styling_console_output"
					target="_blank"
					>Web APIs MDN Styling Console Output
				</a>
				developer documentation. Depending on the browser, some styles may not
				work.
			</div>
		</div>

		<!-- ======================= Simple Example -->
		<div class="row mb-4" id="defaultStyles-simple-example">
			<div class="col-xl-4 col-6 d-flex align-items-center">
				<div class="col-xl-8 col-lg-12 mt-2">
					<input
						v-model="defaultStyles"
						class="form-control"
						type="text"
						value="[Bunnies]:"
						placeholder="[Bunnies]:"
					/>
				</div>
			</div>
			<div class="col-xl-4 col-6 d-flex align-items-center justify-content-end">
				<button
					@click="simpleExample"
					class="btn btn-outline-primary btn-sm"
					type="button"
				>
					Run
				</button>
			</div>

			<div class="col-xl-8 col-lg-12">
				<vue-code-highlight language="js">
					<pre>
this.$unicornLog({
	text: 'Hello World',
	styles: '{{ this.defaultStyles }}',
});
						</pre
					>
				</vue-code-highlight>
			</div>
		</div>

		<!-- ======================= Word Example -->
		<div class="row mb-2" id="defaultStyles-word-example">
			<div class="col-xl-8 col-lg-12">
				You can also set the <code>style</code> option to a magical word to make
				the magic happen. This can also be set with the
				<code>magical</code> option to <span class="boolean-style">true</span>.
			</div>
		</div>

		<div class="row mb-4" id="defaultStyles-word-example">
			<div class="col-xl-4 col-6 d-flex align-items-center">
				<div class="col-xl-8 col-lg-12 mt-2">
					<select v-model="magicalWord" class="form-select">
						<option v-for="word in magicalWords" :key="word">{{ word }}</option>
					</select>
				</div>
			</div>
			<div class="col-xl-4 col-6 d-flex align-items-center justify-content-end">
				<button
					@click="wordExample"
					class="btn btn-outline-primary btn-sm"
					type="button"
				>
					Run
				</button>
			</div>

			<div class="col-xl-8 col-lg-12">
				<vue-code-highlight language="js">
					<pre>
this.$unicornLog({
	text: 'Hello World',
	styles: '{{ this.magicalWord }}',
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
	name: 'StylesExample',
	components: {
		VueCodeHighlight,
	},
	data: () => ({
		defaultStyles: 'color: red;',
		magicalWord: 'unicorn',
		magicalWords: [
			'magic',
			'magical',
			'prism',
			'psychedelic',
			'rainbow',
			'trippy',
			'unicorn',
		],
	}),
	methods: {
		simpleExample() {
			this.$unicornLog({
				text: 'Hello World',
				styles: this.defaultStyles,
			});
		},
		wordExample() {
			this.$unicornLog({
				text: `Using the word ${this.magicalWord}`,
				styles: this.magicalWord,
			});
		},
	},
};
</script>
