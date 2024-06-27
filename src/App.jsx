/* import CompChildren from './Clase5/CompChildren' */
import CompUseEffect from './Clase5/CompUseEffect'
/* import CompUseRef from './Clase5/CompUseRef' */

const HolaMundo = () => {
  return (
    <h3 className='bg-dark text-warning p-3'>Hola Mundo!</h3>
  )
}

function App() {
  return (
    <div>
      {/* <CompChildren texto={"Coderhouse"}>
        <h3>Curso de React JS</h3>
        <p>Estamos viendo la propiedad Children en Componentes...</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid vitae molestias architecto sunt, veniam, quae cupiditate, ex omnis adipisci veritatis distinctio tenetur ipsum? Et ullam sequi labore quisquam, vero veniam.</p>
        <HolaMundo />
      </CompChildren> */}
      {/* <CompUseRef /> */}
      <CompUseEffect />
    </div>
  )
}

export default App
