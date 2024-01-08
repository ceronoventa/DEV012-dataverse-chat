export const conjuntoMovies = (data) => {
  const conjuntoCards = document.createElement("ul");
  conjuntoCards.classList.add("conjunto-movies");

  data.forEach((conjunto) => {
    const moviePanel = document.createElement("li");
    moviePanel.setAttribute("id", "acervo");
    moviePanel.setAttribute("itemscope", "");
    moviePanel.setAttribute("itemtype", "PeliculasAnimacionJaponesa");
    moviePanel.setAttribute("data-id", conjunto.id);

    moviePanel.innerHTML += `
      <img src="${conjunto.imageUrl}" alt="${conjunto.name}"/>
      <dd itemprop="nameP">${conjunto.name}</dd>
        
      `;
    conjuntoCards.appendChild(moviePanel);
  });

  return conjuntoCards;
};
