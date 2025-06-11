<script lang="ts">
	import OpenApparelLogo from '$lib/svg/open-apparel-logo.svg?url';
	import GitHubLogo from 'virtual:icons/fa-brands/github';
</script>

<nav class="sticky top-0 bg-white shadow-md">
	<div class="container mx-auto flex items-center justify-between px-6 py-3">
		<a href="/" class="flex items-center gap-4">
			<div class="w-6">
				<img src={OpenApparelLogo} alt="Open Apparel Logo" />
			</div>

			<span class="text-xl font-bold">Open Apparel</span>
		</a>

		<div class="hidden items-center space-x-8 md:flex">
			<a href="/" class="text-gray-700 transition hover:text-indigo-600">Home</a>
			<a href="/designs" class="text-gray-700 transition hover:text-indigo-600">Gallery</a>
			<a href="/#how-to-use" class="text-gray-700 transition hover:text-indigo-600">How to Use</a>
			<a href="/#contribute" class="text-gray-700 transition hover:text-indigo-600">Contribute</a>
			<a
				href="https://github.com/open-apparel"
				class="text-gray-700 transition hover:text-indigo-600"
				target="_blank"
				aria-label="GitHub Repository"
			>
				<GitHubLogo />
			</a>
		</div>

		<!-- TODO: mobile navigation -->
	</div>
</nav>
