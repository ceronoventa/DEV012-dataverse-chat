export const header = () => {
const headerComponent = document.createElement("div")
    const headerView = 
    `<header>
    <img id="logo" src="../logokaonashi.png"/>
    <h1>Kaonashi Pelis</h1> 
    
    <input type="checkbox" id="check">
    <label for="check" class="checkbtn">
    <img class="menuIcon" src="img/iconoMenu.png">
  </label>
  </header> `;
  headerComponent.innerHTML = headerView;
  return headerComponent ;
}