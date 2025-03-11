const newButton = document.createElement("button");
newButton.id = "button";
newButton.textContent = "Ajouter 1"
document.body.appendChild(newButton);

const newP = document.createElement("p");
newP.id = "compteur";
newP.textContent = "0"
document.body.appendChild(newP);
newButton.addEventListener("click", addOne);
function addOne(){
    const compteur = document.getElementById("compteur");
    compteur.textContent = parseInt(compteur.textContent) + 1;
}
