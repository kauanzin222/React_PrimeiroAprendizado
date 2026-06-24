import React, { useState } from 'react'

function ListaRender() {
    const [list] = useState(["Kauã", "Lívia", "Eduardo"])

    const [usuarios, setUsuarios] = useState([
        { id: 1, nome: "Kauã", idade: 20 },
        { id: 2, nome: "Lívia", idade: 15 },
        { id: 3, nome: "Lucas", idade: 30 }
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4)

        setUsuarios((prevUsuarios) => {
            return prevUsuarios.filter((usuario) => randomNumber !== usuario.id)
        })
    }

    return (
        <section className='container'>
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

            <button onClick={deleteRandom}>Deletar aleatoriamente</button>
        </section>
    )
}

export default ListaRender
