const productos = [
    {
    nombre: "Hamburguesas simple",
    costo: 20,
    codigo: "h100"
    }, 
    {
        nombre: "Hamburguesas doble",
        costo: 30,
        codigo: "h200"
    },

    {
        nombre: "Papas fritas",
        costo: 8,
        codigo: "h300"
    },
    {
        nombre: "Refresco personal",
        costo: 6,
        codigo: "h200"

    }
    
]

const mostrarMenu = () => {
    console.log(`CODIGO - NOMBRE PRODUCTO - COSTO`)
    //productos.forEach(productos => console.log (`${productos.codigo} - ${productos.nombre} - $${productos.costo}`))

    for(let producto of productos) {
        console.log(`${producto.codigo} - ${producto.nombre} - $${producto.costo}`)
    }
}
    
    
