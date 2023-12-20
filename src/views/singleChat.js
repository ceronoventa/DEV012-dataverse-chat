import { footer } from "../components/footer.js";
import { header } from "../components/header.js";
import { barra } from "../components/barra.js";
import { movieDetail } from "../components/movieDetail.js";
import{chatCompletions} from "../lib/openIaAPI.js";


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

//CHAT
const chatMovie = document.createElement("div");
chatMovie.classList.add("chat-movie");
// const titulo = createElement("p");
// titulo.textContent = "Chat Pelicula";
// chatMovie.appendChild(titulo);
contenedor.appendChild(chatMovie);

  //FOOTER
contenedor.appendChild(footer());

//------------funcionalidades----------------
/*
chatCompletions(localStorage.getItem('api'),{
  model: "gpt-3.5-turbo-0613",
   "messages": []
}).then((response) => {/*lo que hara}). catch(.alert);*/

 return contenedor;
 }