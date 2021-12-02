function Person(name) {
    this.name = name;
}

const hasAddress = {
    street: null,
    city: null,
    getAddress: function () {
        return `${this.street} ${this.city}`;
    }
}

// Ajout de l'adresse à l'objet Person
Object.assign(Person.prototype, hasAddress);

const p1 = new Person("Paul Auster");
p.city = "New York";
p.street = "5th Avenue";
const p2 = new Person("Paul Auster");
p.city = "New York";
p.street = "5th Avenue";
const p3 = new Person("Paul Auster");
p.city = "New York";
p.street = "5th Avenue";
const p4 = new Person("Paul Auster");
p.city = "New York";
p.street = "5th Avenue";

console.log(p.getAddress());

//console.log(p);

