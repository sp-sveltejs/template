# sp-svelte app
Opinionated SharePoint starter template for [sveltejs](https://github.com/sveltejs) client-side JavaScript development.
This project uses [sveltejs](https://github.com/sveltejs), [rollup](https://github.com/rollup), [sp-rest-proxy](https://github.com/koltyakov/sp-rest-proxy), [@pnp/sp](https://pnp.github.io/pnpjs/sp/), and [babel](https://github.com/babel/babel), among other packages.

Although your code will work with most modern browsers, the project was designed specifically to work on IE 11.

This is a project template for [Svelte](https://svelte.dev) apps. It lives at https://github.com/sp-sveltejs/template.

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit sp-sveltejs/template sp-svelte-app
cd sp-svelte-app
```

*Note that you will need to have [Node.js](https://nodejs.org) installed.*

*Looking for a shareable component template the works with SharePoint? [sp-sveltejs/component-template](https://github.com/sp-sveltejs/component-template)

---

## Prerequisites

Requires [Node.js](https://nodejs.org/)
It's very helpful if you have access to SharePoint, since this is a SharePoint development starter kit template.
The generated project will work with SharePoint 2013, SharePoint 2016, SharePoint 2019, and SharePoint Online. 

## Getting started

Install the dependencies...

```bash
cd sp-svelte-app
npm install
```

Configure sp-rest-proxy
````
npm run proxy
```` 
then answer the interactive questions to configure the proxy connection to your SharePoint site. Recommend selecting On-Demand Credentials for the authentication strategy.
Ctrl-c to end task.

Start development
````
npm run dev
````
Uses concurrently, to start the proxy and dev server simultaneously.
* Svelte Typescript support by default
* Develop interactively, with real SharePoint data. Enjoy!

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

## Building and running in production mode

To create an optimized version of the app:

```bash
npm run build
```

## Acknowledgments
Special thanks to
* [Rich Harris](https://github.com/Rich-Harris)
* [Andrew Koltyakov](https://github.com/koltyakov)
