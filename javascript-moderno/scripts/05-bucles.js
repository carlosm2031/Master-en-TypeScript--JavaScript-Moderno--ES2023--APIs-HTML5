let nombres = ["Carlos", "Pedro", "Juan"];


// Bucle clasico
for(let i = 0; i < nombres.length; i++){
    //console.log(nombres[i]);
}

// For of
for(let nombre of nombres){
    console.log(nombre);
}

// For in
for(let indice in nombres){
    console.log(nombres[indice]);
}

// Foreach
nombres.forEach((nombre, indice)=>{
    console.log(nombre, indice);
})

// Iterables
let iterable = nombres.values();