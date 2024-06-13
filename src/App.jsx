import Encabezado from './components/Encabezado'
import PieDePagina from './components/PieDePagina'

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col bg-light text-info">
            <Encabezado />
            <h3>Curso de React JS</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ullam nam sequi modi labore minus explicabo nemo. Quae autem, et quos, reprehenderit odio ipsum ipsam, nisi velit blanditiis alias est.</p>
            <PieDePagina />  
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
