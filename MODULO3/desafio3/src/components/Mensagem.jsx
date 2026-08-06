import React from 'react'

const Mensagem = ( {msg, children}) => {
  return (
    <section className='container'>
      A mensagem é: {msg}
      {children}
    </section>
  )
}

export default Mensagem
