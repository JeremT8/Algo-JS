
// Instance en JavaScript
person = {
    name: "Brahé",
    firstName: "Tycho",
    getFullName: function(){
        console.log(this)
        return this.firstName + " " + this.name.toUpperCase();
    }
}
person.name = "BART"
console.log(this)
console.log(person.getFullName());

// Isolation avec un fonction  

function createPerson(name, firstName) {
    const getAge = function() {
        return Math.floor(Math.random() * 50) + 30;
    }
    return {
        name,
        firstName,
        getFullName: function(){
            console.log(this)
            return this.firstName + " " + this.name.toUpperCase() + " vous avez " + getAge() + " ans.";
             
        }
    }
}

const ada = createPerson("Lovelace", "Ada");

console.log(ada.getFullName());


const app = (
    function () {
        return {
            name: "jeu de la vie"
        }
    })();

    console.log(app.name);