const prenom = prompt("Entrez votre prenom")
const jour = prompt("Entrez votre jour de naissance (ex: 06)")
const mois = prompt("Entrez votre mois de naissance (ex : 02)")
const annee = prompt("Entrez votre annee de naissance (ex: 1933)")
const addDate = Number(jour[0]) + Number(jour[1]) + Number(mois[0]) + Number(mois[1]) + Number(annee[0]) + Number(annee[1]) + Number(annee[2]) + Number(annee[3])

if ( addDate === 11 ) {
      alert ( "Félicitations " + prenom + ", votre chemin de vie est un nombre maitre : " + addDate )
} else if ( addDate === 22 ) {
      alert ( "Félicitations " + prenom + ", votre chemin de vie est un nombre maitre : " + addDate )
} else if ( addDate === 33 ) {
      alert ( "Félicitations " + prenom + ", votre chemin de vie est un nombre maitre : " + addDate )
}  else {
      const newAdd = String ( addDate )
      const otherWay = Number ( newAdd[0] ) + Number ( newAdd[1] )
      if ( otherWay === 11) {
            alert ( "Félicitations " + prenom + ", votre chemin de vie est un nombre maitre : " + otherWay + ", après réduction" )
      } else  if ( otherWay === 22 ) {
            alert ( "Félicitations " + prenom + ", votre chemin de vie est un nombre maitre : " + otherWay + ", après réduction" )
      } else if ( otherWay === 33 ) {
            alert ( "Félicitations " + prenom + ", votre chemin de vie est un nombre maitre : " + otherWay + ", après réduction" )
      } else if ( otherWay === 1 ) {
            alert ( prenom + ", votre chemin de vie est le " + otherWay )
      } else if ( otherWay === 2 ) {
            alert ( prenom + ", votre chemin de vie est le " + otherWay )
      }  else if ( otherWay === 3 ) {
            alert ( prenom + ", votre chemin de vie est le " + otherWay )
      } else if ( otherWay === 4 ) {
            alert ( prenom + ", votre chemin de vie est le " + otherWay )
      } else if ( otherWay === 5 ) {
            alert ( prenom + ", votre chemin de vie est le " + otherWay )
      } else if ( otherWay === 6 ) {
            alert ( prenom + ", votre chemin de vie est le " + otherWay )
      } else if ( otherWay === 7 ) {
            alert ( prenom + ", votre chemin de vie est le " + otherWay )
      } else if ( otherWay === 8 ) {
            alert ( prenom + ", votre chemin de vie est le " + otherWay )
      } else if ( otherWay === 9 ) {
            alert ( prenom + ", votre chemin de vie est le " + otherWay )
      } else {
            const StringOtherWay = String ( otherWay )
            const reduction = Number ( StringOtherWay[0] ) + Number ( StringOtherWay[1] )
            if (reduction === 1) {
                  alert ( prenom + ", votre chemin de vie est le " + reduction + ", après réduction" )
            } else  if (reduction === 2) {
                  alert ( prenom + ", votre chemin de vie est le " + reduction + ", après réduction" )
            }  else  if (reduction === 3) {
                  alert ( prenom + ", votre chemin de vie est le " + reduction + ", après réduction" )
            } else  if (reduction === 4) {
                  alert ( prenom + ", votre chemin de vie est le " + reduction + ", après réduction" )
            } else  if (reduction === 5) {
                  alert ( prenom + ", votre chemin de vie est le " + reduction + ", après réduction" )
            } else  if (reduction === 6) {
                  alert ( prenom + ", votre chemin de vie est le " + reduction + ", après réduction" )
            } else  if (reduction === 7) {
                  alert ( prenom + ", votre chemin de vie est le " + reduction + ", après réduction" )
            } else  if (reduction === 8) {
                  alert ( prenom + ", votre chemin de vie est le " + reduction + ", après réduction" )
            } else  if (reduction === 9) {
                  alert ( prenom + ", votre chemin de vie est le " + reduction + ", après réduction" )
            }
      }
}
