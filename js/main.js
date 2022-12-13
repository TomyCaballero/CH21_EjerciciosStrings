
let btnEnviar = document.getElementById("btnEnviar");
let idTimeout; 


btnEnviar.addEventListener("click", function(event){
    event.preventDefault();
    //https://emailregex.com/
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let validos=0;


    let exampleFormControlInput1 = document.getElementById("exampleFormControlInput1"); //email
    let exampleFormControlInput2 = document.getElementById("exampleFormControlInput2"); //RFC
    let exampleFormControlTextarea1 = document.getElementById("exampleFormControlTextarea1");
    let alertError = document.getElementById("alertError");
    exampleFormControlTextarea1.value = exampleFormControlTextarea1.value.trim();
    alertError.style.display="none";
    alertError.innerHTML="";

    if (exampleFormControlTextarea1.value.trim().replaceAll("  " , "").length < 20) {  //se remplazan los espacios y se configura para que no tenga menos de 20 letras
        alertError.innerHTML= "El mensaje debe contener 20 caracteres o más.";
        alertError.style.display="block";
        exampleFormControlTextarea1.focus();
        exampleFormControlTextarea1.select();
        exampleFormControlTextarea1.style.border="solid red 1px";
    } else {  //if
        exampleFormControlTextarea1.style.border="solid green 1px";
        validos++;
    }  //else

    if (exampleFormControlInput1.value.match(emailRegex) == null) {
        alertError.style.display="block";
        alertError.innerHTML += "<br/>El correo electronico no es válido.";
        exampleFormControlInput1.style.border="solid red 1px";
    } else { //if
        exampleFormControlInput1.style.border="solid green 1px";
        validos++;
    } //else

    let RFCRegex = /^[A-Z]{4}[0-9]{6}[A-Z0-9]{3}$/;
    //  /^[A-Z]{4}\d{6}\w{3}$/;
      exampleFormControlInput2.value = exampleFormControlInput2.value.toUpperCase(); //Se cambian a Mayusculas
    if (exampleFormControlInput2.value.match(RFCRegex) == null) {
        alertError.style.display="block";
        alertError.innerHTML += "<br/>RFC no válido.";
        exampleFormControlInput2.style.border="solid red 1px";
    } else { //if
        exampleFormControlInput2.style.border="solid green 1px";
        validos++;
    } //else

    if ((idTimeout!=undefined) && (idTimeout!=null)) {
        clearTimeout(idTimeout);
    } // idTimeout

    if (validos == 3) {
        idTimeout = setTimeout (function(){
            exampleFormControlTextarea1.style.border="";
            exampleFormControlInput1.style.border="";
            exampleFormControlInput2.style.border="";
            
            
        } , 3000)
    } //==3

});