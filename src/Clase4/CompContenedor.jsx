import { useState } from "react"

const Titulo = ({texto1, texto2}) => {
    return (
        <p>{texto1}: <b>{texto2}</b></p>
    )
}

const Boton = ({funcion, texto}) => {
    return (
        <button className="btn btn-primary" onClick={funcion}>{texto}</button>
    )
}

const CompContenedor = () => {
    const [pais, setPais] = useState("Uruguay");
    const [mensaje, setMensaje] = useState("");

    const mostrarMensaje = () => {
        setMensaje("Buena semana para todos!");
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col text-center">
                    <Boton funcion={mostrarMensaje} texto="Haz click aquí!" />
                    <Titulo texto1={"País"} texto2={pais} />
                    <h2>{mensaje}</h2>
                </div>
            </div>
        </div>
    )
}

export default CompContenedor