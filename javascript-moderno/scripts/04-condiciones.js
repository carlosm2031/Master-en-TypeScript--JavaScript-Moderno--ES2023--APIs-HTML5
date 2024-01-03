let persona = ["Carlos", 25];

// Condicion clásica
if(persona[1] > 18){
    console.log("Es mayor de edad");
}else{
    console.log("Es menor de edad");
}

// Operador ternario
persona[1] >= 18 ? console.log("Es mayor de edad") : console.log("Es menor de edad");

// Diferencia entre == y  === y != y !==
let edad1 = 80;
let edad2 = "80";

edad1 === edad2 ? console.log("Son iguales") : console.log("No son iguales");