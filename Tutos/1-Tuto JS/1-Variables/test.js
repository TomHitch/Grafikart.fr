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