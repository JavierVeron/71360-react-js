import { useCount } from "./UseCount";

const Contador = () => {
    const { contador, incrementar, decrementar, reiniciar } = useCount(1, 6, 10);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <h1>Custom Hooks</h1>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary" onClick={decrementar}>-</button>
                        <button type="button" className="btn btn-primary">{contador}</button>
                        <button type="button" className="btn btn-primary" onClick={incrementar}>+</button>
                        <button type="button" className="btn btn-secondary" onClick={reiniciar}>Reiniciar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contador