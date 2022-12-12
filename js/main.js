//Definimos la variable
let nombre = "Miriam";
//Se comviernten en mayusculas
nombre = nombre.toLowerCase();
//Se define las variables letras y cont final
let letra="";
let contFinal=0;

//Se esribe el ciclo for 
for (let index = 0; index < nombre.length; index++) {
    console.log(nombre.charAt(index));
    let contTemp=1;
    for (let cont = index+1; cont < nombre.length; cont++) {
        if( nombre.charAt(index) == nombre.charAt(cont))
            contTemp++;
        
    } // for cont
    if (contTemp>contFinal) {
        contFinal=contTemp;
        letra = nombre.charAt(index);
    }
    
}// for index

console.log(letra, contFinal);

// //Entrada 
// //"Lura Aline"
// //Salida
// //"enilA aruaL"
 
//Solución 1
// nombre = "Ricardo Arturo";

// //Se define la variable reversa
// let reversa="";

// //Se crea el ciclo for donde la recorre letra por letra 
// for (let index = nombre.length; index > -1; index--){
//     console.log(nombre.charAt(index));

//     reversa = reversa + nombre.charAt(index);
   
// }// for index

// console.log(reversa.charAt);


//Solución 2
function reves (str) {
    let tmpStr="";
    for (let indice = str.length - 1; indice >= 0; indice--) {
        tmpStr += str.charAt(indice);
        
    } // for indice
    return tmpStr;
}
  