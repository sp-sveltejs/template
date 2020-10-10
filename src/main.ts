import App from './App.svelte';

//document.body.appendChild("<p id='sp-svelte-app'>hello</p>");
const app = new App({
	target: document.body //document.getElementById("sp-svelte-app"), //document.body//
	
});

export default app;