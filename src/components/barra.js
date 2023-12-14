// import { navigateTo } from "../router";

export const barra = () => {
    const barraComponent = document.createElement("div");
    const barraSection = document.createElement("section");
    barraSection.setAttribute("id", "barra");
   
    const btnPanel = document.createElement("button");
      btnPanel.setAttribute("id", "btn-panel");
      btnPanel.textContent = 'PANEL';
      btnPanel.addEventListener('click', () => {
      // navigateTo ("/panel") 
      });
      barraSection.appendChild(btnPanel);  
      barraSection.innerHTML +=
      `Recuerda ingresar  tu usuario para chatear con las películas que más te gusten`;
      const btnApiKey = document.createElement("button");
      btnApiKey.setAttribute("id", "btn-apiKey");
      btnApiKey.textContent ='API KEY';
      btnApiKey.addEventListener('click', () => {
        // navigateTo ("/apiKey") 
        });
      barraSection.appendChild(btnApiKey);
      barraComponent.appendChild(barraSection);
    return barraComponent ;
  }