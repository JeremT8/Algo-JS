class Fighter {
    constructor(name, health, attackSkill, defenseSkill){
        this.name = name;
        this.health = health;
        this.attackSkill = attackSkill;
        this.defenseSkill = defenseSkill;
    }

    isAlive(){
        return this.health >0;
    }

    takeDamage(value){
        this.health -= value;
        console.log(`${this.name} perd ${value} points de santé`);
        if(! this.isAlive()){
            console.log(`${this.name} est au spawn`);
        }
    }

    attack(opponent){
        console.log(`${this.name} attaque ${opponent.name}`);
        let attackValue = Math.random() * this.attackSkill;
        let defenseValue = Math.random() * opponent.defenseSkill;
        let result = attackValue - defenseValue;

        if(result >0){
            console.log(`${this.name} a touché`);
            opponent.takeDamage(result);
        } else {
            console.log(`${this.name} a raté`);
        }
    }
}

const f1 = new Fighter("Jinx", 50, 13, 15);
const f2 = new Fighter("Vi", 65, 14, 11);

while(f1.isAlive() && f2.isAlive()){
    f1.attack(f2);
    if(f2.isAlive()){
        f2.attack(f1);
    }
    
}