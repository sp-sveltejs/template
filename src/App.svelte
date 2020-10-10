<script lang="ts">
	import { config } from "./config";
	import { getData } from "./getData";
	import { onMount } from "svelte";

	type siteInfo = {
		Title?: string;
		Description?: string;
	};
	let data: siteInfo;
	$: output = data;
	//Uses the sveltejs lifecycle event to get data on application mount
	onMount(async () => {
		data = await getData(config);

		console.log(data);
	});
</script>

<style>
	* {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

<h1>SharePoint svelte Template</h1>

<h2>Data Source via PnPjs</h2>
{#if output}
	<p>Raw Data: {JSON.stringify(output)}</p>

	<p>SharePoint Site Title: {output.Title}</p>
	<p>SharePoint Site Description: {output.Description}</p>
{/if}
Visit the
<a href="https://svelte.dev/tutorial">Svelte tutorial</a>
to learn how to build Svelte apps.
