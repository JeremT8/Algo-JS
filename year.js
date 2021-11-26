/* Demander une année et afficher si elle est bissextile */ 

var years = parseInt(prompt("Saisir une année")); 
const retype = "";
const yearsIsBissextile = years%4==0 && years%100!=0 || years%400==0;
const yearsValid = "L'année " + years + " est bissextiles" ;
const yearsIsNotBissextile =  "L'année " + years + " n'est pas bissextile";

if (yearsIsBissextile) {
    console.log(yearsValid);
} else {
    console.log(yearsIsNotBissextile);
};


// facon terneur :     "console.log('yearsIsBissextile ? "bissextile" : "non bissextile"