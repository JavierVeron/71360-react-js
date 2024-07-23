import { BrowserRouter, Routes, Route } from "react-router-dom"
import Productos from "./Clase12/Productos"
import Promociones from "./Clase9/Promociones"
import Logo from "./Clase9/Logo"
import NavBar from "./Clase9/NavBar"
import Error404 from "./Clase9/Error404"
import CartContextProvider from "./context/CartContext"
import Rendering2 from "./Clase12/Rendering2"
import Memo from "./Clase12/Memo"

function App() {
  const producto = {id:1, nombre:"Bucket 10 piezas", imagen:"https://www.kfc.com.ar/images/menues/1620751786Bucket%208%20Piezas.jpg", precio:16000, fechaModificacion:"23-07-2024"}

  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <Logo />
          <NavBar />
          <Routes>
            <Route path={"/"} element={<Memo item={producto} />} />
            <Route path={"/productos"} element={<Productos />} />
            <Route path={"/promociones"} element={<Promociones />} />
            <Route path={"/category/:idCategoria"} element={<Productos />} />
            <Route path={"/premium/:esPremium"} element={<Productos />} />
            <Route path={"/category/:idCategoria/premium/:esPremium"} element={<Productos />} />
            <Route path={"*"} element={<Error404 />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  )
}

export default App
