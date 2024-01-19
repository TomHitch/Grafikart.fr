const a = 15 // constante de type number
let b = "bonjour" // variable de type string
const c = "la famille" // constante de type string
//const isMajeur = false // constante de type booléen faux
//let isMajeur = null // variable de type booléen nul
let notes = [    // tableau de valeurs, ici 3 notes
    10,
    12,
    11,
]
let personnes = {    // objet
    prenom : "Thomas",
    nom : "Messin",
    age : 36,
    notes : [
        15,
        18,
        12,
    ],
    travail : {
        fonction : "développeurs web",
        nHeures : undefined,
    }
}
const debut = "Bonjour, "
const fin = "je m'appelle Thomas"
console.log(debut + fin) // Concaténation de texte

let test1 = 15
if (test1 = 15) {
    var test2 = 17
}
console.log(test1) // Ici test1 s'affiche car il est en dehors des acolades pareil pour const
console.log(test2) // Ici test2 ne s'affiche pas pareil pour const