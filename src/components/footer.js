export const footer = () => {
  const footerComponent = document.createElement("div");
    const footerView = 
    `<footer>
    <p>
      Belén Osorio y Camila Palma<br>
      <strong>Proyecto Dataverse de Laboratia</strong>
    </p>
  </footer> `;
  footerComponent.innerHTML = footerView;
  return footerComponent ;
}