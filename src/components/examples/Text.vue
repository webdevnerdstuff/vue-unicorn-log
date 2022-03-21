<template>
	<div>
		<div class="row mb-2">
			<div class="col-12">
				<h5 class="my-0"><code>text</code></h5>
			</div>
		</div>

		<!-- ======================= Simple Example -->
		<div class="row mb-4" id="text-simple-example">
			<div class="col-xl-4 col-6 d-flex align-items-center">
				<div class="col-xl-8 col-lg-12 mt-2">
					<input
						v-model="text"
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
	name: 'TextExample',
	components: {
		VueCodeHighlight,
	},
	data: () => ({
		text: 'Hello World',
	}),
	methods: {
		simpleExample() {
			if (this.text !== '') {
				this.$unicornLog({
					text: this.text,
				});

				return false;
			}

			this.$unicornLog();
			return false;
		},
	},
};
</script>
