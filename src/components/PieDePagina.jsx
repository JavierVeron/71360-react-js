import Coderhouse from "./Coderhouse"
import "../assets/css/estilos.css"

const TextoPiePagina = () => {
    return (
        <>
            <p className="colorPieDePagina mayusculas"><Coderhouse /> 2024 - Worldwide</p>
        </>
    )
}

const PieDePagina = () => {
    return (
        <TextoPiePagina />
    )
}

export default PieDePagina