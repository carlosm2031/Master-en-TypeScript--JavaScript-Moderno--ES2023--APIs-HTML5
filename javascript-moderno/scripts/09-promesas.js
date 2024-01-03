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

function productoComprado(){
    return new Promise((resolve, reject)=>{
        console.log("Haciendo la compra...");
        setTimeout(()=>{
            resolve({
                nombre: 'Tablet',
                precio: 200,
                marca: 'Samsung'
            });
            reject('Error al hacer la compra');
        }, 1000);
    });
}

conseguirProductos()
.then(items =>{
    console.log ("Productos Disponibles: ", items)
    return productoComprado();
})
.then(compra =>{
    
    console.log(`
    **Producto Comprado**
    El cliente compro: ${compra.nombre}
    `);

    productos =productos.filter(producto => producto.nombre != compra.nombre)
    console.log(productos);
})
.catch((error)=>{console.log(error);})
.finally(()=>{console.log('Finally');});


