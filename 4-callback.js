// setTimeout (() => {   
//     console.log('Two seconds are up')
// },2000
// )


// const names = ['Andrew','Jen','Jess']
// const shortNames = names.filter((name) => {
//     return name.length  <= 4
// })

// const geocode =(address,callback) => {
//     setTimeout(() =>{
//         const data = {
//             latitude : 0,
//             longitude :0
//         }
//         callback(data)
//     },2000)
// }

// geocode('Philadelphia',(data) =>{
//     console.log(data)

// })


// Objectif : jouer avec le modèle de rappel
//
// 1. Définir une fonction d'ajout qui accepte les arguments corrects
// 2. Utilisez setTimeout pour simuler un délai de 2 secondes
// 3. Une fois les 2 secondes écoulées, appelez la fonction de rappel avec la somme
// 4. Testez votre travail !

// ajouter ( 1 ,  4 ,  ( somme )  =>  {
//     console . log ( sum )  // Doit afficher : 5
// } )

const add = (a,b,callback) => {
    setTimeout(()=>{
        console.log('Two seconds are up')
        callback(a+b)
    },2000)
   console.log 
}

add(1,4,(sum) =>{
    console.log(sum)
})

