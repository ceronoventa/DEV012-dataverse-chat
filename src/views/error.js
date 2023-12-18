import { footer } from "../components/footer.js";
import { header } from "../components/header.js";
import { barra } from "../components/barra.js";

export const error = () => {
  //CONTENEDOR
  const contenedor = document.createElement("div");
  //HEADER
  contenedor.appendChild(header());
  //BARRA
  contenedor.appendChild(barra());

//ERROR
const errorDiv = document.createElement("div");
const hError =document.createElement("h2");
hError.setAttribute("id", "h-error");
hError.textContent = "¡Upps!";
errorDiv.appendChild(hError);

const pError = document.createElement("p");
pError.textContent = "No hemos podido encontrar la pagina que buscas"
errorDiv.appendChild(pError);

const imgError = document.createElement("img");
imgError.setAttribute("id", "img-error");
imgError.setAttribute("src", "./error_carita.jpg")
errorDiv.appendChild(imgError);

   //FOOTER
  contenedor.appendChild(footer());

  return contenedor;
 }