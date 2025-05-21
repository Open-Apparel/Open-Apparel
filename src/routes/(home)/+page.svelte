<script lang="ts">
	import Footer from '$lib/components/footer.svelte';
	import Navigation from '$lib/components/navigation.svelte';
	import type { PageData } from './$types';
	import Contribute from './contribute.svelte';
	import Cta from './cta.svelte';
	import Features from './features.svelte';
	import Gallery from './gallery.svelte';
	import Hero from './hero.svelte';
	import HowToUse from './how-to-use.svelte';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Open Apparel</title>
</svelte:head>

<Navigation />
<Hero />
<Features />
<Gallery designs={data.designs} />
<HowToUse />
<Contribute />
<Cta />
<Footer />
