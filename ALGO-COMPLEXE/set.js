const list = [10, 13, 15, 11, 3];

// conversion du tableau en set

const listSet = new Set(list)


console.log(listSet)

console.log([...listSet])


const t1 = ["framboises", "fraises", "orange", "pommes"];
const t2 = ["framboises", "cerises", "abricots", "pommes"];

// Compter le nombre d'élément uniques aux deux tableaux
// fusion des 2 tableaux

const merged = [...t1, ...t2];

// convertir en set
const fruitSet = new Set(merged)

console.log(fruitSet);
console.log([...fruitSet].length)

const intersect = t1.filter((item) => t2.includes(item))
console.log(intersect);