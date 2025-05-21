<script lang="ts">
	import '@fontsource-variable/inter';
	import '../app.css';

	let { children } = $props();
</script>

<main class="h-full min-h-dvh">
	{@render children()}
</main>
