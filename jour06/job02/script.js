// Liste des citations du film Blade Runner (en français)
const bladeRunnerQuotes = [
    "J'ai vu des choses que vous, humains, ne pourriez pas croire. Des vaisseaux en flammes surgissant de l'épaule d'Orion.",
    "Tous ces moments se perdront dans l'oubli, comme des larmes dans la pluie.",
    "La lumière qui brûle deux fois plus fort brûle deux fois moins longtemps.",
    "Réveille-toi ! Il est temps de mourir !",
    "Plus humain que l'humain, c'est notre devise.",
    "C'est une expérience que de vivre dans la peur, n'est-ce pas ? C'est ça être un esclave.",
    "C'est dommage qu'elle ne puisse pas vivre ! Mais après tout, qui vit vraiment ?"
  ];
  
  // Fonction pour choisir une citation aléatoire
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * bladeRunnerQuotes.length);
    return bladeRunnerQuotes[randomIndex];
  }
  
  // Modification du texte du jumbotron au clic du bouton "Rebooter le Monde"
  document.querySelector('.btn-danger').addEventListener('click', function() {
    const jumbotronText = document.querySelector('.col-md-6 p');
    jumbotronText.innerHTML = getRandomQuote();
  });

// Fonction pour changer le contenu du jumbotron
function changeJumbotronContent(option) {
    const title = document.getElementById("jumbotronTitle");
    const content = document.getElementById("jumbotronContent");
    const list = document.getElementById("jumbotronList");
    const content2 = document.getElementById("jumbotronContent2");
    const button = document.getElementById("jumbotronButton");
    const spinner = document.getElementById("jumbotronSpinner");

    // Cacher le spinner par défaut
    spinner.style.display = "none";

    // Modification du contenu en fonction de l'option choisie
    if (option === 'content1') {
        title.textContent = "Bonjour, monde!";
        content.textContent = "Il existe plusieurs visions du terme :";
        list.innerHTML = "<li>Le monde est la matière, l'espace et les phénomènes qui nous sont accessibles par les sens, l'expérience ou la raison.</li><li>Le sens le plus courant désigne notre planète, la Terre, avec ses habitants, et son environnement plus ou moins naturel.</li>";
        content2.textContent = "Le sens étendu désigne l'univers dans son ensemble.";
        button.textContent = "Rebooter le Monde";
        spinner.style.display = "block"; // Afficher le spinner
    } else if (option === 'content2') {
        title.textContent = "Aurevoir, monde!";
        content.textContent = "Il existe plusieurs visions du terme :";
        list.innerHTML = "<li>Le monde est vide, l'espace et les phénomènes qui nous sont accessibles sont nul</li><li>Le sens le plus courant désigne notre planète, la Terre, avec ses habitants, et son environnement est pas ouf.</li>";
        content2.textContent = "Le sens étendu désigne l'univers qui est pas fou fou.";
        button.textContent = "Rebooter le Monde";
        spinner.style.display = "block"; // Afficher le spinner
    }
}

// Fonction pour initialiser le contenu par défaut
window.onload = function() {
    changeJumbotronContent('content1'); // Définit le contenu par défaut au chargement
};
    // Initialisation de la valeur de la progression
    let progressBar = document.getElementById('progress-bar');
    let progressValue = 75;

    // Fonction pour mettre à jour la barre de progression
    function updateProgressBar() {
        progressBar.style.width = progressValue + '%';
        progressBar.setAttribute('aria-valuenow', progressValue);
    }

    // Clic sur la flèche gauche pour diminuer
    document.getElementById('left-arrow').addEventListener('click', function() {
        if (progressValue > 0) {
            progressValue -= 5;
            updateProgressBar();
        }
    });

    // Clic sur la flèche droite pour augmenter
    document.getElementById('right-arrow').addEventListener('click', function() {
        if (progressValue < 100) {
            progressValue += 5;
            updateProgressBar();
        }
    });

        // Sélectionner tous les éléments de la liste
        let listItems = document.querySelectorAll('.list-group-item-action');
    
        // Ajouter un événement de clic sur chaque élément
        listItems.forEach(item => {
            item.addEventListener('click', function(event) {
                // Empêcher le comportement par défaut de l'ancre <a>
                event.preventDefault();
    
                // Retirer la classe 'active' de tous les éléments
                listItems.forEach(item => {
                    item.classList.remove('active');
                });
    
                // Ajouter la classe 'active' à l'élément cliqué
                this.classList.add('active');
            });
        });

        // Variables pour suivre l'ordre des touches
    let keySequence = ['d', 'g', 'c'];
    let currentKeyIndex = 0;

    // Fonction pour afficher la modale
    function showModal() {
        // Récupérer les valeurs des champs
        const login = document.getElementById('login').value;
        const password = document.getElementById('password').value;
        const url = document.getElementById('url').value;

        // Mettre à jour le contenu de la modale avec les valeurs des champs
        document.getElementById('modal-login').textContent = login;
        document.getElementById('modal-password').textContent = password;
        document.getElementById('modal-url').textContent = url;

        // Afficher la modale
        const modal = new bootstrap.Modal(document.getElementById('infoModal'));
        modal.show();
    }

    // Écouteur d'événement pour les touches pressées
    document.addEventListener('keydown', function(event) {
        if (event.key.toLowerCase() === keySequence[currentKeyIndex]) {
            currentKeyIndex++;

            // Si la séquence est complète, afficher la modale
            if (currentKeyIndex === keySequence.length) {
                showModal();
                currentKeyIndex = 0; // Réinitialiser la séquence après l'affichage
            }
        } else {
            // Réinitialiser si une touche incorrecte est pressée
            currentKeyIndex = 0;
        }
    });

    // Liste des couleurs possibles pour le spinner
    const spinnerColors = ['text-primary', 'text-danger', 'text-warning', 'text-success', 'text-info', 'text-secondary'];

    // Sélectionner le formulaire et le spinner
    const form = document.getElementById('form');
    const jumbotronSpinner = document.getElementById('jumbotronSpinner');

    // Gestion de la soumission du formulaire
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêcher l'envoi du formulaire

        // Récupérer les valeurs de l'email et du mot de passe
        const email = document.getElementById('email').value;
        const password = document.getElementById('emailPassword').value;

        // Vérifier que les champs email et mot de passe ne sont pas vides
        if (email && password) {
            // Changer la couleur du spinner aléatoirement
            const randomColor = spinnerColors[Math.floor(Math.random() * spinnerColors.length)];

            // Retirer les classes existantes de couleur
            jumbotronSpinner.classList.remove(...spinnerColors);

            // Ajouter une classe de couleur aléatoire
            jumbotronSpinner.classList.add(randomColor);
        } else {
            // Si les champs sont vides, alerter l'utilisateur
            alert('Veuillez remplir tous les champs.');
        }
    });
