import { footer } from "../components/footer.js";
import { header } from "../components/header.js";
import { barra } from "../components/barra.js";
import { movieDetail } from "../components/movieDetail.js";

export const singleChat = () => {
 //CONTENEDOR
 const contenedor = document.createElement("div");
 //HEADER Y NAV
 contenedor.appendChild(header());
 contenedor.appendChild(barra());

  // MOVIE
  const movie = document.createElement("div");
  movie.appendChild(movieDetail(dataAnime));
  contenedor.appendChild(movie);

  //FOOTER
contenedor.appendChild(footer());

 return contenedor;
 }