const fs = require('fs');

// Lecture de la source de données
const dataSource = "./data.json";
// lecture du fichier
const data = fs.readFileSync(dataSource, "utf-8");
// transformation des données texte en objet (déssérialisation)
const taskList = JSON.parse(data);
// console.log(taskList);

// Création de l'application

const app = (function () {

    const persist = function () {
        // Ecriture dans le fichier json
        fs.writeFileSync(dataSource, JSON.stringify(taskList));
    }

    const findAll = function () {
        return taskList;
    }

    const insertOne = function (label) {
        // la nouvelle tâche
        const newTask = {
            label: label,
            done: false,
            id: new Date().getTime().toString(36)
        }

        // Ajout à la liste des tâches
        taskList.push(newTask);

        persist();

        return findAll();
    }

    const findOneById = function (id) {
        return taskList.find(item => item.id === id);
    }

    const deleteOneById = function (id) {
        const index = taskList.findIndex(item => item.id === id);
        if (index >= 0) {
            taskList.splice(index, 1);
            persist();
        }

        return findAll();
    }

    const updateOne = function (task) {
        const index = taskList.findIndex(item => item.id === task.id);
        if (index >= 0) {
            taskList[index] = task;
            persist();
        }

        return findAll();
    }

    const findAllPending = function() {
        return taskList.filter(item => ! item.done);

    }


    const findAllDone = function() {
        return taskList.filter(item => item.done);
        
    }

    return {
        findAll,
        insertOne,
        findOneById,
        deleteOneById,
        updateOne,
        findAllPending,
        findAllDone
    }
})();

// Routage de l'application
const route = process.argv.slice(2);
if (route.length > 0) {
    const command = route[0];
    const params = route.slice(1);
    if (command in app) {
        let result = executeCommand(command, params);
        console.log(result);
    } else {
        console.error("commande inconnue");
    }
} else {
    console.error("Vous devez saisir une commande");
}
function executeCommand(command, params) {
    if (command === "updateOne") {
        const task = {
            label: params[0],
            id: params[1],
            done: params[2] === "true"
        };
        result = app.updateOne(task);
    } else {
        // Exécution de la commande
        result = app[command](...params);
    }
    return result;
}

