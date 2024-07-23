import { useEffect, useState } from "react"

const MensajeError = ({texto}) => {
    return (
        <h1 className="text-danger">{texto}</h1>
    )
}

const MensajeOk = ({texto}) => {
    return (
        <h1 className="text-success">{texto}</h1>
    )
}

const RenderingCondicional = () => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setVisible(false);
        }, 5000)
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    {/* {visible ? <h2 className="text-danger">Cargando...</h2> : <h1 className="text-success">Contenido Cargado!</h1>} */}
                    {visible ? <MensajeError texto={"Cargando..."} /> : <MensajeOk texto={"Contenido Cargado!"} />}
                </div>
            </div>
        </div>
    )
}

export default RenderingCondicional