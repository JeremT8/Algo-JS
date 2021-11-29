/* var email = prompt("votre email");
        var hasDot = false;
        var hasArobase = false;
        var isValidEmail = true;

        // for(var index = 0; index < email.length; index ++)
        for(var index in email){
            // Récupère le caractère dont la position est index
            char = email.charAt(index);

            // Si on trouve un espace l'email ne peut être valide
            // de même que s'il y a plus d'une arobase
            // on arrête donc la boucle
            if(char == " " || ("@" == char && hasArobase)){
                isValidEmail = false;
                break;
            }

            // test de l'existence d'un point
            if(char == "." && index > 0 && index < email.length-1){
                hasDot = true;
            }
            // test de l'existence d'une arobase
            if (char == "@" && index > 0 && index < email.length - 1) {
                hasArobase = true;
            }
        }

        isValidEmail = isValidEmail && hasArobase && hasDot;
        console.log(isValidEmail); 
        

        let word = prompt("Entrez un texte");
        let found = false;
        let Index = -1;
        for (let i = 0; i < word.length; i++) {
            code = word.charCodeAt(i)
            if (code >= 65 && code <= 90) {
                found = true;
                Index = i;
                break;
            }   
        }
        console.log(Index);

*/
