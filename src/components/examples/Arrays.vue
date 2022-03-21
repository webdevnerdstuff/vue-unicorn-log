<template>
	<div>
		<div class="row mb-2">
			<div class="col-12">
				<h5 class="my-0"><code>array</code></h5>
			</div>
		</div>

		<!-- ======================= Simple Example -->
		<div class="row mb-4" id="array-simple-example">
			<div class="col-xl-4 col-6 d-flex align-items-center">
				<h6 class="my-0">Single array</h6>
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
	array: ['foo', 'bar'],
});
						</pre
					>
				</vue-code-highlight>
			</div>
		</div>

		<!-- ======================= Array Objects -->
		<div class="row mb-4" id="array-objects-example">
			<div class="col-xl-4 col-6 d-flex align-items-center">
				<h6 class="my-0">Using an array of objects</h6>
			</div>
			<div class="col-xl-4 col-6 d-flex align-items-center justify-content-end">
				<button
					@click="objectArray"
					class="btn btn-outline-primary btn-sm"
					type="button"
				>
					Run
				</button>
			</div>

			<div class="col-xl-8 col-lg-12">
				<vue-code-highlight language="js">
					<pre>
const foo = { foo: 'foo ' };
const bar = { bar: 'bar ' };

this.$unicornLog({
	text: 'Hello World',
	array: [foo, bar],
});
						</pre
					>
				</vue-code-highlight>
			</div>
		</div>

		<!-- ======================= Array Spread Operator -->
		<div class="row mb-4" id="array-spread-example">
			<div class="col-xl-4 col-6 d-flex align-items-center">
				<h6 class="my-0">Using array spread Operator</h6>
			</div>
			<div class="col-xl-4 col-6 d-flex align-items-center justify-content-end">
				<button
					@click="arraySpreadOperator"
					class="btn btn-outline-primary btn-sm"
					type="button"
				>
					Run
				</button>
			</div>

			<div class="col-xl-8 col-lg-12">
				<vue-code-highlight language="js">
					<pre>
const foo = ['foo'];
const bar = ['bar'];

this.$unicornLog({
	text: 'Hello World',
	array: [...foo, ...bar],
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
	name: 'ArraysExample',
	components: {
		VueCodeHighlight,
	},
	data: () => ({}),
	methods: {
		simpleExample() {
			this.$unicornLog({
				text: 'Hello World',
				array: ['foo', 'bar'],
			});
		},
		objectArray() {
			const foo = { foo: 'foo ' };
			const bar = { bar: 'bar ' };

			this.$unicornLog({
				text: 'Hello World',
				array: [foo, bar],
			});
		},
		arraySpreadOperator() {
			const foo = ['foo'];
			const bar = ['bar'];

			this.$unicornLog({
				text: 'Hello World',
				array: [...foo, ...bar],
			});
		},
	},
};
</script>
