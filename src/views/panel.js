import { footer } from "../components/footer.js";
import { header } from "../components/header.js";
import { barra } from "../components/barra.js";
import { conjuntoMovies } from "../components/conjuntoMovies.js";
import { chatCompletions } from "../lib/openIaAPI.js";
import data from "../data/dataset.js";

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
 vistaPeliculas.appendChild(conjuntoMovies(data));
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

//------------funcionalidades OPENAPI----------------

botonEnviarPanel.addEventListener("click", () => {
  tresPuntos.style.display = "flex";

  for (const personaje of data) {
  chatCompletions(localStorage.getItem("KEY"), {
model: "gpt-3.5-turbo-1106",
messages: [
  {
    role: "system",
    content: `eres el protagonista de la película  ${personaje.name} `,
  },
  {
    role: "user",
    content: ` ${textPanel.value}`,
  },
],
temperature: 0.5,
})

.then((response) => {
  const responseIA = response.choices[0].message.content;
  if (textPanel.value !== "" && responseIA) {
     const miPreguntaPanel = document.createElement("div");
        miPreguntaPanel.setAttribute("id", "mi-preguntapanel");
        conversacionChat.appendChild(miPreguntaPanel);

        const suRespuestaPanel = document.createElement("div");
        suRespuestaPanel.setAttribute("id", "su-respuestapanel");
        conversacionChat.appendChild(suRespuestaPanel);

        miPreguntaPanel.innerHTML += textPanel.value;
        suRespuestaPanel.innerHTML += responseIA;
        textPanel.value = "";
        tresPuntos.style.display = "none";
  }
})
.catch((error) => {
  // alert("Debes ingresar una apiKey");
  // navigateTo("/apiKey", {});
  console.log(error)
});
}
  })





 return contenedor;
   }