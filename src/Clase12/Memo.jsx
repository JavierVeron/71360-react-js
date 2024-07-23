import React from "react"

const Memo = React.memo(({item}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <img src={item.imagen} className="card-img-top" alt={item.nombre} />
                        <div className="card-body">
                            <h5 className="card-title">{item.nombre}</h5>
                            <p className="card-text">${item.precio}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}, (oldProp, newProp) => (oldProp.item.fechaModificacion == newProp.item.fechaModificacion))

export default Memo