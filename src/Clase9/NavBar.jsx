import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <NavLink to={"/"} activeclassname="text-danger" className="nav-link text-black">Productos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"/promociones"} activeclassname="text-danger" className="nav-link text-black">Promociones</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"/category/buckets"} activeclassname="text-danger" className="nav-link text-black">Buckets</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"/category/sandwiches"} activeclassname="text-danger" className="nav-link text-black">Sandwiches</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"/category/postres"} activeclassname="text-danger" className="nav-link text-black">Postres</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar