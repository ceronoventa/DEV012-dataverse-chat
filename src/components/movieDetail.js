export const movieDetail = (data) => {
  const movieComponent = document.createElement("ul");
  movieComponent.classList.add("movie")
    let movieDetailHtml = "";
    data.forEach((item) => {
      movieDetailHtml +=  `
        <li itemscope itemtype="PeliculasAnimacionJaponesa" class="itemcontainer" data-id="${item.id}">
        <dl itemscope itemtype="PeliculasAnimacionJaponesa">
          <img src="${item.imageUrl}" alt="${item.name}"/>
          <div class="texto">
            <dt></dt><dd itemprop="studio">${item.facts.studio}</dd>
            <dt></dt><dd itemprop="name">${item.name}</dd>
            <dt></dt><dd itemprop="shortDescription">${item.shortDescription}</dd>
            <dt></dt><dd itemprop="description">${item.description}</dd>
            <dt></dt><dd itemprop="genre">${item.facts.genre}</dd>
            <dt></dt><dd itemprop="year">${item.facts.year}</dd>
          </div>
        </dl>
      </li>
      
      `;
    });
    movieComponent.innerHTML += movieDetailHtml;
    return movieComponent;
  };