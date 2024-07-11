import { Link } from "react-router-dom"

const Logo = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col text-center">
                    <Link to={"/"}>
                        <img src="https://www.kfc.com.ar/images/logo.png" alt="KFC Argentina" width={80} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Logo