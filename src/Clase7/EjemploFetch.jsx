import { useEffect, useState } from "react";

const EjemploFetch = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch("https://api.mercadolibre.com/sites/MLA/search?q=celulares&limit=16")
        .then(response => response.json())
        .then(data => {
            setProductos(data.results);
        })
    }, [])

    return (
        <div className="container my-5">
            <div className="row">
                {productos.map(item => (
                    <div key={item.id}  className="col-md-3 mb-3">
                        <div className="card border-0">
                            <img src={item.thumbnail} className="card-img-top" alt={item.title} />
                            <div className="card-body text-center">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">${item.price}</p>
                                <a href={item.permalink} target="_blank" className="btn btn-warning">Ver Producto</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EjemploFetch