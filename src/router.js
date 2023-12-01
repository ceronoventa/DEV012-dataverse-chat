let ROUTES = {};
let rootElement;

export const setRootElement = (newRootElementValue) => {
  // assign rootEl
  rootElement = newRootElementValue;
}

export const setRoutes = (newRoutesValue) => {
  // optional Throw errors if routes isn't an object
  // optional Throw errors if routes doesn't define an /error route
  // assign ROUTES
  if(typeof newRoutesValue === Object){
    if(newRoutesValue['/error']){ 
  ROUTES = newRoutesValue;
}}};
/*
//Hecho con el video de JC
export const renderView = (pathname, props={}) => {
  // clear the root element
  const root = rootElement;
  root.innerHTML ='';
  // find the correct view in ROUTES for the pathname
  if(ROUTES[pathname]){
    const template = ROUTES[pathname](props);
    root.appendChild(template);
  } else{
    root.appendChild(ROUTES['/error'](props));
  }
  
  // in case not found render the error view
  // render the correct view passing the value of props
  // add the view element to the DOM root element
} 
*/
//Hecho con chatGPT
export const renderView = (pathname, props = {}) => {
  // clear the root element
  const root = rootElement || document.getElementById('root');
  if (!root) {
    throw new Error('Root element not found. Make sure to set the root element using setRootEl.');
  }
  root.innerHTML = '';
  // find the correct view in ROUTES for the pathname
  if (ROUTES[pathname]) {
    const template = ROUTES[pathname](props);
    root.appendChild(template);
  } else {
    const errorTemplate = ROUTES['/error'](props);
    root.appendChild(errorTemplate);
  }
}


export const navigateTo = (pathname, props={}) => {
  // update window history with pushState
  const URLvisited = window.location.hostname + pathname;
  history.pushState({}, "", URLvisited);
  // render the view with the pathname and props
  renderView(pathname, props);
}

export const onURLChange = (location) => {
  // parse the location for the pathname and search params
  // convert the search params to an object
  // render the view with the pathname and object
  renderView(location);
}