function validar(){

    var c=456987;
    var u="Sofia";
    if(document.form.password.value==c && document.form.login.value==u){
        location.href = "../evaluacion/evaluacion.html";
    }
    else{
    alert("Los datos que ingresaste son incorrectos, intenta nuevamente.");
    }
    
    }
