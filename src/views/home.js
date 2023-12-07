import data from "../data/dataset.js";
import { footer } from "../components/footer.js";
import { header } from "../components/header.js";
import { nav } from "../components/nav.js";
import { renderItems } from "../components/cards.js";
import { searchByName, filterByGenre, filterByStudio, filterByYear, computeStats, sortData } from "../lib/dataFunctions.js";

export const home = () => {
  let dataAnime = data;

  //CONTENEDOR
  const contenedor = document.createElement("div");

  //HEADER y NAV
  contenedor.appendChild(header());
  contenedor.appendChild(nav());

  // ESTADISTICAS
  const estadisticas = document.createElement("p");
  estadisticas.classList.add("compute-stats");
  estadisticas.innerHTML="Total de películas: " + computeStats(dataAnime);
  contenedor.appendChild(estadisticas);
  
  //"NO RESULTADOS"
  const noResultsFound = document.createElement("div");
  noResultsFound.classList.add("noResultsFound");
  contenedor.appendChild(noResultsFound);

  //MOVIES (CARDS)
  const cards = document.createElement("div");
  cards.appendChild(renderItems(dataAnime));
  contenedor.appendChild(cards);

  //FOOTER
  contenedor.appendChild(footer());

  //------------funcionalidades filtros----------------

  //FILTRO POR GENERO
  const selectGenre = document.querySelector('select[name="genre"]');
  selectGenre.addEventListener("change", (e) => {
  const genreSelected = e.target.value;
  dataAnime = filterByGenre(dataAnime, "genre", genreSelected);
  cards.innerHTML = renderItems(dataAnime);
  estadisticas.innerHTML="Total de películas: " + computeStats(dataAnime);
});

  //FILTRO POR AÑO
  const selectYear = document.querySelector('select[name="year"]');
  selectYear.addEventListener("change", (e) => {
  const yearSelected = e.target.value;
  dataAnime = filterByYear(dataAnime, "year", yearSelected);
  cards.innerHTML = renderItems(dataAnime);
  estadisticas.innerHTML="Total de películas: " + computeStats(dataAnime);
  });

  return contenedor;
};
