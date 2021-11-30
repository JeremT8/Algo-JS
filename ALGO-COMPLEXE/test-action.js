// Les actions possibles et les droits associés
const actions = {
    update: {
        access: 1,
        method: () => console.log("Mise a jour")
    },
    read: {
        access: 1,
        method: () => console.log("Lecture")
    },
    insert: {
        access: 1,
        method: () => console.log("Insertion")
    }
}

const command = process.argv[2];

// La commande correspond à une action possible
if( actions.hasOwnProperty(command)){
    // test des droits sur la commande
    if(actions[command].access === 1){
        actions[command].method();
    } else {
        console.error("KO");
    }
} else {
    console.error("Commande inconnue");
}