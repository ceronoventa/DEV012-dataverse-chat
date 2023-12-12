import { navigateTo } from "../router.js";
export const renderItems = (data) => {
  const cardsComponent = document.createElement("ul");
  cardsComponent.classList.add("cards")
  let showInHtml = "";
    data.forEach((pelicula) => {
      const listItem = document.createElement("li");
listItem.setAttribute("itemscope","");
listItem.setAttribute("itemtype","PeliculasAnimacionJaponesa");
listItem.classList.add("itemMuro");
listItem.setAttribute("data-id",pelicula.id);
listItem.innerHTML += ` 
          <dl itemscope itemtype="PeliculasAnimacionJaponesa">
              <img src="${pelicula.imageUrl}" alt="${pelicula.name}"/>
              <div class="texto">
              <dt></dt><dd itemprop="studio">${pelicula.facts.studio}</dd>
              <dt></dt><dd itemprop="name">${pelicula.name}</dd>
              <dt></dt><dd itemprop="shortDescription">${pelicula.shortDescription}</dd>
              <dt></dt><dd itemprop="genre">${pelicula.facts.genre}</dd>
              <dt></dt><dd itemprop="year">${pelicula.facts.year}</dd>
              </div>
            </dl>
      `;
      listItem.addEventListener("click",() => {
navigateTo("/singleChat",pelicula )
      })
      cardsComponent.appendChild(listItem);
    });
   
    return cardsComponent;
  };
