const Ejemplo1 = ({condicion}) => {
    if (condicion) {
        return (
            <h1>La condición es verdadera!</h1>
        )
    }

    return (
        <h1>La condición es falsa!</h1>
    )
}

const Ejemplo2 = ({condicion}) => {
    return (
        <>
            {condicion && <h1>La condición es verdadera!</h1>}
            {!condicion && <h1>La condición es falsa!</h1>}
        </>
    )
}

const Ejemplo3 = ({condicion}) => {
    return (
        <h1>{condicion ? "La condición es verdadera!" : "La condición es falsa!"}</h1>
    )
}

const Rendering = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Técnicas de Rendring</h1>
                    <Ejemplo3 condicion={false} />
                </div>
            </div>
        </div>
    )
}

export default Rendering