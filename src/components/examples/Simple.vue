<template>
	<div>
		<!-- ======================= Simple Example -->
		<div class="row mb-4">
			<div class="col-xl-4 col-6 d-flex align-items-center">
				<h5 class="my-0">Simple Example</h5>
			</div>
			<div class="col-xl-4 col-6 d-flex justify-content-end">
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
this.$unicornLog();
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
	name: 'SimpleExample',
	components: {
		VueCodeHighlight,
	},
	data: () => ({}),
	methods: {
		simpleExample() {
			this.$unicornLog();
		},

	},
};
</script>
