import { footer } from "../components/footer.js";
import { header } from "../components/header.js";
import { barra } from "../components/barra.js";

export const panel = () => {
 //CONTENEDOR
 const contenedor = document.createElement("div");
 //HEADER
 contenedor.appendChild(header());
 contenedor.appendChild(barra());

 //CHAT GRUPAL
 const chatGrupal = document.createElement("div");
 chatGrupal.setAttribute("id", "chat-grupal");
 contenedor.appendChild(chatGrupal);

  //FOOTER
 contenedor.appendChild(footer());

 return contenedor;
   }