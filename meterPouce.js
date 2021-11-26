
    var size = prompt("Votre taille en cm");
        var convertCmInFoot = 30.48;
        var convertCmInPouce = 2.54;

        
        var feet = size / convertCmInFoot;
        
        var remains = size % convertCmInFoot;
        
        var pouce = remains / convertCmInPouce;

        feet = parseInt(feet);
        pouce = parseInt(pouce);

        console.log( feet + " pieds et " + pouce + " pouces ");





    // Sert à  démontrer la valeur de NaN ! 
        const calc = 1 * "a";
        console.log(typeof calc);

