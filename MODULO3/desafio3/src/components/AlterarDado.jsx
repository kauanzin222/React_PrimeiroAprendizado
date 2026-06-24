import { useState } from "react"

const AlterarDado = () => {
    const [dado, setDado] = useState(10)

    return (
        <section className="container">
            <article>
                <p>Valor: {dado}</p>
            </article>
            <article>
                <button onClick={() => {setDado(15)}}>Mudar variável</button>
            </article>
        </section>
    )
}

export default AlterarDado