import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const Productos = () => {
    const {catalogo, carrito, agregarProducto, totalProductos, vaciarCarrito} = useContext(CartContext);

    return (
        <div className="container">
            <div className="row my-5">
                {
                    catalogo.map(item => (
                        <div key={item.id} className="col-md-3">
                            <div className="card border-0">
                                <img src={item.imagen} className="card-img-top" alt={item.nombre} />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{item.nombre}</h5>
                                    <p className="card-text text-danger">${item.precio} ARS</p>
                                    <button className="btn btn-primary" onClick={() => {agregarProducto(item.id)}}>Agregar (+)</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="row my-5">
                <div className="col">
                    <h3>Productos Seleccionados: {totalProductos()} <button className="btn btn-danger" onClick={vaciarCarrito}>Eliminar (X)</button></h3>
                </div>
            </div>
            <div className="row my-5">
                <div className="col">
                    <table className="table">
                        <tbody>
                            {
                                carrito.map(item => (
                                    <tr key={item.id}>
                                        <td className="align-middle"><img src={item.imagen} alt={item.nombre} width={32} /></td>
                                        <td className="align-middle">{item.nombre}</td>
                                        <td className="align-middle text-end">${item.precio}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Productos