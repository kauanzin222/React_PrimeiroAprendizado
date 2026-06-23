const Eventos = () => {

    const handleMeuEvento = (e) => {
        console.log("Click no button")

        console.log(e)
    }

    const renderSomething = (x) => {
        if (x) {
            return <h2>Renderizando isso!</h2>
        }
        else {
            return <h2>Também posso renderizar isso!</h2>
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMeuEvento}>Clique aqui!</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Eventos