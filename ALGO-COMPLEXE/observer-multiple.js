class Publisher {
	constructor() {
	  this.subscriptions = {};
	}
      
	/**
	 * Methode pour s'abonner a un evenement
	 * @param {*} subscriber
	 * @param {*} callback
	 */
      
	subscribe(eventName,subscriber, callback) {
		// initialisation d'un tableau si création d'un nouvelle element
		if(! (eventName in this.subscriptions)) {
			this.subscriptions[eventName] = [];
		}
	  this.subscriptions[eventName].push({
	    target: subscriber,
	    action: callback,
	  });
	}
      
	broadcast(eventName, eventData = null) {
		for (let item of this.subscriptions[eventName]){
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


      class Logger {
	      log(message) {
		      console.log(
			      new Date().toLocaleString()+ " " + message
		      );
	      }
      }
      
      
      const p1 = new Person("Johnny")
      const p2 = new Person("Eric")
      const p3 = new Person("Paul")
      const p4 = new Person("Monique")
      const p5 = new Person("Antoine")
      const logger = new Logger
      
      const publisher = new Publisher();
      

      publisher.subscribe("onCovidAlert", logger, (data, target) => {
	      target.log(data)
      })
      
      publisher.subscribe("onCovidAlert",p1, (data, target) => {
	      console.log(`${target.name} dit : J'ai bien noté le message ${data}`)
      })
      
      publisher.subscribe("onCovidAlert", p2, (data, target) => {
	      console.log(`${target.name} dit : ${data} ca fout les boules `)
      })
      
      publisher.subscribe("onCovidAlert", p3, (data, target) => {
	      console.log(`${target.name} dit : Je m'en fous `)
      })
      
      
      publisher.broadcast("onCovidAlert", "Alerte Covid");