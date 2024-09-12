const fs = require('fs')
//const book = {
 //   title: 'Ego is the Enemy',
 //   author: 'Ryan Holiday'
//}

//const bookJSON = JSON.stringify(book) // stringify permet de convertir the object to a string
//console.log(bookJSON)

//const parsedData = JSON.parse(bookJSON)
//console.log(parsedData.author) //nous renvoie juste l'auteur

/*fs.writeFileSync('1-json.json',bookJSON) //nous permet de créer un fichier json*/


//Le fichier étant déja créé, nous allons maintenant le lire
const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString() //sans le to.String ça me ramène les données sous forme binaire

const data= JSON.parse(dataJSON)
console.log(data.title) //nous renvoie juste le titre 
