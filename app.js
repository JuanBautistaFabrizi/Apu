function store() {

    var name = document.getElementById('name');
    var pw = document.getElementById('pw');

    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    var formularioRegister = document.getElementById('formRegister');
    formularioRegister.addEventListener('submit', function (event) {
        event.preventDefault();

        if (name.value.length == 0) {
            alert("Ponga su emails");
        } else if (pw.value.length == 0) {
            alert("Por favor pongas su paswords");
        } else if (name.value.length == 0 && pw.value.length == 0) {
            alert("Por favor ponga sus emails y su paswords");
        } else if (pw.value.length > 8) {
            alert("No puede tener más de 8 caracteres");
        } else if (!pw.value.match(numbers)) {
            alert("Agregue un numeros");
        } else if (!pw.value.match(upperCaseLetters)) {
            alert("Agregue una mayúsculas");
        } else if (!pw.value.match(lowerCaseLetters)) {
            alert("Agregue una minúsculas");
        } else {
            localStorage.setItem("name", name.value);
            localStorage.setItem("pw", pw.value);
            alert("Su cuentas ha sido creadas");
            window.location.replace("./login.html");
            location.href = login.html
            console.log(pw.value);
        }

    })
}

function check() {
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');
    var userRemember = document.getElementById("rememberMe");

    var formularioLogin = document.getElementById('formLogin');
    formularioLogin.addEventListener('submit', (event) => {
        event.preventDefault();

        if (userName.value == storedName && userPw.value == storedPw) {
            alert("Estás logueados");

            window.location.replace("./menus.html");
        } else {
            alert("Error logueandotes");
        }

    })
}


        
function bienvenido() {
    window.location.replace("./register.html");
}
        
function bebidasAlcoholicas() {
    let edad = prompt("Decinos tu edad");
    edad =parseInt(edad);
    
    if (edad >= 18) {
        window.location.replace("./bebidasalcoholicas.html");
    }else{
        alert("sabés cuanta cindor te hace faltas!!!!!!");
    }
}
        

var Producto = {
    nombre: '',
    precio: 0
};


var alfajor = Object.create(Producto);
alfajor.nombre = 'alfajor';
alfajor.precio = 20;

var gummiMilo = Object.create(Producto);
gummiMilo.nombre = 'Gummi Venus de Milo';
gummiMilo.precio = 120;

var chupetin = Object.create(Producto);
chupetin.nombre = 'chupetin';
chupetin.precio = 20;

var sugus = Object.create(Producto);
sugus.nombre = 'sugus';
sugus.precio = 60;

var yummys = Object.create(Producto);
yummys.nombre = 'yummys';
yummys.precio = 80;

var chocolate = Object.create(Producto);
chocolate.nombre = 'chocolate';
chocolate.precio = 120;

var buzzcola = Object.create(Producto);
buzzcola.nombre = 'buzzcola';
buzzcola.precio = 80;

var limonada = Object.create(Producto);
limonada.nombre = 'limonada';
limonada.precio = 60;

var fanta = Object.create(Producto);
fanta.nombre = 'fanta';
fanta.precio = 70;

var limalimon = Object.create(Producto);
limalimon.nombre = 'limalimon';
limalimon.precio = 30;

var gatorade = Object.create(Producto);
gatorade.nombre = 'gatorade';
gatorade.precio = 100;

var cepita = Object.create(Producto);
cepita.nombre = 'cepita';
cepita.precio = 40;

var duff = Object.create(Producto);
duff.nombre = 'duff';
duff.precio = 90;

var fuddBerr = Object.create(Producto);
fuddBerr.nombre = 'fuddBerr';
fuddBerr.precio = 90;

var blueBronco = Object.create(Producto);
blueBronco.nombre = 'Blue Bronco';
blueBronco.precio = 120;

var flamingHomer = Object.create(Producto);
flamingHomer.nombre = 'Flaming Homer';
flamingHomer.precio = 150;

var energyDrink = Object.create(Producto);
energyDrink.nombre = 'Energy Drink';
energyDrink.precio = 100;

var forgetAlready = Object.create(Producto);
forgetAlready.nombre = 'Forget Already';
forgetAlready.precio = 130;



let carritos = [];

let btnalfajor = document.getElementById("btnalfajor");
let btngummiMilo = document.getElementById("btngummiMilo");
let btnchupetin = document.getElementById("btnchupetin");
let btnsugus = document.getElementById("btnsugus");
let btnyummys = document.getElementById("btnyummys");
let btnchocolate = document.getElementById("btnchocolate");
let btnbuzzcola = document.getElementById("btnbuzzcola");
let btnlimonada = document.getElementById("btnlimonada");
let btnfanta = document.getElementById("btnfanta");
let btnlimalimon = document.getElementById("btnlimalimon");
let btngatorade = document.getElementById("btngatorade");
let btncepita = document.getElementById("btncepita");
let btnDuff = document.getElementById("btnDuff");
let btnFuddBerr = document.getElementById("btnFuddBerr");
let btnBlueBronco = document.getElementById("btnBlueBronco");
let btnFlamingHomer = document.getElementById("btnFlamingHomer");
let btnEnergyDrink = document.getElementById("btnEnergyDrink");
let btnForgetAlready = document.getElementById("btnForgetAlready");





btnalfajor.addEventListener("click",() =>{sumarItem(alfajor)});
btngummiMilo.addEventListener("click",() => {sumarItem(gummiMilo)});
btnchupetin.addEventListener("click",() =>{sumarItem(chupetin)});
btnsugus.addEventListener("click",() => {sumarItem(sugus)});
btnyummys.addEventListener("click",() => {sumarItem(yummys)});
btnchocolate.addEventListener("click",() => {sumarItem(chocolate)});
btnbuzzcola.addEventListener("click",() => {sumarItem(buzzcola)});
btnlimonada.addEventListener("click",() => {sumarItem(limonada)});
btnfanta.addEventListener("click",() => {sumarItem(fanta)});
btnlimalimon.addEventListener("click",() => {sumarItem(limalimon)});
btngatorade.addEventListener("click",() => {sumarItem(gatorade)});
btncepita.addEventListener("click",() => {sumarItem(cepita)});
btnDuff.addEventListener("click",() => {sumarItem(duff)});
btnFuddBerr.addEventListener("click",() => {sumarItem(fuddBerr)});
btnBlueBronco.addEventListener("click",() => {sumarItem(blueBronco)});
btnFlamingHomer.addEventListener("click",() => {sumarItem(flamingHomer)});
btnForgetAlready.addEventListener("click",() => {sumarItem(forgetAlready)});




function sumarItem(item) {
    carritos.push(item)
}
    
    
console.log(carritos);


function cerrarSesion() {
    window.location.replace("./login.html");
}

function pagar() {
    let sum = 0;
    for (let i = 0; i < carritos.length; i++) {
        sum += carritos[i].precio;
    }
    
    alert(`Su facturas por su compras es de $${sum}`);
}
