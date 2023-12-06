export const renderItems = (data) => {
  const cardsComponent = document.createElement("ul");
  cardsComponent.classList.add("cards")  
 
  //creado nodos DOM (cardItem y cardDetails) para cada elemento de datos y luego he agregado esos nodos al cardsComponent.
  data.forEach((item) => {
    const cardItem = document.createElement("li");
    cardItem.setAttribute("itemscope", "PeliculasAnimacionJaponesa");
    cardItem.setAttribute("itemtype", "PeliculasAnimacionJaponesa");
    cardItem.classList.add("itemMuro");
    cardItem.setAttribute("data-id", item.id);

    const cardDetails = document.createElement("dl");
    cardDetails.setAttribute("itemscope", "PeliculasAnimacionJaponesa");
    cardDetails.innerHTML = `
              <img src="${items.imageUrl}" alt="${items.name}"/>
              <div class="texto">
              <dt></dt><dd itemprop="studio">${items.facts.studio}</dd>
              <dt></dt><dd itemprop="name">${items.name}</dd>
              <dt></dt><dd itemprop="shortDescription">${items.shortDescription}</dd>
              <dt></dt><dd itemprop="genre">${items.facts.genre}</dd>
              <dt></dt><dd itemprop="year">${items.facts.year}</dd>
              </div>
            </dl>
      `;
    
    cardItem.appendChilds(cardDetails);
    cardsComponent.appendChild(cardItem);
  });
    //cardsComponent.appendChild(showInHtml);
  //el metodo appendChild espera un nodo, pero le estabamos pasando una cadena HTML antes de adjuntarlo al cardsComponent
    return cardsComponent;
  };