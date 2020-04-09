<script>
	import {config} from './config';
	import {getData} from './getData';
	import {onMount} from 'svelte'; 
	
	let data = []; 

	//Uses the sveltejs lifecycle event to get data on application mount
	onMount(async()=>{
		data = getData(config); 
	})
</script>

<main>
	<h1>SharePoint svelte Template</h1>
	{#await data}
	<p>...Getting Data</p>
	{:then data}
	<h2> Data Source via PnPjs</h2>
	<p>SharePoint Site Title: {data.Title}</p>
	<p>SharePoint Site Description: {data.Description}</p>
	{/await}
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
	main {
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

