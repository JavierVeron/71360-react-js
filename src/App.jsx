import { BrowserRouter, Routes, Route } from "react-router-dom"
import Productos from "./Clase11/Productos"
import Promociones from "./Clase9/Promociones"
import Logo from "./Clase9/Logo"
import NavBar from "./Clase9/NavBar"
import Error404 from "./Clase9/Error404"
import CartContextProvider from "./context/CartContext"

function App() {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <Logo />
          <NavBar />
          <Routes>
            <Route path={"/"} element={<Productos />} />
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
