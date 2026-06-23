const TemplateExpressions = () => {
    const name = "Kauã"
    const data = {
        idade: 20,
        cargo: "Estagiário FullStack"
    }

    return (
        <div>
            <h2>Olá, {name}, tudo bem? 😊</h2>
            <p>Você atua como {data.cargo}</p>
            <p>Você tem {data.idade} anos</p>
        </div>
    )
}

export default TemplateExpressions