function bisextile(annee) {
    let result;

    if ((annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0)) {
        result = true;
    } else {
        result = false;
    }

    return result;

}

let annee = 2027;
console.log(bisextile(annee));

