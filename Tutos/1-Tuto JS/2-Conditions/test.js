/* Les opérateurs de comparaison
> Supérieur
< Inférieur
>= Supérieur ou égal
< = Inférieur ou égal
=== Strictement égal
!== Différent
*/ 
const age = 17

if (age < 18) {
      console.log("vous n\'avez pas 18 ans et vous êtes mineur") // \pour ' sinon le code va croire que c'est une autre chaine de charactères
} else if (age >= 18) {
      console.log("vous êtes majeur")
} 

/* Les opérateur logiques
&& Et
|| Ou (option + shift + L)
! Différents
*/
const pays = "US"
const peuxConduireEnFrance = pays === "FR" && age >= 18
const peuxConduireAuxUSA = pays === "US" && age >= 16

if (peuxConduireAuxUSA || peuxConduireEnFrance) {
      console.log("Vous pouvez conduire")
} else {
      console.log("Vous ne pouvez pas conduire")
}

switch (pays) {
      case "FR" : 
            console.log("Vous êtes en France")
            break
      case "US" : 
            console.log("Vous êtes aux US")
            break
      default :  
            console.log("Vous êtes ailleurs")
            break
}

// EXERCICE 1 --> Vous êtes un service de straming et vous devez conseiller le bon film en fonction de l'age du client

const userAge = prompt("Quel est votre age ?")

if (userAge < 12) {
      alert("Regarder Pepa Pig")
} else if (userAge > 12 && userAge < 18) {
      alert("Regardez \"Je suis une légende\"")
} else {
      alert("Regardez du porno")
}

// EXERCICE 2 --> Demandez à l'utilisateur deux nombre, les multiplié entre eux dire si le résultat est positif ou négatif

const nombreA = prompt("Entrez un nombre positif ou négatif")
const nombreB = prompt("Entrez un nombre positif ou négatif")
const result = nombreA * nombreB

if (result < 0) {
      alert("Le resultat de la multiplication est " + result + ", c'est un nombre négatif")
} else {
      alert("Le resultat de la multiplication est " + result + ", c'est un nombre positif")
}