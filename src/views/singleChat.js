import { footer } from "../components/footer.js";
import { header } from "../components/header.js";
import { barra } from "../components/barra.js";
import { movieDetail } from "../components/movieDetail.js";

export const singleChat = (props) => {
 //CONTENEDOR
 const contenedor = document.createElement("div");
 //HEADER Y NAV
 contenedor.appendChild(header());
 contenedor.appendChild(barra());

  // MOVIE
const selectedMovie = props

const movieDetailContainer = movieDetail(selectedMovie);
contenedor.appendChild(movieDetailContainer);

  //FOOTER
contenedor.appendChild(footer());

 return contenedor;
 }