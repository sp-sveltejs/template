import 'es6-promise';
import 'whatwg-fetch';
import { sp } from "@pnp/sp";
import Logger from 'js-logger';
    
Logger.useDefaults(); 

(window).global = window;
if (global === undefined) {
    var global = window;
}		

export let getData = async (config)=>{
    Logger.debug(config)
    const today = new Date().toISOString(); 
    sp.setup({
        sp: {
            ie11: true,
            defaultCachingStore: "local", // or "local"
            defaultCachingTimeoutSeconds: 360,
            globalCacheDisable: false, // or true to disable caching in case of debugging/testing
            headers: {
                Accept: "application/json;odata=verbose",
            },
            baseUrl: config.baseUrl
        }
    });
    
    //PnPjs fetch example
    let data = await sp.web.select("Title", "Description").get()
    Logger.debug(data); 
    return data; 

}