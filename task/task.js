const fs = require('fs');

// Lecture de la source de données
const dataSource = "./data.json";
// lecture du fichier
const data = fs.readFileSync(dataSource, "utf-8");
// transformation des données texte en objet (déssérialisation)
const taskList = JSON.parse(data);
// console.log(taskList);

// Création de l'application

const app = (function(){

    const persist = function(){
        // Ecriture dans le fichier json
        fs.writeFileSync(dataSource, JSON.stringify(taskList));
    }

    const findAll = function(){
        return taskList;
    }

    const insertOne = function(label){
        // la nouvelle tâche
        const newTask = {
            label: label,
            done: false,
            id: new Date().getTime().toString(36)
        }

        // Ajout à la liste des tâches
        taskList.push(newTask);

        persist();
    }

    const findOneById = function(id){
        return taskList.find( item => item.id === id);
    }

    const deleteOneById = function(id){
        const index = taskList.findIndex( item => item.id === id);
        if(index >= 0){
            taskList.splice(index, 1);
            persist();
        } 

        return findAll();
    }

    const updateOne = function(task){
        const index = taskList.findIndex( item => item.id === task.id);
        if(index >= 0){
            taskList[index] = task;
            persist();
        }

        return findAll();
    }

    return {
        findAll,
        insertOne,
        findOneById,
        deleteOneById,
        updateOne
    }
})();

// Test
const task = app.findOneById(1);
task.done = false;
task.label = "Sortie a l'interieur";
console.log(app.updateOne(task));