import { useEffect, useState } from "react"

/* const Boton = () => {
    const [visible, setVisible] = useState(true);

    const quitarComponente = () => {
        setVisible(false);
    }

    return (
        <>
            <button className="btn btn-primary" onClick={quitarComponente}>Quitar Componente</button>
            {visible ? <Texto /> : ""}
        </>
    )
} */

/* const Texto = () => {
    const redimensionar = () => {
        console.log("Hiciste un resize en el Navegador!");
    }

    window.addEventListener("resize", redimensionar);

    useEffect(() => {
        return () => {
            window.removeEventListener("resize", redimensionar); // Remover el Evento con el clean-up de mi Efecto (desmontaje)
        }
    })

    return (
        <h3>Hola Coders!</h3>
    )
} */



const Eventos = () => {
    /* const [saludo, setSaludo] = useState("")

    const saludar = () => {
        setSaludo("Hola Coders! Estamos realizando el Curso de React!")
    } */

    /* const capturarEvento = (event) => {
        console.log(event.nativeEvent);
    } */
   const [texto, setTexto] = useState("");

    const capturarTecla = (event) => {
        let letraIngresada = event.nativeEvent.data;
        const vocales = ["a", "e", "i", "o", "u"];

        if (!vocales.some(item => item == letraIngresada.toLowerCase())) {
            setTexto(texto + letraIngresada);
        }
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <h1>Eventos</h1>
                    {/* <button className="btn btn-primary" onClick={saludar}>Hacer Click</button>
                    <p className="text-success">{saludo}</p> */}
                    {/* <Boton /> */}
                    {/* <button className="btn btn-primary" onClick={(e) => {capturarEvento(e)}}>Capturar Evento!</button> */}
                    <p><input type="text" className="form-control" onChange={(e) => {capturarTecla(e)}} value={texto} /></p>
                    <p className="text-danger">{texto}</p>
                </div>
            </div>
        </div>
    )
}

export default Eventos