<template>
	<div>
		<div class="row mb-2">
			<div class="col-12">
				<h5 class="my-0"><code>objects</code></h5>
			</div>
		</div>

		<!-- ======================= Simple Example -->
		<div class="row mb-4" id="objects-simple-example">
			<div class="col-xl-4 col-6 d-flex align-items-center">
				<h6 class="my-0">Single object</h6>
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
	objects: { foo: 'bar' },
});
						</pre
					>
				</vue-code-highlight>
			</div>
		</div>

		<!-- ======================= Multiple Objects -->
		<div class="row mb-4" id="objects-multiple-example">
			<div class="col-xl-4 col-6 d-flex align-items-center">
				<h6 class="my-0">Multiple objects</h6>
			</div>
			<div class="col-xl-4 col-6 d-flex align-items-center justify-content-end">
				<button
					@click="multipleObjects"
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
	objects: { foo, bar },
});
						</pre
					>
				</vue-code-highlight>
			</div>
		</div>

		<!-- ======================= Object Spread Operator -->
		<div class="row mb-4" id="objects-spread-example">
			<div class="col-xl-4 col-6 d-flex align-items-center">
				<h6 class="my-0">Using object spread Operator</h6>
			</div>
			<div class="col-xl-4 col-6 d-flex align-items-center justify-content-end">
				<button
					@click="objectSpreadOperator"
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
	objects: { ...foo, ...bar },
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
	name: 'ObjectsExample',
	components: {
		VueCodeHighlight,
	},
	data: () => ({}),
	methods: {
		simpleExample() {
			this.$unicornLog({
				text: 'Hello World',
				objects: { foo: 'bar' },
			});
		},
		multipleObjects() {
			const foo = { foo: 'foo ' };
			const bar = { bar: 'bar ' };

			this.$unicornLog({
				text: 'Hello World',
				objects: { foo, bar },
			});
		},
		objectSpreadOperator() {
			const foo = { foo: 'foo' };
			const bar = { bar: 'bar' };

			this.$unicornLog({
				text: 'Hello World',
				objects: { ...foo, ...bar },
			});
		},
	},
};
</script>
