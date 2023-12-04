export const apiKey = () => {
  const apiKeyRoot = document.getElementById('root');
  const apiKeyView =
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

<div class="container">
</div>
<div id="noResultsFound" ></div>
<footer>
     <p>
       Belén Osorio y Camila Palma<br>
       <strong>Proyecto Dataverse de Laboratia</strong>
     </p>
   </footer>`; 
   apiKeyRoot.innerHTML = apiKeyView;
  return apiKeyView;
 }