var tableau = document.getElementById("tableau");
var searchs = document.getElementById("search");

var httpdata = new XMLHttpRequest();
httpdata.open("GET", "./movie.json", true);
httpdata.onload = function () {
  let action = JSON.parse(httpdata.responseText);
  // console.log(action)
  showfilm(action);
};
httpdata.send();
function showfilm(jsonObj) {
  // alert("sedfsd");
  let movies = jsonObj["movoie"];
  // console.log(movies.length);
  for (let i = 0; i < movies.length; i++) {
    // CREAT ELEMENT
    let link = document.createElement("a");
    let image = document.createElement("img");
    let lignes = document.createElement("tr");
    let colonne = document.createElement("td");
    let colonne2 = document.createElement("td");
    let colonne3 = document.createElement("td");
    let colonne4 = document.createElement("td");
    let colonne5 = document.createElement("td");
    let colonne6 = document.createElement("td");
    var colonne7 = document.createElement("td");

    // APPENCHILD
    tableau.appendChild(lignes);
    link.appendChild(image);
    colonne.appendChild(link);
    lignes.appendChild(colonne);
    lignes.appendChild(colonne2);
    lignes.appendChild(colonne3);
    lignes.appendChild(colonne4);
    lignes.appendChild(colonne5);
    lignes.appendChild(colonne6);
    lignes.appendChild(colonne7);

    // SETATTRIBUTE
    link.setAttribute("href", movies[i].Poster);
    image.setAttribute("src", movies[i].Poster);

    // INNERHTML JSON
    colonne2.innerHTML = movies[i].Titre;
    colonne3.innerHTML = movies[i].Realisateur;
    colonne4.innerHTML = movies[i].Duree;
    colonne5.innerHTML = movies[i].anneproduction;
    colonne5.style.font = "50px";
    colonne6.innerHTML = movies[i].festivals;
    // class
    colonne.setAttribute("class", "acteur");
    colonne2.setAttribute("class", "acteur");
    colonne3.setAttribute("class", "acteur");
    colonne4.setAttribute("class", "acteur");
    colonne5.setAttribute("class", "acteur");
    colonne6.setAttribute("class", "acteur");
    let actor = movies[i].Acteurs;
    for (let t = 0; t < actor.length; t++) {
      // acteurs
      let nom = document.createElement("p");
      let prenom = document.createElement("p");
      let nationalite = document.createElement("p");
      nom.innerHTML = "Nom: " + actor[t].Nom;
      prenom.innerHTML = "Prénom: " + actor[t].Prenom;
      nationalite.innerHTML = "Nationalité: " + actor[t].nationalite;
      colonne7.appendChild(nom);

      colonne7.appendChild(prenom);

      colonne7.appendChild(nationalite);
      colonne7.setAttribute("id", "acteur");
    }
  }
}

// 2emze function

function search() {
  var Data = JSON.parse(httpdata.responseText);
  // obtenir les contunue de json
  tableau.innerHTML = "";
  for (let i = 0; i < Data.movoie.length; i++) {
    if (
      Data.movoie[i].Titre.toLowerCase().includes(searchs.value.toLowerCase())
    ) {
      // // CREAT ELEMENT

      let link = document.createElement("a");
      let image = document.createElement("img");
      let lignes = document.createElement("tr");
      let colonne = document.createElement("td");
      let colonne2 = document.createElement("td");
      let colonne3 = document.createElement("td");
      let colonne4 = document.createElement("td");
      let colonne5 = document.createElement("td");
      let colonne6 = document.createElement("td");
      let colonne7 = document.createElement("td");

      // APPENCHILD

      tableau.appendChild(lignes);
      lignes.appendChild(colonne);
      link.appendChild(image);
      colonne.appendChild(link);
      lignes.appendChild(colonne2);
      lignes.appendChild(colonne3);
      lignes.appendChild(colonne4);
      lignes.appendChild(colonne5);
      lignes.appendChild(colonne6);
      lignes.appendChild(colonne7);
      // SETATTRIBUTE
      link.setAttribute("href", Data.movoie[i].Poster);
      image.setAttribute("src", Data.movoie[i].Poster);

      // INNERHTML JSON
      colonne2.innerHTML = Data.movoie[i].Titre;
      colonne3.innerHTML = Data.movoie[i].Realisateur;
      colonne4.innerHTML = Data.movoie[i].Duree;
      colonne5.innerHTML = Data.movoie[i].anneproduction;
      colonne6.innerHTML = Data.movoie[i].festivals;
      let acteur = Data.movoie[i].Acteurs;
      for (let act = 0; act < acteur.length; act++) {
        linom = document.createElement("li");
        linom.innerHTML = "Nom:" + acteur[act].Nom;
        colonne7.appendChild(linom);
        let lipren = document.createElement("li");
        lipren.innerHTML = "Prenom:" + acteur[act].Prenom;
        colonne7.appendChild(lipren);
        let lination = document.createElement("li");
        lination.innerHTML = "nationalite:" + acteur[act].nationalite;
        colonne7.appendChild(lination);
      }
    }
  }
}
