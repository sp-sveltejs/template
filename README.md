Opinionated SharePoint starter template for [sveltejs](https://github.com/sveltejs) client-side Javascript development. 
This project uses [parcel](https://github.com/parcel-bundler/parcel), [sp-rest-proxy](https://github.com/koltyakov/sp-rest-proxy), [@pnp/sp](https://pnp.github.io/pnpjs/sp/), and [babel](https://github.com/babel/babel), among other packages. 

Although your code with work with most modern browsers, the project was designed specifically to work on IE 10, as SharePoint's default masterpage still targets IE 10 with a meta tag.  

# sp-svelte app

This is a project template for [Svelte](https://svelte.dev) apps. It lives at https://github.com/sp-sveltejs/template.

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit sp-sveltejs/template sp-svelte-app
cd sp-svelte-app
```

*Note that you will need to have [Node.js](https://nodejs.org) installed.*


*Looking for a shareable component template the works with SharePoint? Cominig Soon*

---


### Prerequisites

Requires [Node.js](https://nodejs.org/)
It's very helpful if you have access to SharePoint, since this is a SharePoint development starter kit template.
The generated project will work with SharePoint 2013, SharePoint 2016, and SharePoint Online. 

## Getting started

Install the dependencies...

```bash
cd sp-svelte-app
npm install
```

* Execute, 
````
npm run proxy
```` 
then answer the interactive questions to configure the proxy connection to your SharePoint site. Ctrl-c to end task.
Recommend selecting On-Demand Credentials for the authentication strategy. 

* Execute, 
````
npm run dev 
````
(uses concurrently), to start the proxy and dev server simultaneously
* Develop interactively, with real SharePoint data. Enjoy!

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.


## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).


## Single-page app mode

By default, sirv will only respond to requests that match files in `public`. This is to maximise compatibility with static fileservers, allowing you to deploy your app anywhere.

If you're building a single-page app (SPA) with multiple routes, sirv needs to be able to respond to requests for *any* path. You can make it so by editing the `"start"` command in package.json:

```js
"start": "sirv public --single"
```

## Authors

* **Kayode Bristol** 

## Acknowledgments
Special thanks to
1. [Rich Harris](https://github.com/Rich-Harris)
2. [Andrew Koltyakov](https://github.com/koltyakov)