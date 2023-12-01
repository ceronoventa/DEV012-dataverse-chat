import { renderView, onURLChange, setRootElement, setRoutes } from './router.js';

import {error} from './views/error.js';
import {home} from './views/home.js';
// import {apiKey} from './views/apiKey.js';
// import {panel} from './views/panel.js';
// import {singleChat} from './views/singleChat.js';

setRootElement(document.getElementById('root'));
const routes = {
    "/": home,
    "/error": error,
    //"/singleChat": singleChat,
    // "/panel": panel,
    // "/apikey": apiKey,*/
  
  };

/*  
//Hecho con el video de JC
setRoutes(routes);
document.addEventListener("DOMContentLoaded", (event) => {
    console.log(event.target.location.pathname)
onURLChange(event.target.location.pathname)
});

*/

//Hecho con chatGPT
setRoutes(routes);
// Llama a onURLChange para manejar cambios en la URL
window.addEventListener('popstate', () => {
  onURLChange(window.location);
});
// Llama a renderView inicialmente para renderizar la vista actual
renderView(window.location.pathname);
