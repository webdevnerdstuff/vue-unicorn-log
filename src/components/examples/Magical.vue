<template>
	<div>
		<div class="row mb-2">
			<div class="col-12">
				<h5 class="my-0"><code>magical</code></h5>
			</div>
		</div>

		<!-- ======================= Simple Example -->
		<div class="row mb-4" id="magical-simple-example">
			<div class="col-xl-4 col-6 d-flex align-items-center">
				<div class="form-check form-switch">
					<input
						v-model="magical"
						class="form-check-input"
						type="checkbox"
						role="switch"
						checked
					/>
					<label class="form-check-label"
						>magical =
						<span class="boolean-style">{{ magical }}</span>
					</label>
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
	magical: true,
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
	name: 'MagicalExample',
	components: {
		VueCodeHighlight,
	},
	data: () => ({
		magical: true,
	}),
	methods: {
		simpleExample() {
			this.$unicornLog({
				text: 'Hello World',
				magical: this.magical,
			});
		},
	},
};
</script>
