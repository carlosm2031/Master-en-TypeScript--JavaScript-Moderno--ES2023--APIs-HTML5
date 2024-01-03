let frutas = ["manzana", "pera", "naranja", "sandia"];

// Clásico
//let manzana = frutas[0];
//let pera = frutas[1];

// Desestructuración array
let [manzana, pera, naranja, sandia] = frutas;

console.log(manzana, pera, naranja, sandia);

// Desestructurar objeto
let persona = {
    nombre: "Carlos",
    edad: 25,
    altura: 1.69,
    pais: "Perú"
};

let { nombre, edad, altura, pais } = persona;

console.log(nombre, edad, altura, pais);

// Desestructurar string
let usuario = "Carlos Gonzalez WEB 123456789 PERU";
let [name, apellidos, web, telefono, paiss] = usuario.split(" ");

console.log(name, apellidos, web, telefono, paiss);

// Crear varias variables
let lenguaje = "js", framework = "react", editor = "vscode";

// Utilidad parametro funciones
function mostrarUsuario({nombre, apellidos="Sin apellidos", ciudad="Cajamarca"}){
    console.log(`${nombre} ${apellidos} ${ciudad}`);
}

mostrarUsuario({nombre:"Carlos",ciudad: "Trujillo"});