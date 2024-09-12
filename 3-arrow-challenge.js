//
// Objectif : Créer une méthode pour obtenir les tâches incomplètes
//
// 1. Définir la méthode getTasksToDo
// 2. Utilisez le filtre pour renvoyer uniquement les tâches incomplètes (fonction flèche)
// 3. Testez votre travail en exécutant le script

 const taks =  {
    tâches : [ {
        texte : "Faire les courses ",
        terminé : vrai
    } , {
        texte : "Cour propre " ,
        terminé : faux
    } ,  {
        texte : "Cours de cinéma" ,
        terminé : faux
    } ],
    getTasksToDo(){
        const tasksToDo = this.tasks.filter((task) => 
        task.completed === false)
    }
}

console . log ( tâches . getTasksToDo ( ) )