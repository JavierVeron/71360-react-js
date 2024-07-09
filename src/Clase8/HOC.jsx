import { useState } from "react"

// Esto es un HOC (Componente de Orden Superior)
const withFormValidation = (WrappedComponent) => {
    const WithFormValidation = (props) => {
        const [errors, setErrors] = useState({})

        function validateForm() {
            const newErrors = {}

            if (!props.formData.nombre) {
                newErrors.nombre = "Complete el Campo Nombre!"
            }

            if (!props.formData.email) {
                newErrors.email = "Complete el Campo Email!"
            }

            setErrors(newErrors)
        }
        
        return (
            <WrappedComponent {...props} errors={errors} validateForm={validateForm} />
        )
    }

    return WithFormValidation
}


// Esto es un Componente
const Form = ({formData, errors, validateForm, onChange}) => {
    const handleSubmit = (event) => {
        event.preventDefault(); //Detener el envío del formulario
        validateForm && validateForm();
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input type="text" name="nombre" className="form-control" value={formData.nombre} onChange={(e) => {onChange(e)}} />
                <div className="form-text text-danger">{errors && errors.nombre && errors.nombre}</div>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="text" name="email" className="form-control" value={formData.email} onChange={(e) => {onChange(e)}} />
                <div className="form-text text-danger">{errors && errors.email && errors.email}</div>
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    )
}

// Llamar al HOC y pasar un Componente como parámetro
const WithFormValidation = withFormValidation(Form);

const HOC = () => {
    const [formData, setFormData] = useState({nombre:"", email:""})

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]:event.target.value
        })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <WithFormValidation formData={formData} onChange={handleChange} />
                </div>
            </div>
        </div>
    )
}

export default HOC