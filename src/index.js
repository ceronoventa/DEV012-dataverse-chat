import { onURLChange, setRootElement, setRoutes } from './router.js';

import {error} from './views/error.js';
import {home} from './views/home.js';
import {apiKey} from './views/apiKey.js';
import {panel} from './views/panel.js';
import {singleChat} from './views/singleChat.js';

setRootElement(document.getElementById('root'));
const routes = {
    "/": home,
    "/error": error,
    "/singleChat": singleChat,
    "/panel": panel,
    "/apiKey": apiKey,
  
  };

 
setRoutes(routes);
document.addEventListener("DOMContentLoaded", (event) => {
onURLChange(event.target.location.pathname)
});
