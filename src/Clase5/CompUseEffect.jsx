import { useEffect, useState } from "react"
import CompUseEffect2 from "./CompUseEffect2";

const CompUseEffect = () => {
    const [contador, setContador] = useState(0);
    const [contador2, setContador2] = useState(0);
    const [visible, setVisible] = useState(true);

    const Incrementar = () => {
        setContador(contador + 1);
    }

    const Incrementar2 = () => {
        setContador2(contador2 + 1);
        setVisible(false);
    }

    /* useEffect(() => {
        console.log("#2 - Modificación del Componente");
    }, []); // Opción #1 - Sin array de dependencias de estados (se ejecuta 1 sola vez) */

    useEffect(() => {
        console.log("#2 - Modificación del Estado Contador #1");
    }, [contador]); // Opción #2 - Se ejecutará cada vez que se produce un cambio en el estado

    useEffect(() => {
        console.log("#2 - Modificación del Estado Contador #2");
    }, [contador2]); // Opción #2 - Se ejecutará cada vez que se produce un cambio en el estado

    /* useEffect(() => {
        console.log("#2 - Modificación del Componente");
    }); // Opción #3 - Se ejecutará siempre con cualquiera cambio de estado */

    console.log("#1 - Montaje del Componente");

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>UseEffect</h1>
                    <p>Contador #1: {contador}</p>
                    <p><button className="btn btn-primary" onClick={Incrementar}>Incrementar Contador #1 (+)</button></p>
                    <p>Contador #2: {contador2}</p>
                    <p><button className="btn btn-primary" onClick={Incrementar2}>Incrementar Contador #2 (+)</button></p>
                    {visible ? <CompUseEffect2 /> : ""}
                </div>
            </div>
        </div>
    )
}

export default CompUseEffect