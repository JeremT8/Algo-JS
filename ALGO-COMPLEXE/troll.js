// Toutes les possibilités du jeu
rules = {
    setting: `Vous êtes dans la forêt, 
vous rencontrez un troll\n
Que faites-vous ?`,
    actions: {
        fuir: {
            question: "Etes-vous rapide ?",
            answers: {
                oui: "Vous vous sauvez",
                non: "Le troll vous dévore"
            }
        },
        combattre: {
            question: "Etes-vous fort ?",
            answers: {
                oui: "Vous massacrez ce pauvre troll",
                non: "Le troll vous dévore"
            }
        },
        "se cacher": {
            question: "Etes-vous furtif ?",
            answers: {
                oui: "Vous vous cachez",
                non: "Le troll vous dévore"
            }
        }
    }
}

// Importation du module readline
const readline = require('readline');

// Configuration de readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Mise en forme du message initial
// avec les actions possibles pour le joueur
let message = rules.setting + "\n";
for (key in rules.actions) {
    message += key + " ";
}

console.log(message);

// fonction pour demander le choix du joueur (oui/non)
function askForChoice(choice) {
    rl.question(rules.actions[choice].question, function (answer) {
        if (answer in rules.actions[choice].answers) {
            console.log(rules.actions[choice].answers[answer]);
            rl.close();
            process.exit();
        } else {
            askForChoice(choice);
        }
    });
}

// Fonction pour demander l'action
// du joueur
function askForAction() {
    rl.question(message, function (answer) {
        // La réponse correspond à une action possible
        if (answer in rules.actions) {
            askForChoice(answer);
        } else {
            askForAction();
        }
        //rl.close();
        //process.exit();
    })
}

// Lancement du jeu
askForAction();

