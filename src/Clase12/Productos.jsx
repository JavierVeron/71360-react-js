import { useEffect, useState } from "react";
import arrayProductos from "../Clase9/json/productos.json";
import Loading from "./Loading"

const Productos = () => {
    const [visible, setVisible] = useState(true);
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setProductos(arrayProductos);
            setVisible(false);
        }, 4000)
    }, [])

    return (
        <div className="container">
            <div className="row">
                {visible ? <Loading /> : productos.map(item => (
                    <div className="col" key={item.id}>
                        <div className="card">
                            <img src={item.imagen} className="card-img-top" alt={item.nombre} />
                            <div className="card-body">
                                <h5 className="card-title">{item.nombre}</h5>
                                <p className="card-text">${item.precio}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

}

export default Productos