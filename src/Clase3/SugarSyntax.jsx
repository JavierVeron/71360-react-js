const SugarSyntax = () => {
    // Javascript tradicional
    /* const condicion = true;
    let resultado = null;
    
    if (condicion) {
        resultado = "Correcto";
    } else {
        resultado = "Incorrecto";
    }

    console.log("Resultado: " + resultado); */

    // Utilizando Sugar Syntax
    /* const condicion = true;
    console.log("Resultado: " + (condicion ? "Correcto" : "Incorrecto")); */

    // Variables por copia y referencia
    // Variables primitivas (integer, string, boolean)
    /* let valor1 = 10;
    let valor2 = valor1; // Es una variable por copia
    valor1 = 20;
    console.log(valor1); //20
    console.log(valor2); //10 */

    // Objetos
    /* const bebida = {id:1, nombre:"Coca Cola", precio:1600};
    const bebida2 = bebida; // Es una variable por referencia
    bebida.precio = 1800;
    bebida2.nombre = "Pepsi";
    console.log(bebida);
    console.log(bebida2); */

    // Arrays
    /* let bebidas = ["coca", "pepsi", "seven up"];
    let bebidas2 = bebidas; // Es una variable por referencia
    bebidas.push("sprite");
    console.log(bebidas);
    console.log(bebidas2); */

    // Operador Spread (...)
    // Operador Spread en Objetos
    /* const bebida = {id:1, nombre:"Coca Cola", precio:1600};
    //const bebida2 = bebida;
    const bebida2 = {...bebida}; // Desparrama las propiedades del objeto bebida en bebida2 (crea un nuevo objeto)
    bebida.precio = 2000;
    bebida2.id = 2;
    bebida2.nombre = "Pepsi";
    console.log(bebida);
    console.log(bebida2);
    const bebida3 = {...bebida2, id:3, nombre:"Seven Up", categoria:"gaseosas"};
    console.log(bebida3); */
    
    // Operador Spread con Arrays
    /* const bebidas = ["coca", "pepsi", "seven up"];
    const bebidas2 = [...bebidas]; // Desparrama los elementos del array bebidas en bebidas2 (crea un nuevo array)
    bebidas.push("sprite");
    console.log(bebidas);
    console.log(bebidas2);
    const bebidas3 = ["fanta", ...bebidas2, "cunnington cola"];
    console.log(bebidas3); */

    
    



    return (
        <>
            <h1>Sugar Syntax</h1>
        </>
    )
}

export default SugarSyntax