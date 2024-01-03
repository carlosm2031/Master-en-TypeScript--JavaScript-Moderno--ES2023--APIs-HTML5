let dataObtenida = [];

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
        dataObtenida = data;

        const containerDiv = document.getElementById("caja");

        for (const caja of dataObtenida) {
            // Desestructurar el objeto caja para acceder a propiedades específicas
            const { title } = caja;

            // Crear un nuevo elemento div
            const nuevoDiv = document.createElement("div");

            // Agregar la clase al nuevo div
            nuevoDiv.className = "nuevo-div";

            // Utilizar template literals para la creación de HTML
            nuevoDiv.innerHTML = `<h2>${title}</h2>`;

            // Agregar el nuevo div al div con la clase "container"
            containerDiv.appendChild(nuevoDiv);
        }
    })
    .catch(error => {
        console.log(error);
    });
