function jourTravaille(date) {
    // Récupérer le jour, le mois et l'année
    let joursDeLaSemaine = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    let moisDeLAnnee = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

    let jour = date.getDate();
    let mois = date.getMonth();
    let annee = date.getFullYear();
    let jourSemaine = date.getDay(); 

    if (annee === 2024) {
        if (
            (mois === 0 && jour === 1) || // Jour de l'an
            (mois === 3 && jour === 1) || // Lundi de Pâques
            (mois === 4 && jour === 1) || // Fête du travail
            (mois === 4 && jour === 8) || // Victoire 1945
            (mois === 6 && jour === 14) || // Fête nationale
            (mois === 7 && jour === 15) || // Assomption
            (mois === 10 && jour === 1) || // Toussaint
            (mois === 10 && jour === 11) || // Armistice
            (mois === 11 && jour === 25)   // Noël
        ) {
            console.log(`Le ${joursDeLaSemaine[jourSemaine]} ${jour} ${moisDeLAnnee[mois]} ${annee} est férié.`);
            return; 
        }
    }

    if (jourSemaine === 6 || jourSemaine === 0) { 
        console.log(`Non, ${joursDeLaSemaine[jourSemaine]} ${jour} ${moisDeLAnnee[mois]} ${annee} est un week-end.`);
        return; 
    }

    console.log(`Oui, ${joursDeLaSemaine[jourSemaine]} ${jour} ${moisDeLAnnee[mois]} ${annee} est un jour travaillé.`);
}
date = new Date('2024-01-01'); 
jourTravaille(date); 
date = new Date('2024-06-09'); 
jourTravaille(date); 
date = new Date('2024-06-25');
jourTravaille(date); 