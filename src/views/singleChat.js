export const singleChat = () => {
  const singleChatRoot = document.getElementById('root');
  const singleChatView =
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

<div class="container"> singleChat
</div>
<div id="noResultsFound" ></div>
<footer>
     <p>
       Belén Osorio y Camila Palma<br>
       <strong>Proyecto Dataverse de Laboratia</strong>
     </p>
   </footer>`; 
   singleChatRoot.innerHTML = singleChatView;
  return singleChatView;
 }