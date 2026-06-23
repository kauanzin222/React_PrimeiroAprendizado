import React, { useState } from 'react'

function ListaRender() {
    const [list] = useState(["Kauã", "Lívia", "Eduardo"])

    const [usuarios] = useState([
        { id: 1, nome: "Kauã", idade: 20 },
        { id: 20, nome: "Lívia", idade: 15 },
        { id: 300, nome: "Lucas", idade: 30 }
    ])

    return (
        <section>
            <article>
                <ul>
                    {list.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </article>
            
            <article>
                <ul>
                    {usuarios.map((usuario) => (
                        <li key={usuario.id}>{usuario.nome} - {usuario.idade}</li>
                    ))}
                </ul>
            </article>
        </section>
    )
}

export default ListaRender
