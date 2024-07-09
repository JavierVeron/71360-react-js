import Contador from "./Contador"

const Caja = (datos) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>{datos.titulo}</h1>
                    <h3>{datos.academia}</h3>
                    <div className="alert alert-primary" role="alert">
                        {datos.children}
                    </div>
                </div>
            </div>
        </div>
    )
}

const Children = () => {
    return (
        <Caja academia="Coderhouse" titulo="Curso de React JS..." children="pepe">
            <h3>Estamos viendo el Concepto de Children</h3>
            <h4>Estamos viendo Bootstrap</h4>
            <h5>Estamos viendo Bulma CSS</h5>
            <h6>Estamos viendo Tailwind CSS</h6>
            <button className="btn btn-primary">Hola Mundo!</button>
            <Contador />
        </Caja>
    )
}

export default Children