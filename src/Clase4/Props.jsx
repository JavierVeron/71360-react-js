// Ejemplo #1 => Recibo una prop como objeto
/* const Props = (prop) => {
    return (
        <>
            <h1 className="display-1">{prop.academia + " - " + prop.curso}</h1>
            <h3 className="display-3">{prop.curso}</h3>
        </>
    )
} */

const Logo = ({url, texto, ancho}) => {
    return (
        <img src={url} alt={texto} width={ancho} className="img-thumbnail" />
    )
}

// Ejemplo #2 => Recibo una prop y la desestructuro (desectructuring)
const Props = ({academia, logo, curso}) => {
    let ubicacion = "Buenos Aires, Argentina";

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col text-center">
                    <h1 className="display-1">{academia}</h1>
                    <h3 className="display-3">{curso + " (Carrera FrontEnd)"}</h3>
                    <p><Logo ancho={240} texto={curso} url={logo} /></p>
                    <p>{ubicacion}</p>
                </div>
            </div>
        </div>
    )
}

export default Props