// Parametros por defecto

function saludo(persona="carlos"){
    console.log('Hola ' + persona);
}

saludo();
saludo('Pedro');

// Funciones flecha
let saludo2 =nombre=>{
    console.log(`Hola ${nombre}`);
}

saludo2('Carlos');

let saludo4 = (nombre, apellido)=>{
    console.log(`Hola ${nombre} ${apellido}`);
}

saludo4('Carlos', 'Gonzalez');

// JSON

let tienda = {
    nombre: 'Tienda',
    videojuegos: [
        "Mario","Zelda","Metroid"
    ],
    mostrar: ()=>{
        console.log(tienda.nombre);
    }
}

tienda.mostrar();