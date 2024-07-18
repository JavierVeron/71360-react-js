import { createContext } from "react"

const ThemeContext = createContext(false)

const ContextoConsumer = () => {
    return <ThemeContext.Consumer>
        {(isDarkMode) => (
            <div className={`container my-5 ${isDarkMode ? "text-white bg-black" : "text-dark"}`}>
                <div className="row">
                    <div className="col">
                        <h1>Es Modo Oscuro? {isDarkMode ? "Sí" : "No"}</h1>
                    </div>
                </div>
            </div>
        )}
    </ThemeContext.Consumer>
}

export default ContextoConsumer