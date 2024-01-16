

function creerBalise(element) {
  return document.createElement(element);
}
function append(parent, el) {
  return parent.appendChild(el);
}

// on commence par établir la variable qui est l'url de l'API choisie
let url = `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=bdd8927cc325728869e4e301c9b2592c&hash=fa57ecb68368db4b9a073022eb1020b1`;

fetch(url)
  .then(response => response.json())
  .then(response => affichPersos(response))
  
  .catch((err) => console.log("Erreur : " + err));

function affichPersos(response) {
  let body = document.body;
  let marvels = response.data.results;

  let selectM = creerBalise("select");
   for (let i = 1; i <  marvels.length; i++){
  let optionM = creerBalise("option");
  optionM.innerHTML = marvels[i].name;
  append(selectM, optionM);
   }
   append(body, selectM);
}