<script lang="ts">
	import ChevronDownIcon from 'virtual:icons/fa6-solid/chevron-down';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>{data.design.name}</title>
</svelte:head>

<div class="container mx-auto">
	<div class="grid gap-4 px-6 py-8 md:grid-cols-3 md:py-16">
		<div class="col-span-2 aspect-video rounded-lg bg-neutral-300">
			<!-- <img class="size-full object-cover" src={data.design.pictures[0]} alt={data.design.name} /> -->
			<img
				class="size-full object-contain p-16"
				src={data.design.downloads[0].url}
				alt={data.design.name}
			/>
		</div>

		<div class="grid place-items-center rounded-lg bg-neutral-300">
			<p class="text-center text-sm text-neutral-500">
				We'd place some images of this design here, <br /> if there were any ¯\_(ツ)_/¯
			</p>
		</div>

		<div class="col-span-full flex flex-col gap-4">
			<div class="flex flex-col justify-between md:flex-row md:items-center">
				<h1 class="text-4xl font-semibold">{data.design.name}</h1>
				<p class="text-sm text-gray-600">Categories: {data.design.categories.join(', ')}</p>
			</div>

			<div class="grid md:grid-cols-3">
				<p class="md:col-span-2">{data.design.description}</p>

				<div class="relative flex justify-end">
					<div class="flex h-fit w-fit overflow-hidden rounded-lg text-white transition-all">
						<a
							class="cursor-pointer bg-indigo-600 p-2 pl-4 font-semibold text-white shadow-md transition hover:bg-indigo-700"
							class:px-4={data.design.downloads.length == 1}
							download={data.design.downloads[0].name}
							href={data.design.downloads[0].url}
						>
							Download
						</a>

						{#if data.design.downloads.length > 1}
							<input type="checkbox" id="dropdown" class="peer hidden" />

							<label
								for="dropdown"
								class="cursor-pointer bg-indigo-600 p-2 pr-4 font-semibold text-white shadow-md transition hover:bg-indigo-700"
							>
								<ChevronDownIcon />
							</label>

							<div
								class="absolute top-full right-0 z-10 hidden w-full max-w-3xs overflow-hidden rounded-lg bg-indigo-600 shadow-lg peer-checked:block"
							>
								{#each data.design.downloads as download (download.url)}
									<a
										class="block cursor-pointer bg-indigo-600 p-2 px-4 font-semibold text-white transition hover:bg-indigo-700"
										download={download.name}
										href={download.url}
									>
										{download.name}
									</a>
								{/each}
							</div>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
