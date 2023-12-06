import data from "../data/dataset.js";
import { footer } from "../components/footer.js";
import { header } from "../components/header.js";
import { nav } from "../components/nav.js";
import { renderItems } from "../components/cards.js";

// import { searchByName, filterByGenre, filterByStudio, filterByYear, computeStats, sortData } from "../lib/dataFunctions.js";

export const home = () => {
  const dataAnime = data;

  //CONTENEDOR
  const contenedor = document.createElement("div");

  //HEADER y NAV
  contenedor.appendChild(header());
  contenedor.appendChild(nav());

  // ESTADISTICAS, MURO Y "NO RESULTADOS"
  const estadisticas = document.createElement("p");
  estadisticas.classList.add("compute-stats");
  contenedor.appendChild(estadisticas);
  const noResultsFound = document.createElement("div");
  noResultsFound.classList.add("noResultsFound");
  contenedor.appendChild(noResultsFound);

  //MOVIES (CARDS)
  const cards = document.createElement("div");
  cards.appendChild(renderItems(dataAnime));
  contenedor.appendChild(cards);

  //FOOTER
  contenedor.appendChild(footer());
  return contenedor;
};
