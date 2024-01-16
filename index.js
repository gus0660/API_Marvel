let url = `http://gateway.marvel.com/v1/public/comics?ts=1&apikey=bdd8927cc325728869e4e301c9b2592c&hash=fa57ecb68368db4b9a073022eb1020b1`;

fetch(url)
  .then((response) => response.json())
  .then(response => console.log(response.data.results))
  .catch((err) => console.log("Erreur : " + err));

  