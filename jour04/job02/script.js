function jsonValueKey(key) {
    const data = {
        "name": "La Plateforme_",
        "address": "8 rue d'hozier",
        "city": "Marseille",
        "nb_staff": "11",
        "creation": "2019"
    };
    return data[key];
}

console.log(jsonValueKey("city"));



