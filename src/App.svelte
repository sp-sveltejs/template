<script lang="ts">
	import { config } from "./config";
	import { getData } from "./getData";
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";

	type siteInfo = {
		Title?: string;
		Description?: string;
	};
	let data: siteInfo;

	//Uses the sveltejs lifecycle event to get data on application mount
	onMount(async () => {
		data = await getData(config);
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
		* {
			max-width: none;
		}
	}
</style>

<h1>SharePoint svelte Template</h1>

<h2>Data Source via PnPjs</h2>
{#if data}
	<div in:fade="{{delay: 0, duration: 2000}}">
		<p>Raw Data: {JSON.stringify(data)}</p>
		<p>SharePoint Site Title: {data.Title}</p>
		<p>SharePoint Site Description: {data.Description}</p>
	</div>
{:else}
	<p >loading...</p>
{/if}
Visit the
<a href="https://svelte.dev/tutorial">Svelte tutorial</a>
to learn how to build Svelte apps.
