import { useEffect, useState } from "react";

const Fetch = () => {
    //let productos = [];
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/category/jewelery")
        .then(response => response.json())
        .then(data => {
            //productos = data;
            setProductos(data);
        })
    }, [])

    //console.log(productos);

    return (
        <div className="container my-5">
            <div className="row">
                {productos.map(item => (
                    <div key={item.id}  className="col-md-3 mb-3">
                        <div className="card border-0">
                            <img src={item.image} className="card-img-top" alt={item.title} />
                            <div className="card-body text-center">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">${item.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Fetch