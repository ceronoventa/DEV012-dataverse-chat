export const header = () => {
  const headerComponent = document.createElement("header");

  const logoLink = document.createElement("a");
  logoLink.setAttribute("href", "/");
  headerComponent.appendChild(logoLink);
  const logoImagen = document.createElement("img");
  logoImagen.setAttribute("id", "logo");
  logoImagen.setAttribute("src", "../logokaonashi.png");
  logoLink.appendChild(logoImagen);
  headerComponent.innerHTML += `<h1>Kaonashi Pelis</h1> 
    
    <input type="checkbox" id="check">
    <label for="check" class="checkbtn">
    <img class="menuIcon" src="img/iconoMenu.png">
  </label> `;

  return headerComponent;
};
