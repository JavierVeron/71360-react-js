import { createContext, useContext, useState } from "react"
// Sin Contexto (usando props)
/* const ComponenteA1 = ({isDarkMode}) => {
    return (
        <ComponenteA2 isDarkMode={isDarkMode} />
    )
}

const ComponenteA2 = ({isDarkMode}) => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <p>Es Modo Oscuro? <b>{isDarkMode ? "Sí" : "No"}</b></p>
                </div>
            </div>
        </div>
    )
}

const Contexto = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    return (
        <ComponenteA1 isDarkMode={isDarkMode} />
    )
} */


// Con Contexto
const ThemeContext = createContext();

const ComponenteA1 = () => {
    return (
        <ComponenteA2 />
    )
}

const ComponenteA2 = () => {
    const {bebidas} = useContext(ThemeContext);
    
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    {/* <p>Es Modo Oscuro? <b>{isDarkMode ? "Sí" : "No"}</b></p> */}
                    <ul>
                        {bebidas.map(item => (
                            <li key={item.id}>{item.nombre} ${item.precio}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

const ComponenteA3 = () => {
    const {isDarkMode, saludar} = useContext(ThemeContext);
    
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    {<p>Es Modo Oscuro? <b>{isDarkMode ? "Sí" : "No"}</b></p>}
                    <button className="btn btn-primary" onClick={saludar}>Saludar!</button>
                </div>
            </div>
        </div>
    )
}

const Contexto = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const bebidas = [
        {id:1, nombre:"Coca Cola", precio:1800},
        {id:2, nombre:"Pepsi", precio:1700},
        {id:3, nombre:"Seven Up", precio:1600}
    ]
    const saludar = () => {
        alert("Sos un genio/a!");
    }

    return <>
        <ThemeContext.Provider value={{isDarkMode, bebidas, saludar}}>
            <ComponenteA1 />
            <ComponenteA3 />
        </ThemeContext.Provider>
    </>
}

export default Contexto