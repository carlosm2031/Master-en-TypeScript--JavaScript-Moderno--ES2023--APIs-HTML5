// Strings clasicos
let nombre = "Carlos";
let apellidos = "Gonzalez";
let profesion = "Programador";
let nya = nombre + " " + apellidos + "\n" + profesion;

// Template Strings
let plantilla = `
${nombre} ${apellidos} 
${profesion}
`;

console.log(plantilla);

function ficha(nombre, apellidos, profesion) {
  let fichaTecnica = `
    <div class="ficha">
        <h2>${nombre} ${apellidos}</h2>
        <p>${profesion}</p>
        <p>Forma parte del equipo de Carlos </p>
    </div>
`;
  return fichaTecnica;
}

let cajaFicha = document.createElement("section");

cajaFicha.innerHTML = ficha("Carlos", "Gonzalez", "Programador");
cajaFicha.innerHTML += ficha("Pedro", "Gonzalez", "Programador");
cajaFicha.innerHTML += ficha("Juan", "Gonzalez", "Programador");

document.body.append(cajaFicha);
