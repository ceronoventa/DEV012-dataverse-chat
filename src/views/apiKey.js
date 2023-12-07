import { footer } from "../components/footer.js";
import { header } from "../components/header.js";

export const apiKey = () => {

  //CONTENEDOR
  const contenedor = document.createElement("div");
  //HEADER
  contenedor.appendChild(header());

   //FOOTER
 contenedor.appendChild(footer());

  return contenedor;
 }