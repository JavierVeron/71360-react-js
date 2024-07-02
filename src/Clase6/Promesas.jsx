import { useState } from "react";

const Promesas = ({valor}) => {
    const [mensaje, setMensaje] = useState("");

    const promesa = new Promise((resolve, reject) => {
        if (valor > 50000) {
            reject("Imposible! NO HAY PLATA!");
        } else {
            resolve("OK! Lo puedo comprar!");
        }
    })
    //console.log(promesa);
    promesa.then(data => {
        console.log(data);
        setMensaje(data);
    }).catch(error => {
        console.log("Error: " + error);
        setMensaje(error);
    }).then(data => {
        console.log("Estoy ejecutando otra función!");
    }).then(data => {
        console.log("Estoy ejecuando otra función! #2");
    }).finally(data => {
        console.log("Fin del proceso!");
    })


    return (
        <h1>{mensaje}</h1>
    )
}

export default Promesas