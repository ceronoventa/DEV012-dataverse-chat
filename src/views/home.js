import data from "../data/dataset.js";
import { footer } from "../components/footer.js";
import { header } from "../components/header.js";
import { nav } from "../components/nav.js";
import { barra } from "../components/barra.js";
import { renderItems } from "../components/cards.js";
import {
  searchByName,
  filterByGenre,
  filterByStudio,
  filterByYear,
  computeStats,
  sortData,
} from "../lib/dataFunctions.js";
// import { navigateTo } from "../router.js";

export const home = () => {
  let dataAnime = data;

  //CONTENEDOR
  const contenedor = document.createElement("div");

  //HEADER y NAV
  contenedor.appendChild(header());
  contenedor.appendChild(nav());

  //BARRA
  contenedor.appendChild(barra());

  // ESTADISTICAS
  const estadisticas = document.createElement("p");
  estadisticas.classList.add("compute-stats");
  estadisticas.innerHTML = "Total de películas: " + computeStats(dataAnime);
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
  //FILTRO POR INPUT
  const inputSearch = contenedor.querySelector("#inputFilter");
  inputSearch.addEventListener("input", () => {
    const inputValue = inputSearch.value.toLowerCase();
    const filteredDataByName = searchByName(dataAnime, "input", inputValue);
    if (filteredDataByName.length === 0) {
      noResultsFound.textContent =
        "Lo sentimos, no se encontraron resultados que coincidan con la búsqueda.";
    }
    cards.innerHTML = "";
    cards.appendChild(renderItems(filteredDataByName, noResultsFound));
    estadisticas.innerHTML =
      "Total de películas: " + computeStats(filteredDataByName);
  });
  //FILTRO POR GENERO
  const selectGenre = contenedor.querySelector('select[name="genre"]');
  selectGenre.addEventListener("change", (e) => {
    const genreSelected = e.target.value;
    dataAnime = filterByGenre(dataAnime, "genre", genreSelected);
    cards.innerHTML = "";
    cards.appendChild(renderItems(dataAnime));
    estadisticas.innerHTML = "Total de películas: " + computeStats(dataAnime);
  });
  //FILTRO POR ESTUDIO
  const selectStudio = contenedor.querySelector('[name="studio"]');
  selectStudio.addEventListener("change", (e) => {
    const studioSelected = e.target.value;
    dataAnime = filterByStudio(dataAnime, "studio", studioSelected);
    cards.innerHTML = "";
    cards.appendChild(renderItems(dataAnime));
    estadisticas.innerHTML = "Total de películas: " + computeStats(dataAnime);
  });

  //FILTRO POR AÑO
  const selectYear = contenedor.querySelector('select[name="year"]');
  selectYear.addEventListener("change", (e) => {
    const yearSelected = e.target.value;
    dataAnime = filterByYear(dataAnime, "year", yearSelected);
    cards.innerHTML = "";
    cards.appendChild(renderItems(dataAnime));
    estadisticas.innerHTML = "Total de películas: " + computeStats(dataAnime);
  });

  //ASCENDENTE Y DESCENDENTE
  const selectOrder = contenedor.querySelector('select[name="name"]');
  selectOrder.addEventListener("change", (e) => {
    const orderSelected = e.target.value;
    dataAnime = sortData(dataAnime, "name", orderSelected);
    cards.innerHTML = "";
    cards.appendChild(renderItems(dataAnime));
    estadisticas.innerHTML = "Total de películas: " + computeStats(dataAnime);
  });

  //BOTON LIMPIAR
  const clearButton = contenedor.querySelector('button[id="btn-clear"]');
  clearButton.addEventListener("click", function () {
    const selectores = contenedor.querySelectorAll("select");
    const searchInput = contenedor.querySelector('input[name="searchButton"]');
    console.log(searchInput);
    selectores.forEach((selector) => {
      selector.value = selector.options[0].value;
      searchInput.value = "";
      noResultsFound.innerHTML = "";
      cards.innerHTML = "";
      dataAnime = data;
      cards.appendChild(renderItems(dataAnime));
      estadisticas.innerHTML = "Total de películas: " + computeStats(dataAnime);
    });
  });
  // linkEl.addEventListener('click', () => navigateTo("/singleChat", { id: "akira", id: "my-neighbor-totoro" }));

  return contenedor;
};
