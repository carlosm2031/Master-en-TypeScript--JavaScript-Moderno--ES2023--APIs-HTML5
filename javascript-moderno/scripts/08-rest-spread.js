// // spread
// let heroes = ["Superman", "Batman", "Spiderman", "Flash", "Aquaman"];

// console.log(...heroes);

// function mostrarHeroes(heroe1, heroe2){
//     console.log(`
//         ****MIS HEROES FAVORITOS****
//             - ${heroe1}
//             - ${heroe2}
//     `)
// }

// mostrarHeroes(...heroes);

// let heroes2 = ["Superman", "Batman", "Spiderman", "Flash", "Aquaman"];

// let superHeroes = ["Wonderwoman", "Cyborg", ...heroes];

// Rest
function peliculas (pelicula1, pelicula2, ...resto){
    console.log(pelicula1, pelicula2, ...resto);
}

peliculas("Spiderman", "Batman", "Superman", "Flash", "Aquaman")