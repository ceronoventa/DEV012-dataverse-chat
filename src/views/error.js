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
   //FOOTER
  contenedor.appendChild(footer());

  return contenedor;
 }