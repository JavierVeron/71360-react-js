const CompPresentacion = ({titulo1, titulo2}) => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col text-center">
                    <h1 className="text-warning bg-black p-3 text-uppercase fst-italic">{titulo1}</h1>
                    <div className="alert alert-secondary" role="alert">{titulo2}</div>
                </div>
            </div>
        </div>
    )
}

export default CompPresentacion