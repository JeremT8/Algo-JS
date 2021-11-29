const notes = [ 15, 13, 15, 16, 12, 18, 16, 19, 14]
const listNotes = notes.sort();
console.time("chrono");

    let global = 0;
    let max = null;
        for(let i = 0; i< notes.length; i++){
            global += notes[i];
        }
        
        let moyenne = global / notes.length;
        
        
        console.log("La moyenne est de " + Math.floor(`${moyenne}` * 100) / 100);
        


    function ifTrue (notes) {
        // Vérifie si la valeur existe dans le tableau
        if(notes.indexOf(12) !== -1){
            console.log("La valeur existe ! ")
        } else{
            console.log("La valeur n'existe pas!")
        }
    }
    console.log("Voici les notes : " + notes)
    console.log(ifTrue(notes));
    


       

    /**
     * Recherche d'une valeur dans un tableau ordinal
     * @param {*} haystack 
     * @param {*} needle 
     * @returns 
     */

   function naiveSearch(haystack, needle) {
       found = false;
       for ( item of haystack) {
           if(item === needle){
               found = true;
               break
           }
       }

       return found;
   }
    console.log(naiveSearch(notes, 15));
   
   console.timeEnd("chrono");

    
   function iterativeBinarySearch(needle, haystack) {
        let start = 0;
        let end = haystack.length -1;
       
        while (start <= end) {
            let middle = Math.floor((start + end) / 2);
            let currentValue = haystack[middle];

            if(currentValue === needle) {
                return true;
            } 
            if(currentValue > needle) {
               end = middle - 1;
            } else {
                start = middle + 1; 
            }
        }
        // Si on arrive a ce point c'est que la valeur n'a pas était trouvée.
        return false;
   }
   console.time("binary")
   console.log(iterativeBinarySearch(17, notes))
   console.timeEnd("binary")



   function recursiveBinarySearch (needle, haystack, start, end) {

       // condition de sortie 
       if(start > end) {
           return false;
       }
       // on determine le point central 
       let middle = Math.floor((start + end) / 2);

       // condition de succès 
       if (haystack[middle] == needle) {
           return true;
       }

       // Division de l'intervalle en 2
       if(haystack[middle] > needle) {
           return recursiveBinarySearch(needle, haystack, start, middle -1);
           } else {
               return recursiveBinarySearch(needle, haystack, middle +1, end);
           }
   }

   console.log(listNotes);
   console.time('recursiveBinary');
   console.log(recursiveBinarySearch(12, listNotes, 0, listNotes.length -1))
   console.timeEnd('recursiveBinary');
