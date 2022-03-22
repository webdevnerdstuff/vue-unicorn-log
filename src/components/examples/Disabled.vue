<template>
	<div>
		<div class="row mb-2">
			<div class="col-12">
				<h5 class="my-0"><code>disabled</code></h5>
			</div>
		</div>

		<!-- ======================= Simple Example -->
		<div class="row mb-4" id="disabled-simple-example">
			<div class="col-xl-4 col-6 d-flex align-items-center">
				<div class="form-check form-switch">
					<input
						v-model="isDisabled"
						class="form-check-input"
						type="checkbox"
						role="switch"
						checked
					/>
					<label class="form-check-label"
						>disabled =
						<span class="boolean-style">{{ isDisabled }}</span>
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
	disabled: true,
});
						</pre
					>
				</vue-code-highlight>
			</div>
		</div>
		<!-- ======================= Disabled Option -->
		<div class="row mb-4" id="disabled-conditional-example">
			<div class="col-12">
				<h6 class="my-0">Using an .env variable</h6>
				<div class="fst-italic">
					Conditionally set so it will log in development, but not on the
					production site.
				</div>
			</div>

			<div class="col-xl-8 col-lg-12">
				<vue-code-highlight language="js">
					<pre>
this.$unicornLog({
	text: 'Hello World',
	disabled: process.env.UNICORN_LOG !== 'true',
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
	name: 'DisabledExample',
	components: {
		VueCodeHighlight,
	},
	data: () => ({
		isDisabled: true,
	}),
	methods: {
		simpleExample() {
			this.$unicornLog({
				text: 'Hello World',
				disabled: this.isDisabled,
			});
		},
	},
};
</script>
