<script lang="ts">
	import DesktopIcon from 'virtual:icons/fa6-solid/desktop';
	import PrintIcon from 'virtual:icons/fa6-solid/print';
	import ScissorsIcon from 'virtual:icons/fa6-solid/scissors';
	import ShirtIcon from 'virtual:icons/fa6-solid/shirt';

	const steps = [
		{
			title: 'Download the SVG',
			description:
				'Browse our collection and download the SVG file you like. All files are optimized and ready to use.'
		},
		{
			title: 'Edit (Optional)',
			description:
				'Open the SVG file in any vector editor like Inkscape, Illustrator, or Figma to customize colors, size, or elements.'
		},
		{
			title: 'Print or Upload',
			description:
				'Use the file with print-on-demand services, send to a local printer, or use with heat transfer vinyl for DIY projects.'
		}
	];
</script>

<section id="how-to-use" class="scroll-mt-24 bg-white py-16">
	<div class="container mx-auto flex flex-col gap-16 px-6">
		<div>
			<h2 class="mb-4 text-center text-3xl font-bold">How to Use Our Designs</h2>
			<p class="mx-auto mb-12 max-w-2xl text-center text-gray-600">
				Follow these simple steps to use Open Apparel SVGs in your projects.
			</p>

			<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
				{#each steps as step, index (index)}
					<div class="rounded-xl border border-gray-200 bg-gray-50 p-8">
						<div
							class="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 font-bold text-white"
						>
							{index + 1}
						</div>
						<h3 class="mb-3 text-xl font-semibold">{step.title}</h3>
						<p class="text-gray-600">
							{step.description}
						</p>
					</div>
				{/each}
			</div>
		</div>

		<div class="mx-auto w-full max-w-3xl">
			<h3 class="mb-4 text-xl font-semibold">Compatible With:</h3>
			<div class="grid grid-cols-2 gap-4 md:grid-cols-4">
				<div class="flex flex-col gap-4 text-center">
					<div
						class="mx-auto flex aspect-square w-full items-center justify-center rounded-lg bg-white shadow-sm"
					>
						<span class="text-4xl text-gray-600">
							<ShirtIcon />
						</span>
					</div>

					<p class="text-sm text-gray-600">Print on Demand</p>
				</div>

				<div class="flex flex-col gap-4 text-center">
					<div
						class="mx-auto flex aspect-square w-full items-center justify-center rounded-lg bg-white shadow-sm"
					>
						<span class="text-4xl text-gray-600">
							<ScissorsIcon />
						</span>
					</div>

					<p class="text-sm text-gray-600">Vinyl Cutters</p>
				</div>

				<div class="flex flex-col gap-4 text-center">
					<div
						class="mx-auto flex aspect-square w-full items-center justify-center rounded-lg bg-white shadow-sm"
					>
						<span class="text-4xl text-gray-600">
							<DesktopIcon />
						</span>
					</div>

					<p class="text-sm text-gray-600">Design Software</p>
				</div>

				<div class="flex flex-col gap-4 text-center">
					<div
						class="mx-auto flex aspect-square w-full items-center justify-center rounded-lg bg-white shadow-sm"
					>
						<span class="text-4xl text-gray-600">
							<PrintIcon />
						</span>
					</div>

					<p class="text-sm text-gray-600">Screen Printing</p>
				</div>
			</div>
		</div>
	</div>
</section>
