export const movieDetail = (selectedMovie) => {
  const movieComponent = document.createElement("ul");
  movieComponent.classList.add("movie");
  if (selectedMovie) {
    const movieDetailHtml = `
      <li itemscope itemtype="PeliculasAnimacionJaponesa" class="itemcontainer" data-id="${selectedMovie.id}">
      <dl itemscope itemtype="PeliculasAnimacionJaponesa">
        <img src="${selectedMovie.imageUrl}" alt="${selectedMovie.name}" />
        <div class="textoM">
          <dt></dt><dd itemprop="studioM">${selectedMovie.facts.studio}</dd>
          <dt></dt><dd itemprop="nameM">${selectedMovie.name}</dd>
          <dt></dt><dd itemprop="descriptionM">${selectedMovie.description}</dd>
          <dt></dt><dd itemprop="genreM">${selectedMovie.facts.genre}</dd>
          <dt></dt><dd itemprop="yearM">${selectedMovie.facts.year}</dd>
        </div>
      </dl>
    </li>
  `;

    movieComponent.innerHTML = movieDetailHtml;
  }

  return movieComponent;
};
