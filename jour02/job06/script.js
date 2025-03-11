const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // Haut, Haut, Bas, Bas, Gauche, Droite, Gauche, Droite, B, A
let konamiIndex = 0;

function applyPlatformeStyle() {
    document.body.style.backgroundColor = '#003366';
    document.body.style.color = '#FFFFFF';
    const header = document.createElement('h1');
    header.textContent = 'Bienvenue à La Plateforme_';
    header.style.color = '#FF6600';
    header.style.textAlign = 'center';
    document.body.appendChild(header);
}

window.addEventListener('keydown', function(event) {
    if (event.keyCode === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            applyPlatformeStyle(); 
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});