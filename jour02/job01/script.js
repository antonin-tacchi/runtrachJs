const newArticle = document.createElement("article");
newArticle.id = "Citation";
newArticle.textContent = "La vie a beaucoup plus d'imagination que nous";
newArticle.style.display ="none";


const newButton = document.createElement("button");
newButton.id = "button";
newButton.textContent = "Click here";
document.body.appendChild(newArticle);
document.body.appendChild(newButton);

function afficherCitation(){
    newArticle.style.display = "block";
    citation();
}

function citation(){
    const citationText = document.getElementById("Citation").textContent;
    console.log(citationText);
}

newButton.addEventListener("click", afficherCitation);
