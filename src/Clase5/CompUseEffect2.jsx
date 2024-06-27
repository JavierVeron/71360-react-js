import { useEffect } from "react"

const CompUseEffect2 = () => {
    useEffect(() => {
        return () => {
            // CleanUp o Limpieza
            console.log("#3 - Desmontaje del Componente");
        }
    })

    return (
        <h3>UseEffect #2</h3>
    )
}

export default CompUseEffect2