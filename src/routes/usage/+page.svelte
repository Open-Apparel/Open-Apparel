<script lang="ts">
	import Navigation from '$lib/components/navigation.svelte';
</script>

<svelte:head>
	<title>Usage | Open Apparel</title>
</svelte:head>

<div class="relative flex flex-col items-center justify-center gap-8 p-8 md:gap-16 md:py-16">
	<div class="sticky top-4 grid w-full place-items-center">
		<Navigation />
	</div>

	<div class="flex w-full max-w-2xl flex-col gap-6">
		<h1
			class="bg-linear-to-t from-indigo-800 to-purple-300 bg-clip-text pb-2 font-platypi text-3xl font-bold text-pretty text-clip text-transparent drop-shadow md:text-4xl"
		>
			How to use
		</h1>

		<ol class="list-decimal space-y-2 pl-8">
			<li>Download the SVG design file</li>
			<li>Optionally edit the design with a program like Inkscape</li>
			<li>
				Use the file with print-on-demand services, send to a local printer, or use with heat
				transfer vinyl for DIY projects
			</li>
		</ol>
	</div>
</div>
