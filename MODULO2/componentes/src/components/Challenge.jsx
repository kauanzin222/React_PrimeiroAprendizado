import { useState } from "react"

const Challenge = () => {
    const x = 1
    const y = 4

    const [resultado, setResultado] = useState(0)

    const handleSomar = (x, y) => {
        setResultado(x + y)
    }

    return (
        <div>
            <br />
            <p>Valor de x = {x} <br /> Valor de y = {y}</p>
            <br />
            <button onClick={() => handleSomar(x, y)}>Somar</button>
            <br />
            <br />
            
            {resultado != 0 && <h2>O resultado é: {resultado}</h2>}
        </div>
    )
}

export default Challenge