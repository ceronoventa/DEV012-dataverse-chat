let ROUTES = {};
let rootElement;

export const setRootEl = (el) => {
  // assign rootEl
}

export const setRoutes = (routes) => {
  // optional Throw errors if routes isn't an object
  // optional Throw errors if routes doesn't define an /error route
  // assign ROUTES
}

const renderView = (pathname, props={}) => {
  // clear the root element
  const root = rootElement;
  root.innerHTML ="";
  // find the correct view in ROUTES for the pathname
  if(ROUTES[pathname]){
    const template = ROUTES[pathname]();
    root.appenChild(template);
  } else{
    root.appenChild(ROUTES["/error"]());
  }
  
  // in case not found render the error view
  // render the correct view passing the value of props
  // add the view element to the DOM root element
} 

export const navigateTo = (pathname, props={}) => {
  // update window history with pushState
  // render the view with the pathname and props
}

export const onURLChange = (location) => {
  // parse the location for the pathname and search params
  // convert the search params to an object
  // render the view with the pathname and object
}