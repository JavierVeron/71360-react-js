import { useState } from "react"

const EjemploMap = () => {
    const [items, setItems] = useState([]);

    const productos = [
        {id:1, name:"Mochila porta notebook Bagcherry Urbana 430000 color negro diseño lisa 25L", description:"Capacidad de la mochila: 25 L", price:20691, stock:10, image:"https://http2.mlstatic.com/D_NQ_NP_935972-MLA72568810182_112023-O.webp"},
        {id:2, name:"Mochila Ona Saez Portanotebook Surat Color Negro Diseño De La Tela Lisa", description:"Capacidad de la mochila: 14 L", price:32624, stock:8, image:"https://http2.mlstatic.com/D_NQ_NP_882901-MLU75720600486_042024-O.webp"},
        {id:3, name:"Mochila Wilson 65.11110BL Porta Notebook Impermeable con Puerto USB y Correa de Pecho Negra", description:"Capacidad de la mochila: 40 L", price:49919, stock:9, image:"https://http2.mlstatic.com/D_NQ_NP_739143-MLU76224755516_052024-O.webp"}
    ]
    
    const promesa = new Promise((res) => {
        setTimeout(() => {
            res(productos)
        }, 5000)
    })
    promesa.then(result => {
        //console.log(result); // El console.log debería mostrarse al cabo de los 3 segundos...
        setItems(result);
    })
    
    
    return (
        <div className="container">
            <div className="row">
                <h1>Ejemplo Map con Promesas</h1>
                {items.map(item => (
                    <div key={item.id} className="col">
                        <div className="card border-0">
                            <img src={item.image} className="card-img-top" alt={item.name} />
                            <div className="card-body text-center">
                            <p className="card-text"><b>{item.name}</b></p>
                            <p className="card-text">${item.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EjemploMap