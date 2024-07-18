import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const catalogo = [
        {id:1, nombre:"Remera Boxy Zac Crudo", imagen:"https://vcp.com.ar/cdn/shop/files/Beige3_831d693f-ce1f-4177-b123-4e253bdf38a1.jpg?v=1717172525&width=400", precio:22990},
        {id:2, nombre:"Remera Boxy Zac Blanca", imagen:"https://vcp.com.ar/cdn/shop/files/Blanca2_5bfb12ee-e18e-4af1-ad39-d858846dc338.jpg?v=1717172592&width=400", precio:21990},
        {id:3, nombre:"Remera Boxy Zac Militar", imagen:"https://vcp.com.ar/cdn/shop/files/Militar2_0f53f08c-a817-44d6-81ad-367b62416a0e.jpg?v=1717172620&width=400", precio:23990},
        {id:4, nombre:"Remera Boxy Zac Negro", imagen:"https://vcp.com.ar/cdn/shop/files/Negra3_f983a612-ab95-48fe-8424-7c70158c4801.jpg?v=1717172658&width=400", precio:21990}
    ]
    const [carrito, setCarrito] = useState([]);

    const agregarProducto = (id) => {
        const producto = catalogo.find(item => item.id == id);
        setCarrito([...carrito, producto]);
    }

    const totalProductos = () => {
        return carrito.length;
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    return <CartContext.Provider value={{catalogo, carrito, agregarProducto, totalProductos, vaciarCarrito}}>
        {children}
    </CartContext.Provider>
}

export default CartContextProvider