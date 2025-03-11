// JavaScript pour faire évoluer la couleur du footer en fonction du pourcentage de scrolling

document.addEventListener('DOMContentLoaded', function() {
    const footer = document.querySelector('footer');

    window.addEventListener('scroll', function() {
        const scrollTop = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercentage = (scrollTop / documentHeight) * 100;

        // Calcule la nouvelle couleur en fonction du pourcentage de scrolling
        const red = Math.floor((scrollPercentage / 100) * 255);
        const green = 128 - Math.floor((scrollPercentage / 100) * 128);
        footer.style.backgroundColor = `rgb(${red}, ${green}, 0)`;
    });
});