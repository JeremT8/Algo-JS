const fs = require('fs');


// Lecture de la source de données
const dataSource = "./data.json";
// lecture du fichier 
const data = fs.readFileSync(dataSource, "utf-8");
// transformation des données textes en objet (déssérialisation)
const taskList = JSON.parse(data)

console.log(taskList)

// Création de l'application
const app = (function(){
    const findAll = function(){
        return taskList;
    }
    
    const insertOne = function(label) {
        // la nouvelle tache
        const newTask = {
            label: label,
            done: false,
            id: new Date().getTime().toString(36)
        }
        // ajout de la liste des tâches
        taskList.push(newTask);
        // ecrire dans le fichier JSON
        fs.writeFileSync(dataSource, JSON.stringify(taskList))
    }

    const findOneById = function(id) {

        oneTask = taskList.find(item => (item.id === id));
        return oneTask
        
    }
    
    const deleteOneById = function (id) {
        const index = taskList.findIndex ( item => item.id === id);
            if(index >= 0 ) {
                taskList.splice(index, 1)
            } 

            return findAll();
        }
    

    return {
        findAll,
        insertOne,
        findOneById,
        deleteOneById
    }
})();

// Test
console.table(app.findAll());
//app.insertOne("M'onaniser")
console.log(app.findOneById(1))
console.log(app.deleteOneById(1))