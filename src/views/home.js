import {footer} from '../components/footer.js';
import {header} from '../components/header.js';
import {nav} from '../components/nav.js';
import { renderItems } from "../components/cards.js";

// import {data} from '../data/dataset.js';
// import { searchByName, filterByGenre, filterByStudio, filterByYear, computeStats, sortData } from "../lib/dataFunctions.js";

export const home = () => {
  const contenedor = document.createElement("div");
 //HEADER y NAV
contenedor.appendChild(header());
contenedor.appendChild(nav());

// ESTADISTICAS, MURO Y "NO RESULTADOS"
const estadisticas = document.createElement("p");
estadisticas.classList.add("compute-stats");

//crea un contenedor para las cartas
const muro = document.createElement("div");
muro.classList.add("muro");
//llama a la función render para generar y mostrar las cards
muro.appendChild(renderItems());
//agrega el contenedor de card al contenedor principal
contenedor.appendChild(muro);

const noResultsFound = document.createElement("div");
noResultsFound.classList.add("noResultsFound");




contenedor.appendChild(footer());
return contenedor;
}