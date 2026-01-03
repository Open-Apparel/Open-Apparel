<script lang="ts">
	/* eslint svelte/no-navigation-without-resolve: "off" */

	import Navigation from '$lib/components/navigation.svelte';
	import ChevronDown from '@lucide/svelte/icons/chevron-down';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.design.name} « Open Apparel</title>
</svelte:head>

<div class="relative flex flex-col items-center justify-center gap-8 p-8 md:gap-16 md:py-16">
	<div class="sticky top-4 grid w-full place-items-center">
		<Navigation />
	</div>

	<div class="grid w-full max-w-7xl gap-4 gap-y-10 md:grid-cols-3">
		<div
			class="col-span-2 flex aspect-video w-full items-center justify-center rounded-lg bg-neutral-100"
		>
			{#if data.design.pictures[0]}
				<img
					class="size-full object-contain"
					src={data.design.pictures[0]}
					alt={data.design.name}
				/>
			{:else if data.design.downloads[0]}
				<img
					class="size-full max-w-lg object-contain p-8"
					src={data.design.downloads[0].url}
					alt={data.design.name}
				/>
			{/if}
		</div>

		<div class="hidden size-full place-items-center rounded-lg bg-neutral-100 md:grid">
			<p class="w-full p-8 text-center text-sm text-neutral-500">
				We'd place some images of this design here, if we had any ¯\_(ツ)_/¯
			</p>
		</div>

		<div class="col-span-full flex flex-col gap-6">
			<div class="flex flex-col flex-wrap items-center justify-between gap-4 md:flex-row">
				<h1 class="font-platypi text-4xl font-bold">{data.design.name}</h1>

				<div
					class="relative flex shrink-0 cursor-pointer flex-row rounded-full bg-linear-to-tl from-indigo-800 to-purple-300 font-bold text-white transition-all hover:shadow md:h-full"
				>
					<a
						download={data.design.downloads[0].name}
						href={data.design.downloads[0].url}
						class="rounded-l-full font-platypi transition-all hover:bg-black/25"
						class:rounded-r-full={data.design.downloads.length === 1}
					>
						<div class="px-5 py-2" class:pr-3={data.design.downloads.length > 1}>Download</div>
					</a>

					{#if data.design.downloads.length > 1}
						<input type="checkbox" id="dropdown" class="peer hidden" checked />

						<label
							for="dropdown"
							class="grid cursor-pointer place-items-center rounded-r-full pr-3 pl-1 font-semibold text-white transition-all hover:bg-black/25"
						>
							<ChevronDown />
						</label>

						<div
							class="absolute top-full right-0 hidden max-w-md rounded-xl pt-2 text-indigo-700 shadow-xl peer-checked:block"
						>
							<div class="rounded-xl border-4 border-indigo-600/25 bg-white p-2">
								{#each data.design.downloads as download (download.url)}
									<a
										class="block cursor-pointer rounded-md p-2 px-3 font-semibold whitespace-pre transition hover:bg-indigo-700/5"
										download={download.name}
										href={download.url}
									>
										{download.name}
									</a>
								{/each}
							</div>
						</div>
					{/if}
				</div>
			</div>

			<p class="leading-relaxed text-neutral-800">{data.design.description}</p>

			{#if data.design.authors && data.design.authors.length}
				<div>
					<p class="pb-1 font-platypi font-semibold">
						Author{data.design.authors.length !== 1 ? 's' : ''}
					</p>

					<div>
						{#each data.design.authors as author, idx (idx)}
							<div class="flex gap-[1ch]">
								<p>{author.name}</p>

								{#if author.link}
									<a href={author.link.url} class="group">
										(<span class="text-indigo-500 group-hover:underline">{author.link.display}</span
										>)
									</a>
								{/if}
							</div>
						{/each}
					</div>
				</div>
			{/if}
		</div>
	</div>
</div>
