const { log, timeLog } = require("console");

const command = process.argv[2];
var toSuccess;
const player1 = {
    attack: Math.floor(Math.random() * (100 - 1 + 1) + 1),
    defence: Math.floor(Math.random() * (100 - 1 + 1) + 1),
    agility: Math.floor(Math.random() * (100 - 1 + 1) + 1)
}
const actions = {
    run: {toSuccess: 25, method: resultatRun},
    attack: {toSuccess: 75, method: resultatAttack},
    dodge: {toSuccess: 50, method: resultatDodge}
};

console.log(`${player1.defence}`)
console.log(`${player1.attack}`)
console.log(`${player1.agility}`)


if(actions.hasOwnProperty(command)){
    console.log(actions[command].method(actions[command].toSuccess,player1)? 'Réussite' : 'Echec');
} else{
    console.log("Command invalide");
}


function resultatAttack(toSuccess, player1){
    return player1.attack > toSuccess;
};
function resultatDodge(toSuccess, player1){
    return player1.defence > toSuccess;
};
function resultatRun(toSuccess, player1){
    return player1.agility > toSuccess;
}