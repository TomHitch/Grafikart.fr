// BOUCLE WHILE

let i1 = 0
while (i1< 10) {
      i1 += 1
      console.log("i1 " + i1)
} // La boucle tournera tant que i est inférieur à 10, si on n'incrémente pas i += 1 la boucle sera infini et le navigateur plantera

// BOUCLE FOR

for (let i2 = 0; i2 < 10; i2 += 1) {      // let i2 = 0 --> Valeur de départ ; i2 < 10 --> Conditions de sortie ; i2 +=1 --> Opération de mise à jour
      console.log("i2 " + i2)
}
const nombres = [ 15, 13, 17, 33 ]
for (let i3 = 0; i3 < nombres.length; i3 ++) {  // Va parcourir le tableau et afficher les 4 nombres du tableau
      console.log(nombres[i3])
}

// BOUCLE FOR IN

for (let i4 in nombres) {     // Pareil que la boucle FOR du dessus
      console.log(nombres[i4])
}

// BOUCLE FOR OF

const heroes = [
      {prenom : "Hiro", nom : "Nakamura"},
      {prenom : "Homer", nom : "Simpsons"}
]

for (let name of heroes) { // Ne marche que pour les tableaux []
      //console.log(name)
      console.log(name.prenom) // Pour afficher uniquement les prénoms du tableau d'objet
}