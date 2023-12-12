export const movieDetail = (selectedMovie) => {
  const movieComponent = document.createElement("ul");
  movieComponent.classList.add("movie");
  if (selectedMovie) {
    const movieDetailHtml = `
      <li itemscope itemtype="PeliculasAnimacionJaponesa" class="itemcontainer" data-id="${selectedMovie.id}">
      <dl itemscope itemtype="PeliculasAnimacionJaponesa">
        <img src="${selectedMovie.imageUrl}" alt="${selectedMovie.name}" />
        <div class="texto">
          <dt></dt><dd itemprop="studio">${selectedMovie.facts.studio}</dd>
          <dt></dt><dd itemprop="name">${selectedMovie.name}</dd>
          <dt></dt><dd itemprop="shortDescription">${selectedMovie.shortDescription}</dd>
          <dt></dt><dd itemprop="description">${selectedMovie.description}</dd>
          <dt></dt><dd itemprop="genre">${selectedMovie.facts.genre}</dd>
          <dt></dt><dd itemprop="year">${selectedMovie.facts.year}</dd>
        </div>
      </dl>
    </li>
  `;

  movieComponent.innerHTML = movieDetailHtml;
}

return movieComponent;
};