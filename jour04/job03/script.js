// document.addEventListener('DOMContentLoaded', function () {
//     // Ajouter l'écouteur d'événement pour le bouton "Filtrer"
//     document.getElementById('filterButton').addEventListener('click', async () => {
//         // Récupérer les valeurs des champs
//         const id = document.getElementById('id') ? document.getElementById('id').value.trim() : '';
//         const nom = document.getElementById('nom') ? document.getElementById('nom').value.trim() : '';
//         const type = document.getElementById('type') ? document.getElementById('type').value.trim() : '';

//         console.log(`Critères de filtrage : ID=${id}, Nom=${nom}, Type=${type}`);

//         // Utiliser fetch pour récupérer le contenu du fichier JSON
//         try {
//             const response = await fetch('pokemon.json'); // Assurez-vous que le fichier pokemon.json est dans le même dossier
//             if (!response.ok) {
//                 throw new Error('Erreur lors de la récupération des données');
//             }

//             const data = await response.json();
//             console.log('Données récupérées :', data);

//             // Filtrer les données en fonction des critères
//             const filteredData = data.filter(pokemon => {
//                 // Pour chaque Pokémon, vérifiez les critères de filtrage
//                 console.log(`Filtrage Pokémon :`, pokemon);

//                 // Filtrer par ID (si l'ID est défini et correspond)
//                 const idMatch = !id || pokemon.id.toString().includes(id);

//                 // Filtrer par nom (en utilisant le nom en français et en comparant en minuscules)
//                 const nameMatch = !nom || (pokemon.name && pokemon.name.french && pokemon.name.french.toLowerCase().includes(nom.toLowerCase()));

//                 // Filtrer par type (si le type est défini et correspond)
//                 const typeMatch = !type || (pokemon.type && pokemon.type.some(t => t.toLowerCase() === type.toLowerCase()));

//                 // Retourner true si tous les critères de filtrage sont remplis
//                 return idMatch && nameMatch && typeMatch;
//             });

//             console.log('Résultats filtrés :', filteredData);

//             // Afficher les résultats filtrés
//             const resultsDiv = document.getElementById('results');
//             if (filteredData.length > 0) {
//                 resultsDiv.innerHTML = filteredData.map(pokemon => 
//                     `<p>ID: ${pokemon.id}, Nom: ${pokemon.name.french}, Type: ${pokemon.type.join(', ')}</p>`
//                 ).join('');
//             } else {
//                 resultsDiv.innerHTML = '<p>Aucun résultat trouvé</p>';
//             }

//         } catch (error) {
//             console.error('Erreur:', error);
//             document.getElementById('results').innerHTML = '<p>Erreur lors de la récupération des données.</p>';
//         }
//     });
// });


document.addEventListener('DOMContentLoaded', function () {
    // Ajouter l'écouteur d'événement pour le bouton "Filtrer"
    document.getElementById('filterButton').addEventListener('click', async () => {
        // Récupérer les valeurs des champs
        const id = document.getElementById('id') ? document.getElementById('id').value.trim() : '';
        const nom = document.getElementById('nom') ? document.getElementById('nom').value.trim() : '';
        const type = document.getElementById('type') ? document.getElementById('type').value.trim() : '';

        console.log(`Critères de filtrage : ID=${id}, Nom=${nom}, Type=${type}`);

        // Utiliser fetch pour récupérer le contenu du fichier JSON
        try {
            const response = await fetch('pokemon.json'); // Assurez-vous que le fichier pokemon.json est dans le même dossier
            if (!response.ok) {
                throw new Error('Erreur lors de la récupération des données');
            }

            const data = await response.json();
            console.log('Données récupérées :', data);

            // Filtrer les données en fonction des critères
            const filteredData = data.filter(pokemon => {
                // Pour chaque Pokémon, vérifiez les critères de filtrage
                console.log(`Filtrage Pokémon :`, pokemon);

                // Filtrer par ID (si l'ID est défini et correspond)
                const idMatch = !id || pokemon.id.toString().includes(id);

                // Filtrer par nom en français (en utilisant le nom en français et en comparant en minuscules)
                const nameMatch = !nom || (pokemon.name && pokemon.name.french && typeof pokemon.name.french === 'string' &&
                    pokemon.name.french.toLowerCase().includes(nom.toLowerCase()));

                // Filtrer par type (si le type est défini et correspond)
                const typeMatch = !type || (pokemon.type && pokemon.type.some(t => t.toLowerCase() === type.toLowerCase()));

                // Retourner true si tous les critères de filtrage sont remplis
                return idMatch && nameMatch && typeMatch;
            });
            console.log('Nom recherché :', nom.toLowerCase());
            console.log('Résultats filtrés :', filteredData);

            // Afficher les résultats filtrés
            const resultsDiv = document.getElementById('results');
            if (filteredData.length > 0) {
                resultsDiv.innerHTML = filteredData.map(pokemon => 
                    `<p>ID: ${pokemon.id}, Nom: ${pokemon.name.french}, Type: ${pokemon.type.join(', ')}</p>`
                ).join('');
            } else {
                resultsDiv.innerHTML = '<p>Aucun résultat trouvé</p>';
            }

        } catch (error) {
            console.error('Erreur:', error);
            document.getElementById('results').innerHTML = '<p>Erreur lors de la récupération des données.</p>';
        }
    });
});


