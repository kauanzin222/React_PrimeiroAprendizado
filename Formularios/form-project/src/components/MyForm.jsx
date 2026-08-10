import React, { useState } from 'react'
import styles from './MyForm.module.css'

const MyForm = ({user}) => {
  // 3- Gerenciamento de Dados
  const [name, setName] = useState(user.name ? user.name : '')
  const [email, setEmail] = useState(user.email ? user.email : '')

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Enviando o form')
    console.log(name, email)

    // 7-Limpar formulário
    setName('')
    setEmail('')
  }

  return (
    <div className='container'>
      {/* 6- Controlled Input */}
      {/* 5- Envio do Form */}
      <form onSubmit={handleSubmit}>
        <h2>Formulário Inicial</h2>
        <hr />
        <div className={styles.sectionForm}>
          <label htmlFor="name">Nome: </label>
          <input type="text" name='name' placeholder='Digite o seu nome' className={styles.inputForm} onChange={handleName} value={name}/>
        </div>

        {/* 2- Label envolvendo Input */}
        <div className={styles.sectionForm}>
          <label>
            <span>E-mail</span>
            {/* 4- Simplificação de Manipulação de State */}
            <input type="email" name='email' placeholder='Digite o seu e-mail' className={styles.inputForm} onChange={(e) => setEmail(e.target.value)} value={email}/>
          </label>
        </div>


        <input type="submit" value='Enviar' className={styles.btnEnviar} />
      </form>
    </div>
  )
}

export default MyForm
