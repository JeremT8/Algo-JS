class Publisher {
  constructor() {
    this.subscriptions = [];
  }

  /**
   * Methode pour s'abonner a un evenement
   * @param {*} subscriber
   * @param {*} callback
   */

  subscribe(subscriber, callback) {
    this.subscriptions.push({
      target: subscriber,
      action: callback,
    });
  }

  broadcast(eventData) {
	  for (let item of this.subscriptions) {
		  item.action(eventData, item.target);
	  }
  }

}


class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
}


const p1 = new Person("Johnny")
const p2 = new Person("Eric")
const p3 = new Person("Paul")
const p4 = new Person("Monique")
const p5 = new Person("Antoine")


const publisher = new Publisher();


publisher.subscribe(p1, (data, target) => {
	console.log(`${target.name} dit : J'ai bien noté le message ${data}`)
})

publisher.subscribe(p2, (data, target) => {
	console.log(`${target.name} dit : ${data} ca fout les boules `)
})

publisher.subscribe(p3, (data, target) => {
	console.log(`${target.name} dit : Je m'en fous `)
})


publisher.broadcast("Alerte Covid");