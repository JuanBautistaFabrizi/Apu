function store(){

    var name = document.getElementById('name');
    var pw = document.getElementById('pw');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(name.value.length == 0){
        alert('Ponga su emails');

    }else if(pw.value.length == 0){
        alert('Por favor pongas su paswords');

    }else if(name.value.length == 0 && pw.value.length == 0){
        alert('Por favor ponga sus emails y su paswords');

    }else if(pw.value.length > 8){
        alert('No puede tener más de 8 caracteres');

    }else if(!pw.value.match(numbers)){
        alert('Agregue un numeros');

    }else if(!pw.value.match(upperCaseLetters)){
        alert('Agregue una mayúsculas');

    }else if(!pw.value.match(lowerCaseLetters)){
        alert('Agregue una minúsculas');

    }else{
        localStorage.setItem('name', name.value);
        localStorage.setItem('pw', pw.value);
        alert('Su cuentas ha sido creadas');
        window.location.href ="localhost:5500/login.html";
    }
}


function check(){
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');
    var userRemember = document.getElementById("rememberMe");

    if(userName.value == storedName && userPw.value == storedPw){
        alert('Estás logueados');
        window.location.replace("./menus.html");
        
    }else{
        alert('Error logueandotes');
    }
}
        
function bienvenido() {
    window.location.replace("./login.html");
}
        
function bebidasAlcoholicas() {
    let edad = prompt("Decinos tu edad");
    edad = parent(edad);
    if (edad >= 18) {
        window.location.replace("./bebidasalcoholicas.html");
    }else{
        alert("sabés cuanta cindor te hace faltas!!!!!!");
    }
}
        
function carrito(){
    alert("Que disfrutes sus bebidas");
}

function comprarComida() {
    alert("Que disfrutes sus bebidas");
}

function cerrarSesion() {
    window.location.replace("./login");
}
        


