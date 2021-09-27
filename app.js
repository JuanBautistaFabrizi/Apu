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
    window.location.replace("./login.html");
}

function bebidasAlcoholicas() {
    let edad = prompt("Decinos tu edad");
    edad = parent(edad);
    if (edad >= 18) {
        window.location.replace("./bebidasalcoholicas.html");
    } else {
        alert("sabés cuanta cindor te hace faltas!!!!!!");
    }
}






let carritos = [];

/* let alfajor = document.getElementById("alfajor");
let gummiMilo = document.getElementById("gummiMilo");
let chupetin = document.getElementById("chupetin");
let sugus = document.getElementById("sugus");
let yummys = document.getElementById("yummys");
let chocolate = document.getElementById("chocolate");



alfajor.addEventListener("click",sumarItem);
gummiMilo.addEventListener("click",sumarItem);
chupetin.addEventListener("click",sumarItem);
sugus.addEventListener("click",sumarItem);
yummys.addEventListener("click",sumarItem);
chocolate.addEventListener("click",sumarItem); */





/* let producto = {
    alfajor : {
        nombre:'alfajor'
        
    },
    gummiMilo : {
        
        nombre:'Gummi Venus de Milo'
    },
    chupetin : {
        
        nombre: 'chupetin'
    },
    sugus : {
        
        nombre:'sugus'
    },
    yummis : {
        
        nombre:'yummis'
    },
    chocolate : {
        
        nombre:'chocolate'
    },
    cola : {
        nombre:'cola'
    },
    limonada : {
        nombre:'limonada'
    },
    fanta : {
        nombre:'fanta'
    },
    limaLimon : {
        nombre:'lima limon'
    },
    gatorade : {
        nombre:'gatorade'
    },
    cepita : {
        nombre:'cepita'
    },
} */

function init() {
    function Producto(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    let alfajor = new Producto('alfajor', 50);
    let gummiMilo = new Producto('Gummi Venus de Milo', 200);
    let chupetin = new Producto('chupetin', 20);
    let sugus = new Producto('sugus', 40);
    let yummys = new Producto('yummys', 60);
    let chocolates = new Producto('chocolates', 100);
    let buzzCola = new Producto('buzz cola', 40);
    let limonada = new Producto('limonada', 30);
    let fanta = new Producto('fanta', 35);
    let limaLimon = new Producto('lima limon', 40);
    let gatorade = new Producto('gatorade', 70);

    console.log(alfajor);
}



function sumarItem(item) {
    carritos.push(item)
}
console.log(carritos);


function cerrarSesion() {
    window.location.replace("./login.html");
}



