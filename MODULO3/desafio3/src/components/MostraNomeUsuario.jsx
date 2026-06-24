import React from 'react'

const MostraNomeUsuario = (props) => {
  return (
    <section className='container'>
        <article>
            <h2>Nome do Usuário: {props.nome}</h2>
        </article>
    </section>
  )
}

export default MostraNomeUsuario
