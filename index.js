// Fonction pour créer une balise HTML avec le nom spécifié
function creerBalise(element) {
  return document.createElement(element);
}

// Fonction pour ajouter un élément enfant à un parent
function append(parent, el) {
  return parent.appendChild(el);
}
// URL de l'API Marvel
// on commence par établir la variable qui est l'url de l'API choisie
let url = `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=bdd8927cc325728869e4e301c9b2592c&hash=fa57ecb68368db4b9a073022eb1020b1`;
// Utilisation de fetch pour récupérer les données de l'API Marvel
fetch(url)
  .then((response) => response.json()) // Convertir la réponse en JSON
  .then((response) => affichPersos(response)) // Appeler la fonction affichPersos avec les données

  .catch((err) => console.log("Erreur : " + err)); // Gérer les erreurs

// Fonction pour afficher les personnages Marvel dans un menu déroulant
function affichPersos(response) {
  let body = document.body; // Sélectionner le corps du document HTML
  let marvels = response.data.results; // Récupérer les personnages Marvel depuis la réponse

  // Créer un élément de menu déroulant (select)
  let selectM = creerBalise("select");

  // Boucle pour chaque personnage Marvel dans les résultats
  for (let i = 1; i < marvels.length; i++) {
    let optionM = creerBalise("option"); // Créer un élément d'option pour chaque personnage et définir le texte avec le nom du personnage
    optionM.innerHTML = marvels[i].name;

    append(selectM, optionM); // Ajouter l'option au menu déroulant
  }

  append(body, selectM); // Ajouter le menu déroulant au corps du document HTML
}
