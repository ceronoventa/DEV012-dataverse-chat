import { setRoutes, setRootElement, onURLChange } from './route.js';

import {error} from './views/error.js';
import {home} from './views/home.js';
// import {apiKey} from './views/apiKey.js';
// import {panel} from './views/panel.js';
// import {singleChat} from './views/singleChat.js';

const routes = {
    "/": home,
    "/error": error,
    //"/singleChat": singleChat,
    // "/panel": panel,
    // "/apikey": apiKey,*/
  
  };

setRoutes(routes);
setRootElement(document.getElementById('root'));

document.addEventListener("DOMContentLoaded", (event) => {
    console.log(event.target.location.pathname)
onURLChange(event.target.location.pathname)
});