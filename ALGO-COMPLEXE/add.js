function add(a, b) {
    return a + b;
}

function factory(arg, f) {
    return function(b){
        return f(arg, b);
    };
}


const add5 = factory(5, add);

console.log(add5(3))



function greet(name, greeting) {
    console.log(greeting + " " + name);
}

function greetFactory(greeting) {
    return function(name) {
        return greet(name, greeting);
    }
}

const greetInSpanish  = greetFactory("Hola");
greetInSpanish("Carmen"); 

greet("Seb", "Bonjour");