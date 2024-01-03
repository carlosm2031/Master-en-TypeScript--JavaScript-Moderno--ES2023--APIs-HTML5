// String
let nombre = "Carlos";

// Number
let numero = 123;
let decimal = 3.14;

// Boolean
let mayor_edad = true;
let menor_edad = Boolean(0); //1 es true y 0 es false

// Array
let colores = ["rojo", "azul", "verde"];

// Null
let vacio = null;

// Undefined
let indefinido;

/*
console.log( typeof nombre ,
    typeof numero,
    typeof decimal,
    typeof mayor_edad,
    typeof menor_edad,
    typeof colores,
    typeof vacio,
    typeof indefinido );
*/

// JSON - JavaScript Object Notation - Objeto de Notación de JavaScript

let pelicula = {
    nombre: "Batman",
    anio: 2022,
    genero: "Acción",
    mostrar: function(){
        return `Pelicula: ${this.nombre} - ${this.anio} - ${this.genero}`
    }
}

pelicula.pais = "España";
// pelicula["pais"] = "España";

delete pelicula.anio;

// console.log(pelicula);
// console.log("nombre" in pelicula);

for(let propiedad in pelicula){
    let datos = pelicula[propiedad];
    if(datos != null && typeof(datos) != "function"){
    console.log(pelicula[propiedad]);
    }
}

// Symbol
let animal = Symbol("Animal");
let animal2 = Symbol("Animal");

let user = {
    id: 1,
    nombre: "Carlos",
    web: "carlos.com"
}

console.log(user);


