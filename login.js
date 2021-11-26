
    var login = prompt("Entrer votre identifiant"); 
    var pass = prompt("Entrez votre mot de passe"); 

    const isUserInputInvalid = login == "" || pass == "";
    const isCredentialsValid = login == "admin" && pass == "123";
    
    if(isUserInputInvalid)  { 
        console.log("Saisie incomplète"); 
    } if(isCredentialsValid)    { 
        console.log("Accès autorisé"); 
    } else { 
        console.log("Accès interdit") 
    } 
   