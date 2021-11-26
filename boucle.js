/* let star = ""
for (let i = 1; i < 6; i++) {
    star += "*"
    console.log(star)
}
*/ 

let msg = prompt("Entrez un texte");
let isNumber = true;

for (let i = 0; i < msg.length; i++) {
    code = msg.charCodeAt(i)
    if ( ! (code >= 48 && code <= 57) ) {
        isNumber = false;
        break;
    }   
}
console.log(isNumber);
