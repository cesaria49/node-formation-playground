const fs = require('fs')

const info = {
    name: 'Andrew',
    planet: 'Earth',
    age: 27
}

const infoJSON = JSON.stringify(info) // stringify permet de convertir the object to a string
console.log(infoJSON)
