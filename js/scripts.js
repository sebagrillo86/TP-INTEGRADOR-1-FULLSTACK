let menu = document.querySelector('#menu');
let menu_bar = document.querySelector('#menu-bar');
    
  menu_bar.addEventListener('click', function() {
    menu.classList.toggle("menu-toggle");
    
  });



function validate(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var errmsg = document.getElementById("errmsg");
    var text;

    errmsg.style.padding="10px";

    if(name.length <5){
        text="Ingrese un nombre valido";
        errmsg.innerHTML=text;
        return false;
    }

    if(email.indexOf("@") == -1 || email.length < 6){
        text="Ingrese un correo válido";
        errmsg.innerHTML=text;
        return false;
    }

    if(message.length <= 50){
        text = "Ingrese más de 50 caracteres";
        errmsg.innerHTML=text;
        return false;
    }

    alert("Su formilario de contacto ha sido enviado, correctamente!")
    
    return true;
}