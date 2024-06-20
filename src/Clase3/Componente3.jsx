import imagen2 from "../assets/images/lionel-messi.webp";

const Componente3 = () => {
    let nombre = "Lionel Messi";
    let imagen = "lionel-messi.png";
    let estiloCelesteBlanco = {color:"white", backgroundColor:"lightblue", padding:20};

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="colorCoder">JSX</h1>
                    <p style={estiloCelesteBlanco} >{nombre}</p>
                    <p style={{color:"red", fontSize:24, textTransform:"uppercase"}} >Clase de React JS</p>
                    <p><img src={"images/leomessi.jpg"} alt={nombre} /></p>
                    <p><img src={"images/" + imagen} alt={nombre} /></p>
                    <p oncli><img src={imagen2} alt={nombre} width={480} /></p>
                </div>
            </div>
        </div>
    )
}

export default Componente3