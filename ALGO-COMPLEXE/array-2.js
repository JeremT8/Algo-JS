/*

                **** JOINDRE DES TABLEAUX ****
 
const fruits = ["figues", "oranges", "poires", "mangues"];const legumes = ["courges", "carottes", "aubergine"];const legumineuses = ["soja", "pois chiche", "fèves"];

--- Concaténation des tableaux
const aliments = fruits.concat(legumes, legumineuses);
--- Autre syntaxe
const aliments2 = [...fruits, ...legumes, ...legumineuses];

console.log(aliments2)
*/


//              **** DECOUPAGE ET ASSEMBLAGE DE TABLEAUX ****


/* Demander la saisie d'une phrases
const phrase = prompt("Votre phrase");
    --- découper la phrase en tableau
    --- avec une case par mot
const words = phrase.split(" ");
    --- Mélanger les mots dans le tableau
words.sort( (item) => Math.random() - .5);
    --- Convertir le tableau en chaîne de caractère
const yodaSpeaking = words.join(" ");
console.log(yodaSpeaking);


var persons = [    
    {nom: 'toto', age: 50},    
    {nom: 'titi', age: 12},    
    {nom: 'tata', age: 28},    
    {nom: 'tutu', age: 17}];
    // Retourne vrai si toutes les personnes ont plus de 17 ans
    const allAdults = persons.every(persons => persons.age >17);
    // Retourne vrai si certaines personnes ont plus de 17 ans
    const someAdults = persons.some(persons => persons.age >17);

    console.log(allAdults);
    console.log(someAdults);
   
*/

const articles = [    
        {title: "Article1", author: "Paul", rating: 3},    
        {title: "Article1", author: "Sophie", rating: 5},    
        {title: "Article1", author: "Paul", rating: 4},    
        {title: "Article1", author: "Jean", rating: 2},    
        {title: "Article1", author: "Paul", rating: 2},    
        {title: "Article1", author: "Valérie", rating: 5}
    ];
    const paulArticles = articles.filter(item => item.author === 'Paul');
    // Equivalent à 
    /*
    const paulArticles = articles.filter( (item) => {
        return item.author === 'Paul'
    });*/
    
    const ratingList = paulArticles.map( item => item.rating);
    
    const averageRating = ratingList.reduce( (acc, val) => acc + val) / paulArticles.length;
    

console.log(averageRating, ratingList);