import { navigateTo } from "../router.js";

export const barra = () => {
  const barraComponent = document.createElement("div");
  const barraSection = document.createElement("section");
  barraSection.setAttribute("id", "barra");

  const btnPanel = document.createElement("button");
  btnPanel.setAttribute("id", "btn-panel");
  btnPanel.textContent = "PANEL";
  barraSection.appendChild(btnPanel);
  const textBarra =document.createElement("p");
  textBarra.setAttribute("id", "p-barra")
  textBarra.textContent = "En esta sección puedes acceder a chatear"
  barraSection.appendChild(textBarra);
  const btnApiKey = document.createElement("button");

  btnApiKey.setAttribute("id", "btn-apiKey");
  btnApiKey.textContent = "API KEY";
  btnApiKey.addEventListener("click", () => {
    navigateTo("/apiKey", {});
  });
  barraSection.appendChild(btnApiKey);
  barraComponent.appendChild(barraSection);

  const botonApiKey = barraComponent.querySelector("#btn-panel");
  botonApiKey.addEventListener("click", () => {
    navigateTo("/panel", {});
  });
  return barraComponent;
};
