import { useEffect, useState } from "react"
import arrayProductos from "./json/productos.json"
import { useParams } from "react-router-dom";

const Productos = () => {
    const [items, setItems] = useState(arrayProductos);
    const {idCategoria, esPremium} = useParams();
    
    useEffect(() => {
        if (idCategoria && esPremium) {
            setItems(arrayProductos.filter(item => (item.categoria == idCategoria) && (item.premium == esPremium)))
        } else if (idCategoria && !esPremium) {
            setItems(arrayProductos.filter(item => (item.categoria == idCategoria)))
        } else if (!idCategoria && esPremium) {
            setItems(arrayProductos.filter(item => (item.premium == esPremium)))
        } else {
            setItems(arrayProductos)
        }
    }, [idCategoria, esPremium])

    return (
        <div className="container my-5">
            <div className="row">
                {items.map(item => (
                    <div key={item.id} className="col-md-4 mb-4">
                        <div className="card">
                            <img src={item.imagen} className="card-img-top" alt={item.nombre} />
                            <div className="card-body text-center">
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