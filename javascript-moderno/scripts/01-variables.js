// EcmaScript 2021 / ES12 / ES.NEXT

// Variables: let, const, var
// Contenedor de informacion, caja para guardar un dato


// VAR: ambito global o funcional
var nombre = 'Carlos';

function mostrarNombre () {
    nombre = 'Juan';
    var apellidos = 'Gonzalez';
    console.log( 'Dentro: ',apellidos );
    console.log( 'Dentro: ',nombre );
}

// mostrarNombre();
// console.log('Fuera: ', nombre );
// console.log('Fuera: ', apellidos );



// LET: solo existen dentro de un bloque
let pais = 'España';

function mostrarPais(){
    console.log(pais);
}

mostrarPais();

if(pais == 'España'){
    let continente = 'Europa';
    console.log(continente);
}

// No accesibkle desde fuera del bloque
// console.log(continente);

for(contador = 0; contador<=5; contador++){
    console.log(contador);
}

console.log("CONTADOR: " ,contador);


// CONST: Crear constantes o variables que su contenido no es variable

let edad = 18;

console.log(edad);

edad = 12;

console.log(edad);

const ciudad = 'Madrid';
const fechaNacimiento = '01/01/1990';

console.log(ciudad, fechaNacimiento);