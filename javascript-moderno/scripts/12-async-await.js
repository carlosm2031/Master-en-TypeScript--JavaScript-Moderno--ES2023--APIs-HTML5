let productos = [
    {
        nombre: 'Tablet',
        precio: 200,
        marca: 'Samsung'
    },
    {
        nombre: 'Televisor',
        precio: 300,
        marca: 'LG'
    },
    {
        nombre: 'Audifonos',
        precio: 50,
        marca: 'Sony'
    }
];

function conseguirProductos(){
    return new Promise((resolve, reject)=>{
        console.log("Cargando....");
        setTimeout(()=>{
            resolve(productos);
        reject('Error al cargar los productos')
        }, 3500)
        
    });
}

async function getMisProductos (){
    let mis_productos = await conseguirProductos();
    console.log(mis_productos);
}

getMisProductos();