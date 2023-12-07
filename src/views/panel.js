export const panel = () => {
    const panelRoot = document.getElementById('root');
    const panelView =
     `<header>
     <img id="logo" src="./logokaonashi.png"/>
     <h1>Kaonashi Pelis</h1> 
     
     <input type="checkbox" id="check">
     <label for="check" class="checkbtn">
     <img class="menuIcon" src="img/iconoMenu.png">
   </label>
   </header>
   <nav><div class ="metricas"><br></div>
   <p class ="compute-stats"></p>
  
  <div class="container"> panel
  </div>
  <div id="noResultsFound" ></div>
  <footer>
       <p>
         Belén Osorio y Camila Palma<br>
         <strong>Proyecto Dataverse de Laboratia</strong>
       </p>
     </footer>`; 
     panelRoot.innerHTML = panelView;
    return panelView;
   }