// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.

/*
import Example from './views/Example.js';

Ejemplo de definición de rutas:

const routes = {
    "/": Example,
    ...
}
*/

/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/
import {renderView} from './router.js';

import {apiKey} from './views/apiKey.js';
import {error} from './views/error.js';
import {home} from './views/home.js';
import {panel} from './views/panel.js';
import {singleChat} from './views/singleChat.js';

const routes = {
    "/": home,
    "/singleChat": singleChat,
    "/panel": panel,
    "/apikey": apiKey,
    "/error": error,
  
  };