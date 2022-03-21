<template>
	<div>
		<div class="row mb-2">
			<div class="col-12">
				<h5 class="my-0">
					<code>{{ isNameOption ? 'name' : 'logPrefix' }}</code>
				</h5>
			</div>
		</div>

		<!-- ======================= Simple Example -->
		<div class="row mb-4" v-if="!isNameOption" id="logPrefix-simple-example">
			<div class="col-xl-4 col-6 d-flex align-items-center">
				<input
					v-model="logPrefix"
					class="form-control"
					type="text"
					value="[Bunnies]:"
					placeholder="[Bunnies]:"
				/>
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
	logPrefix: '[Bunnies]:',
});
						</pre
					>
				</vue-code-highlight>
			</div>
		</div>

		<!-- ======================= Name Boolean Option -->
		<div class="row mb-4" v-if="!isNameOption" id="name-default-example">
			<div class="col-12 mb-2">
				If <code>logPrefix</code> option is set as a
				<span class="option-type">Boolean</span> of
				<span class="boolean-style">true</span>, it will use the
				<code>name</code> option for the prefix.
			</div>

			<div class="col-xl-4 col-6 d-flex align-items-center">
				<div class="form-check form-switch">
					<input
						v-model="withName"
						class="form-check-input"
						type="checkbox"
						role="switch"
						checked
					/>
					<label class="form-check-label"
						>logPrefix option =
						<span class="boolean-style">{{ withName }}</span> with default
						<code>name</code> option
					</label>
				</div>
			</div>
			<div class="col-xl-4 col-6 d-flex align-items-center justify-content-end">
				<button
					@click="exampleNameDefault"
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
	logPrefix: true,
});
						</pre
					>
				</vue-code-highlight>
			</div>
		</div>

		<!-- ======================= Name Option -->
		<div class="row mb-4" id="name-example">
			<div class="col-xl-4 col-6 d-flex align-items-center">
				<div class="form-check form-switch">
					<input
						v-model="withName"
						class="form-check-input"
						type="checkbox"
						role="switch"
						checked
					/>
					<label class="form-check-label"
						>logPrefix = <span class="boolean-style">{{ withName }}</span> with
						<code>name</code> option set
					</label>
				</div>
			</div>
			<div class="col-xl-4 col-6 d-flex align-items-center justify-content-end">
				<button
					@click="exampleName"
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
	logPrefix: true,
	name: '{{ isNameOption ? 'Susan' : 'Bob' }}',
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
	name: 'LogPrefixExample',
	props: {
		isNameOption: {
			type: Boolean,
			default: false,
		},
	},
	components: {
		VueCodeHighlight,
	},
	data: () => ({
		logPrefix: '[Bunnies]:',
		withName: true,
	}),
	methods: {
		exampleName() {
			this.$unicornLog({
				text: 'Hello World',
				logPrefix: this.withName,
				name: this.isNameOption ? 'Susan' : 'Bob',
			});
		},
		exampleNameDefault() {
			this.$unicornLog({
				text: 'Hello World',
				logPrefix: this.withName,
			});
		},
		simpleExample() {
			this.$unicornLog({
				text: 'Hello World',
				logPrefix: this.logPrefix,
			});
		},
	},
};
</script>
