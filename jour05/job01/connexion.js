// connexion.js

document.getElementById('connexionForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    // Réinitialiser les messages d'erreur
    document.getElementById('emailError').innerText = '';
    document.getElementById('passwordError').innerText = '';

    let valid = true;

    // Vérification du format de l'email
    const email = document.getElementById('email').value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailRegex)) {
        document.getElementById('emailError').innerText = 'L\'email n\'est pas valide.';
        valid = false;
    }

    // Vérification du mot de passe (min 6 caractères)
    const password = document.getElementById('password').value;
    if (password.length < 6) {
        document.getElementById('passwordError').innerText = 'Le mot de passe doit avoir au moins 6 caractères.';
        valid = false;
    }

    if (valid) {
        alert("Connexion réussie !");
    }
});
