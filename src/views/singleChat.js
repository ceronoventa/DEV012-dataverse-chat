import { footer } from "../components/footer.js";
import { header } from "../components/header.js";
import { barra } from "../components/barra.js";
import { movieDetail } from "../components/movieDetail.js";
// import{chatCompletions} from "../lib/openIaAPI.js";


export const singleChat = (props) => {
 //CONTENEDOR
 const contenedor = document.createElement("div");
 //HEADER Y NAV
 contenedor.appendChild(header());
 contenedor.appendChild(barra());

  // MOVIE
const selectedMovie = props;
const movieDetailContainer = movieDetail(selectedMovie);
contenedor.appendChild(movieDetailContainer);

//BOTON ABRIR CHAT
const botonAbrirChat = document.createElement("div");
botonAbrirChat.setAttribute("id", "boton-abrirchat");
botonAbrirChat.textContent = "Chat";
botonAbrirChat.style.display ="block";

const imgFlecha = document.createElement("img");
imgFlecha.setAttribute("src", "../flecha-hacia-abajo-para-navegar.png");
botonAbrirChat.appendChild(imgFlecha);
contenedor.appendChild(botonAbrirChat);

//CHAT
const chatMovie = document.createElement("div");
chatMovie.style.display ="none";
chatMovie.classList.add("chat-movie");

const imgCerrar = document.createElement("img");
imgCerrar.setAttribute("id", "img-cerrar");
imgCerrar.setAttribute("src", "../cerrar.png");
chatMovie.appendChild(imgCerrar);


//IMAGEN CHAT
const imgChat = document.createElement("img");
imgChat.setAttribute("id", "img-chat");
imgChat.setAttribute("src", `${props.imageUrl}`);
chatMovie.appendChild(imgChat);

//TITULO CHAT
 const titulop = document.createElement("p");
 titulop.setAttribute("id", "titulo-p");
titulop.innerHTML = `Chat ${props.name}`;
chatMovie.appendChild(titulop);

//DIV DE CONVERSACIÓN
const conversacionChat = document.createElement("div");
conversacionChat.setAttribute("id", "conversacion-chat");
chatMovie.appendChild(conversacionChat);

//TEXTO

//BOTON


contenedor.appendChild(chatMovie);

  //FOOTER
contenedor.appendChild(footer());

//------------funcionalidades----------------
/*
chatCompletions(localStorage.getItem('api'),{
  model: "gpt-3.5-turbo-0613",
   "messages": []
}).then((response) => {/*lo que hara}). catch(.alert);*/

const botonAbrir = contenedor.querySelector("#boton-abrirchat");
botonAbrir.addEventListener('click', () => {

chatMovie.style.display = 'block';
botonAbrirChat.style.display = 'none';
})

const botonCerrar = contenedor.querySelector("#img-cerrar")
botonCerrar.addEventListener('click', () => {
chatMovie.style.display = 'none';
botonAbrirChat.style.display = 'block';
})
 return contenedor;
 }