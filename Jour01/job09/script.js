function tri(numbers, order) {
    if (order === 'asc') {
        return numbers.sort((a, b) => a - b); // Tri croissant
    } else if (order === 'desc') {
        return numbers.sort((a, b) => b - a); // Tri décroissant
    } else {
        throw new Error("L'ordre doit être 'asc' ou 'desc'");
    }
}

// Exemple d'utilisation :
const numbers = [5, 3, 8, 1, 2];
console.log(tri(numbers, 'asc'));  // [1, 2, 3, 5, 8]
console.log(tri(numbers, 'desc')); // [8, 5, 3, 2, 1]
