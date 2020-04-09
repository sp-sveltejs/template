const RestProxy = require('sp-rest-proxy');

const settings = {
    configPath: './config/private.json', // Location for SharePoint instance mapping and credentials
    port: 8080,                          // Local server port

};

const restProxy = new RestProxy(settings);
restProxy.serve();
