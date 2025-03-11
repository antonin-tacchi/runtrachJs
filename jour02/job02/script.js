const newButton = document.createElement("button");
newButton.id = "button";
newButton.textContent = "Ajouter un article";
document.body.appendChild(newButton);


newButton.addEventListener("click", showhide);

function showhide(){
    let articleExisting = document.getElementById("article");
    if (articleExisting){
        articleExisting.remove();
    }
    else{
        const newArticle = document.createElement("article");
        newArticle.id = "article";
        newArticle.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
        document.body.appendChild(newArticle);
    }
}