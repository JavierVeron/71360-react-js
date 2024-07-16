import { BrowserRouter, Routes, Route } from "react-router-dom"
import Productos from "./Clase9/Productos"
import Promociones from "./Clase9/Promociones"
import Logo from "./Clase9/Logo"
import NavBar from "./Clase9/NavBar"
import Error404 from "./Clase9/Error404"
import Abstraccion1 from "./Clase10/Abstraccion1"
import Abstraccion2 from "./Clase10/Abstraccion2"

function App() {
  return (
    <>
      <BrowserRouter>
        <Logo />
        <NavBar />
        <Routes>
          <Route path={"/"} element={<Abstraccion2 />} />
          <Route path={"/productos"} element={<Productos />} />
          <Route path={"/promociones"} element={<Promociones />} />
          <Route path={"/category/:idCategoria"} element={<Productos />} />
          <Route path={"/premium/:esPremium"} element={<Productos />} />
          <Route path={"/category/:idCategoria/premium/:esPremium"} element={<Productos />} />
          <Route path={"*"} element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
