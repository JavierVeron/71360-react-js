const EjemploPromesas = () => {
    const productos = [
        {id:1, name:"Mochila porta notebook Bagcherry Urbana 430000 color negro diseño lisa 25L", description:"Capacidad de la mochila: 25 L", price:20691, stock:10},
        {id:2, name:"Mochila Ona Saez Portanotebook Surat Color Negro Diseño De La Tela Lisa", description:"Capacidad de la mochila: 14 L", price:32624, stock:8},
        {id:3, name:"Mochila Wilson 65.11110BL Porta Notebook Impermeable con Puerto USB y Correa de Pecho Negra", description:"Capacidad de la mochila: 40 L", price:49919, stock:9}
    ]
    
    const promesa = new Promise((res) => {
        setTimeout(() => {
            res(productos)
        }, 3000)
    })
    promesa.then(result => {
        console.log(result); // El console.log debería mostrarse al cabo de los 3 segundos...
    })

    return (
        <h1>Ejemplo de Promesas</h1>
    )

}

export default EjemploPromesas