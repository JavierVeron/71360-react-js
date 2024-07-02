const MetodoMap = () => {
    const productos = [
        {id:1, nombre:"Coca Cola", precio:1800},
        {id:2, nombre:"Pepsi", precio:1700},
        {id:3, nombre:"Manaos", precio:1500},
    ]

    //console.log(productos);
    const productosIVA = productos.map(item => ({nombreProducto:item.nombre.toUpperCase(), precioProducto:item.precio * 1.21}));
    const productosIVA2 = productos.map(item => ({...item, categoria:"bebidas"}));
    //console.log(productosIVA);
    //console.log(productosIVA2);
    const nf = new Intl.NumberFormat("es-AR");

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Método Map</h1>
                    <ul>
                        {productos.map(produ => (
                            <li key={produ.id}>{produ.nombre} <b>${produ.precio}</b></li>
                        ))}
                    </ul>
                    <ul>
                        {productos.map(produ => (
                            <li key={produ.id}>{produ.nombre + " $" + nf.format(produ.precio)}</li>
                        ))}
                    </ul>
                    <ul>
                        {productos.forEach(produ => {
                            console.log(produ);
                            <li key={produ.id}>{produ.nombre + " $" + nf.format(produ.precio)}</li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MetodoMap