export const barra = () => {
    const barraComponent = document.createElement("div");
      const barraView = 
      `<section id="barra">
      <button id="btn-panel">PANEL</button>
      Recuerda ingresar  tu usuario para chatear con las películas que más te gusten
      <button id="btn-apiKey">API KEY</button>
    
    </section> `;
    barraComponent.innerHTML = barraView;
    return barraComponent ;
  }