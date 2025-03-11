// JavaScript pour un keylogger qui enregistre les touches a-z dans un textarea

document.addEventListener('DOMContentLoaded', function() {
    // Création du textarea
    const textarea = document.createElement('textarea');
    textarea.id = 'keylogger';
    document.body.appendChild(textarea);

    // Ajout d'un écouteur pour enregistrer les touches a-z
    document.addEventListener('keypress', function(event) {
        const key = event.key;
        // Vérifie si la touche est une lettre entre a et z
        if (/^[a-z]$/.test(key)) {
            if (document.activeElement === textarea) {
                // Si le focus est sur le textarea, ajouter la lettre deux fois
                textarea.value += key ;
            } else {
                // Sinon, ajouter la lettre une fois
                textarea.value += key;
            }
        }
    });
});