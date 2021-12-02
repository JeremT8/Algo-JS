class Address {

    constructor(street, city) {
        this.street = street;
        this.city = city;
    }

    getAddress() {
        return `${street} ${city}`
    }
} 

class Person {

    constructor(name = "", firstName = "") {
        this.name = name;
        this.firstName = firstName;
    }

    setName (value) {
        this.name = value;
        return this;
    }

    setFirstName(value) {
        this.firstName = value;
        return this;
    }

    setAddress(address) {
        this.address = address;
        return this;
    }
}

const jane = new Person();
jane.setFirstName("Jane").setName("Austen").setAddress(new Address("8 rue du Bac", "Paris"))