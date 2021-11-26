
const Leave = 1;
const Fight = 2;
const Hide = 3;

contextChoice = "Vous rencontrez un troll dans la forêt \nQue faites-vous ?\n 1: Fuir\t 2: Combattre\t 3: Se cacher";
        const action = prompt(contextChoice);

        
        if(action == Leave){
            const Fast = confirm("Etes-vous rapide ?");
            if(Fast){
                alert("Vous vous sauvez de justesse");
            } else {
                alert("Le troll vous attrape et vous devore");
            }
        } else if (action == Fight) {
            const Strong = confirm("Etes-vous fort ?");
            if (Strong) {
                alert("Vous massacrez ce pauvre troll");
            } else {
                alert("Le troll vous assome et vous devore");
            }
        } else if (action == Hide) {
            const Furtif = confirm("Etes-vous furtif ?");
            if (Furtif) {
                alert("Le troll ne vous voit pas et passe son chemin");
            } else {
                alert("Le troll vous trouve et vous devore");
            } 
        } else {
            alert("Vous devez choisir une action valide");
        } 