<script lang="ts">
	import CodeIcon from 'virtual:icons/fa6-solid/code';
	import ImageIcon from 'virtual:icons/fa6-solid/image';
	import ScalesIcon from 'virtual:icons/fa6-solid/scale-balanced';

	const features = [
		{
			icon: ScalesIcon,
			title: '100% Free',
			description:
				'All designs are free to use for personal and commercial projects without attribution required.'
		},
		{
			icon: CodeIcon,
			title: 'Open Source',
			description:
				'Open Apparel is an open-source library of SVG designs that you can use as you please.'
		},
		{
			icon: ImageIcon,
			title: 'High Quality SVGs',
			description: 'Clean, scalable vector graphics optimized for print and digital use'
		}
	];
</script>

<section class="scroll-mt-24 bg-white py-16 md:py-20" id="features">
	<div class="container mx-auto px-6">
		<h2 class="mb-12 text-center text-3xl font-bold">Why Choose Open Apparel?</h2>
		<div class="grid grid-cols-1 gap-10 md:grid-cols-3">
			{#each features as feature (feature.title)}
				<div class="text-center">
					<div
						class="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-indigo-100 p-4 text-2xl text-indigo-600"
					>
						<svelte:component this={feature.icon} />
					</div>

					<h3 class="mb-2 text-xl font-semibold">{feature.title}</h3>
					<p class="text-gray-600">
						{feature.description}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>
