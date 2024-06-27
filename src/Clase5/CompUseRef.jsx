import { useRef, useState } from "react"

const CompUseRef = () => {
    const [academia, setAcademia] = useState("Udemy");
    const divRef = useRef(null);

    const modificarTextos = () => {
        setAcademia("Coderhouse");
        divRef.current.innerHTML = "Curso de React JS";
        divRef.current.className = "text-dark bg-light p-5";
    }
    
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>useRef</h1>
                    <p>{academia}</p>
                    <p ref={divRef}>Curso de JavaScript</p>
                    <p><button className="btn btn-primary" onClick={modificarTextos}>Modificar Textos</button></p>
                </div>
            </div>
        </div>
    )
}

export default CompUseRef