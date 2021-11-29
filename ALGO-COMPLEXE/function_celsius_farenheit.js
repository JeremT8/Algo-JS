/** 
 *   Farenheit : T(F) = (C * 1.8) + 32 
 *   Degrees : T(C) = (F - 32) / 1.8
 * */  

  // Convertion Celsius en Farenheit 
 function farenheit(C)
 {
     let Farenheit = C * 1.8 + 32;
     return Farenheit;
 } 

 console.log(farenheit(5));



 // Convertion Farenheit en Celsius
 function celsius(F) {
     let celsius = (F - 32) / 1.8;
     return celsius;
 }

 console.log(celsius(41))
