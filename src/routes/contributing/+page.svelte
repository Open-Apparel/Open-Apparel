<script lang="ts">
	import Navigation from '$lib/components/navigation.svelte';
</script>

<svelte:head>
	<title>Contributing « Open Apparel</title>
</svelte:head>

<div class="relative flex flex-col items-center justify-center gap-8 p-8 md:gap-16 md:py-16">
	<div class="sticky top-4 grid w-full place-items-center">
		<Navigation />
	</div>

	<div class="flex w-full max-w-2xl flex-col gap-6">
		<h1
			class="bg-linear-to-t from-indigo-800 to-purple-300 bg-clip-text pb-2 font-platypi text-3xl font-bold text-pretty text-clip text-transparent drop-shadow md:text-4xl"
		>
			Contributing
		</h1>

		<div class="space-y-4">
			<h2 class="font-platypi text-xl font-bold">Why contribute?</h2>

			<p>
				Open Apparel is built on community-driven designs. By sharing your designs, you help grow a
				free, high-quality collection that anyone can use to express themselves in a way they see
				fit.
			</p>
		</div>

		<div class="space-y-4">
			<h2 class="font-platypi text-xl font-bold">Eligibility</h2>

			<ul class="list-disc space-y-2 pl-4">
				<li>
					You must own the rights to the artwork and willing to release it into the public domain.
				</li>
				<li>
					No copyrighted material, trademarks or third-party assets unless you have explicit
					permission to place them in the public domain.
				</li>
			</ul>
		</div>

		<div class="space-y-4">
			<h2 class="font-platypi text-xl font-bold">How to submit</h2>

			<ol class="list-decimal space-y-2 pl-8">
				<li>Create a fork of our GitHub repository</li>
				<li>
					Add your SVG in the <a
						href="https://github.com/Open-Apparel/Open-Apparel/tree/main/static"
						class="rounded border border-neutral-300 bg-neutral-200 px-1 whitespace-pre text-indigo-500 hover:underline"
						>static/</a
					> directory
				</li>
				<li>
					Update the index file <a
						href="https://github.com/Open-Apparel/Open-Apparel/tree/main/src/lib/designs.ts"
						class="rounded border border-neutral-300 bg-neutral-200 px-1 whitespace-pre text-indigo-500 hover:underline"
						>src/lib/designs.ts</a
					> with a name and description for your design
				</li>
				<li>Create a Pull Request with the filled in PR template</li>
			</ol>
		</div>

		<div class="space-y-4">
			<h2 class="font-platypi text-xl font-bold">Review process</h2>

			<ul class="list-disc space-y-2 pl-4">
				<li>
					Make sure the SVG is clean, doesn't include unnecessary paths, and follows the namings
					conventions.
				</li>
				<li>Make sure the design meets the public-domain requirement and style guidelines.</li>
				<li>
					Once approved, the PR is merged and the design becomes instantly searchable on the site.
				</li>
			</ul>
		</div>
	</div>
</div>
