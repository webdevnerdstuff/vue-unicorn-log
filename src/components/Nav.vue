<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light mb-5">
		<div class="container">
			<a class="navbar-brand" href="/">UnicornLog</a>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<a class="nav-link active" aria-current="page" href="/">Home</a>
					</li>
					<li class="nav-item dropdown">
						<a
							class="nav-link dropdown-toggle"
							href="#"
							id="docs-dropdown"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							Docs
						</a>
						<ul class="dropdown-menu" aria-labelledby="docs-dropdown">
							<li>
								<a class="dropdown-item" href="#ul-installation">
									Installation
								</a>
							</li>
							<li>
								<a class="dropdown-item" href="#ul-usage">Usage</a>
							</li>

							<!-- Options -->
							<li><h6 class="dropdown-header">Options</h6></li>
							<li>
								<a class="dropdown-item" href="#ul-plugin-options">
									Plugin Options
								</a>
							</li>
							<li>
								<a class="dropdown-item" href="#ul-log-options">Log Options</a>
							</li>

							<!-- Methods -->
							<li><h6 class="dropdown-header">Methods</h6></li>
							<li>
								<a class="dropdown-item" href="#ul-instance-methods">
									Instance Methods
								</a>
							</li>
							<li>
								<a class="dropdown-item" href="#ul-console-methods">
									Console Methods
								</a>
							</li>
						</ul>
					</li>

					<!-- Examples -->
					<li class="nav-item dropdown">
						<a
							class="nav-link dropdown-toggle"
							href="#"
							id="examples-dropdown"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							Examples
						</a>
						<ul class="dropdown-menu" aria-labelledby="examples-dropdown">
							<li>
								<a class="dropdown-item" href="#basic-example">Basic</a>
							</li>
						</ul>
					</li>
				</ul>
				<div class="d-flex">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li class="nav-item">
							<a class="nav-link" :href="links.github">GitHub</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" :href="links.npm">NPM Package</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>

export default {
	name: 'Nav',
	data: () => ({
		links: {
			github: 'https://github.com/webdevnerdstuff/vue-unicorn-log',
			npm: 'https://github.com/webdevnerdstuff/vue-unicorn-log',
		},
	}),
};
</script>

<style lang="scss">
</style>
