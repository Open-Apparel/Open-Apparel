<script lang="ts">
	import CheckIcon from 'virtual:icons/fa6-solid/check';
</script>

<section id="contribute" class="scroll-mt-24 bg-indigo-50 py-16">
	<div class="container mx-auto px-6">
		<h2 class="mb-4 text-center text-3xl font-bold">Contribute to Open Apparel</h2>

		<p class="mx-auto mb-12 max-w-2xl text-center text-gray-600">
			We welcome contributions from designers around the world. Help grow our library!
		</p>

		<div class="mx-auto max-w-3xl rounded-lg bg-white p-8 shadow-md">
			<div class="grid gap-6 md:grid-cols-2">
				<div class="flex flex-col gap-4">
					<h3 class="text-xl font-semibold text-black">How to Contribute</h3>

					<ul class="space-y-3 text-gray-600">
						{#each ['Fork our GitHub repository', 'Add your SVG designs to the appropriate category', 'Create a pull request with your contribution'] as item (item)}
							<li class="flex items-start gap-4">
								<span class="text-green-500">
									<CheckIcon />
								</span>

								{item}
							</li>
						{/each}
					</ul>
				</div>

				<div class="rounded-lg bg-gray-100 p-6">
					<h4 class="mb-3 font-semibold">Contribution Guidelines</h4>

					<ul class="space-y-2 text-sm text-gray-600">
						<li>Submit original work or designs with appropriate licenses</li>
						<li>Follow our SVG optimization guidelines</li>
						<li>Include metadata and tags for searchability</li>
						<li>All contributions are released under the MIT license</li>
					</ul>
				</div>
			</div>

			<div class="flex w-full justify-end">
				<a
					href="https://github.com/open-apparel"
					class="mt-4 inline-block rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-indigo-700"
				>
					View on GitHub
				</a>
			</div>
		</div>
	</div>
</section>
