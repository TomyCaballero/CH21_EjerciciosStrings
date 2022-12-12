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
