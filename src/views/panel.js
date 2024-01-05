import { footer } from "../components/footer.js";
import { header } from "../components/header.js";
import { barra } from "../components/barra.js";
// import { conjuntoMovies } from "../components/conjuntoMovies.js";
// import { chatCompletions } from "../lib/openIaAPI.js";

export const panel = () => {
 //CONTENEDOR
 const contenedor = document.createElement("div");
 //HEADER
 contenedor.appendChild(header());
 contenedor.appendChild(barra());

 //Contenedor chat
 const chatGrupal = document.createElement("div");
 chatGrupal.setAttribute("id", "chat-grupal");

 //VISTA DE PELICULAS
const vistaPeliculas = document.createElement("div");
vistaPeliculas.setAttribute("id", "vista-peliculas");
// vistaPeliculas.appendChild(conjuntoMovies());
chatGrupal.appendChild(vistaPeliculas);

//panel
const panelChat = document.createElement("div");
panelChat.setAttribute("id", "panel-chat");

//TITULO CHAT
const tituloG = document.createElement("p");
  tituloG.setAttribute("id", "titulo-g");
  tituloG.innerHTML = `Chat Grupal`;
  panelChat.appendChild(tituloG);

 // tres puntos 
 const tresPuntos = document.createElement("div");
 tresPuntos.setAttribute("id", "puntos-colores");
 tresPuntos.style.display = "none";
 const puntoUno = document.createElement("div");
 puntoUno.setAttribute("class", "tres-puntos");
 tresPuntos.appendChild(puntoUno);
 const puntoDos = document.createElement("div");
 puntoDos.setAttribute("class", "tres-puntos");
 tresPuntos.appendChild(puntoDos);
 const puntoTres = document.createElement("div");
 puntoTres.setAttribute("class", "tres-puntos");
 tresPuntos.appendChild(puntoTres);
 panelChat.appendChild(tresPuntos);

  //DIV DE CONVERSACIÓN
  const conversacionPanel = document.createElement("div");
  conversacionPanel.setAttribute("id", "conversacion-panel");
  panelChat.appendChild(conversacionPanel);

  //TEXTO
  const textPanel = document.createElement("textarea");
  textPanel.setAttribute("id", "text-panel");
  textPanel.setAttribute("placeholder", "Escribe tu texto aqui");
  panelChat.appendChild(textPanel);

  //BOTON
  const botonEnviarPanel = document.createElement("button");
  botonEnviarPanel.setAttribute("id", "btn-enviarpanel");
  botonEnviarPanel.textContent = "Enviar";
  panelChat.appendChild(botonEnviarPanel);


  chatGrupal.appendChild(panelChat);
contenedor.appendChild(chatGrupal);


  //FOOTER
 contenedor.appendChild(footer());

 return contenedor;
   }