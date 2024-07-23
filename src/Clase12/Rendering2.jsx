// Técnica #1 para controlar los estilos
const Ejemplo1 = ({condicion}) => {
    return (
        <>
            <h2 style={{color:condicion ? "yellow" : "red", backgroundColor:"black", padding:"20px"}}>Coderhouse</h2>
        </>
    )
}

// Técnica #2 para controlar las clases
const Ejemplo2 = ({condicion}) => {
    return (
        <>
            <h2 className={condicion ? "text-warning" : "text-danger"}>Coderhouse</h2>
        </>
    )
}

// Técnica #3 para controlar las multi clases
const Ejemplo3 = ({condicion, clase2}) => {
    return (
        <>
            <h2 className={`${condicion ? "text-warning" : "text-danger"} ${clase2 || ""}`}>Coderhouse</h2>
        </>
    )
}

// Técnica #4 para controlar las multi clases
const Ejemplo4 = ({condicion, clase2}) => {
    return (
        <>
            <h2 className={`${condicion ? "text-warning" : "text-danger"} ${clase2 && "bg-black"} p-3`}>Coderhouse</h2>
        </>
    )
}

// Técnica #5 utilizamos el operador spread para desparrar atributos
const Ejemplo5 = ({condicion}) => {
    const configuracion = condicion ? {
        style:{color:"yellow", backgroundColor:"black", padding:"10px"},
        align:"center",
        title:"Título de la Página"
    } : {};

    return (
        <>
            <h2 {...configuracion}>Coderhouse</h2>
        </>
    )
}

const Rendering2 = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Ejemplo5 condicion={true} clase2={true} />
                </div>
            </div>
        </div>
    )
}

export default Rendering2