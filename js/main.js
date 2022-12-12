
let btnEnviar = document.getElementById("btnEnviar");
btnEnviar.addEventListener("click", function(event){
    event.preventDefault();
    let emailgRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let exampleFormControlInput1 = document.getElementById("exampleFormControlInput1");
    let exampleFormControlTextarea1 = document.getElementById("exampleFormControlTextarea1");
    let alertError = document.getElementById("alertError");
    exampleFormControlTextarea1.value = exampleFormControlTextarea1.value.trim();
    alertError.style.display="none";
    alertError.innerHTML="";

    if (exampleFormControlTextarea1.value.trim().replaceAll("  " , "").length < 20) {
        alertError.innerHTML= "El mensaje debe contener 20 caracteres o más"
        alertError.style.display="block";
        exampleFormControlTextarea1.focus();
        exampleFormControlTextarea1.select();
    }//if

    if (exampleFormControlInput1.value.math(emailgRegex) == null) {
        alertError.style.display="block";
        alertError.innerHTML += "<br/>El correo electronico no es válido.";
    }
});