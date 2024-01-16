import { footer } from "../components/footer.js";
import { header } from "../components/header.js";
import { barra } from "../components/barra.js";
import { conjuntoMovies } from "../components/conjuntoMovies.js";
import { chatCompletions } from "../lib/openIaAPI.js";
import data from "../data/dataset.js";
import { navigateTo } from "../router.js";

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
  //TITULO CHAT
  const tituloV = document.createElement("p");
  tituloV.setAttribute("id", "titulo-v");
  tituloV.innerHTML = `¡Con todas estas peliculas puedes chatear!`;
  vistaPeliculas.appendChild(tituloV);

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
  tresPuntos.setAttribute("id", "puntos-coloresp");
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
    const arregloDePromesas = []; //array q guarda respuestas

    const miPreguntaPanel = document.createElement("div");
    miPreguntaPanel.setAttribute("id", "mi-preguntapanel");
    conversacionPanel.appendChild(miPreguntaPanel);
    miPreguntaPanel.innerHTML += textPanel.value;

    for (const personaje of data) {
      const promesa = chatCompletions(localStorage.getItem("KEY"), {
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
      });

      arregloDePromesas.push(promesa);
    }

    Promise.all(arregloDePromesas)
      .then(function (arregloDeRespuestas) {
        for (let i = 0; i < arregloDeRespuestas.length; i++) {
          const respuesta = arregloDeRespuestas[i].choices[0].message.content;

          const suRespuestaPanel = document.createElement("div");
          suRespuestaPanel.setAttribute("class", "su-respuestapanel");

          suRespuestaPanel.innerHTML += respuesta;

          conversacionPanel.appendChild(suRespuestaPanel);
        }
        textPanel.value = "";
        tresPuntos.style.display = "none";
      })
      .catch(function (error) {
        alert("Debes ingresar una apiKey");
        navigateTo("/apiKey", {});
        console.log(error);
      });
  });

  return contenedor;
};
