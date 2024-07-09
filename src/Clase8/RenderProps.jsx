import { useState } from "react"

const tareas = [
    {id:1, titulo:"Hacer la cama", completado:true},
    {id:2, titulo:"Hacer el desayuno", completado:true},
    {id:3, titulo:"Hacer el almuerzo", completado:true},
    {id:4, titulo:"Hacer la merienda", completado:true},
    {id:5, titulo:"Hacer la cena", completado:false},
]

// RenderProp
const TasksList = ({tasks}) => {
    return (
        <ul className="list-group">
            {tasks.map(item => (
                <li key={item.id} className="list-group-item"><i>{item.titulo}</i></li>
            ))}
        </ul>
    )
}

function Filter ({children}) {
    const [filterState, setFilterState] = useState("todos");

    const handleFilterState = (event) => {
        setFilterState(event.target.value);
    }

    return children(filterState, handleFilterState)
}

const RenderProps = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-4">
                    <Filter>
                        {(filterState, handleFilterState) => (
                            <div>
                                <select className="form-select" value={filterState} onChange={handleFilterState}>
                                    <option value="todos">Todos</option>
                                    <option value="completados">Completados</option>
                                    <option value="nocompletados">No Completados</option>
                                </select>
                                {/* <TasksList tasks={(filterState == "todos") ? tareas : (filterState == "completados") ? tareas.completado : !tareas.completado} /> */}
                                <TasksList tasks={(filterState == "todos") ? tareas : tareas.filter(item => filterState == "completados" ? item.completado : !item.completado)} />
                            </div>
                        )}
                    </Filter>
                </div>
            </div>
        </div>
    )
}

export default RenderProps