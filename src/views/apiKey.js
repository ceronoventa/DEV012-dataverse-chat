import { footer } from "../components/footer.js";
import { header } from "../components/header.js";
import { barra } from "../components/barra.js";

export const apiKey = () => {

  //CONTENEDOR
  const contenedor = document.createElement("div");
  //HEADER
  contenedor.appendChild(header());
  contenedor.appendChild(barra());


 //APIKEY
 const cajaApi = document.createElement("div");
 cajaApi.setAttribute("id", "caja-api");

 //TITULO
 const hApi = document.createElement("h2");
 hApi.setAttribute("id", "h-api");
hApi.textContent = "Prueba tu Api Key";
cajaApi.appendChild(hApi); 

//TEXTO
const pTextApi = document.createElement("p");
pTextApi.textContent = 'Ingresa tu Api Key en el recuadro de abajo para continuar';
cajaApi.appendChild(pTextApi);

//CAJA DE TEXTO
const labelApi = document.createElement("label");
labelApi.setAttribute("id", "label-api")
const inputApi = document.createElement("input");
inputApi.setAttribute("type", "apiBox");
inputApi.setAttribute("placeholder", "Escribe aqui");
labelApi.appendChild(inputApi);
cajaApi.appendChild(labelApi);

//BOTONES
const btnIngresarApi = document.createElement("button");
btnIngresarApi.textContent = "Ingresar";
btnIngresarApi.setAttribute("id", "btn-ingresar");
cajaApi.appendChild(btnIngresarApi);

const btnBorrarApi = document.createElement("button");
btnBorrarApi.textContent = "Borrar";
btnBorrarApi.setAttribute("id", "btn-borrarApi");
cajaApi.appendChild(btnBorrarApi);

contenedor.appendChild(cajaApi);

   //FOOTER
 contenedor.appendChild(footer());


//----------Funcionalidades ------

btnIngresarApi.addEventListener( "click" , () => {
  const userApi = inputApi.value;
  localStorage.setItem("KEY", userApi);
  alert("¡Genial! Ahora puedes chatear con tus personajes favoritos")
})

btnBorrarApi.addEventListener("click" , () =>{
  inputApi.value = "";
  localStorage.clear();
  alert("Tu api Key ha sido borrada")
})

  return contenedor;
 }