const CompChildren = ({texto, children}) => {
    return (
        <>
            <h1 className="text-danger">{texto}</h1>
            {children}
        </>
    )
}

export default CompChildren