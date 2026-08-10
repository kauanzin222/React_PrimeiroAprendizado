import React, { useState } from 'react'
import styles from './MyForm.module.css'

const MyForm = ({ user }) => {
  // 3- Gerenciamento de Dados
  const [name, setName] = useState(user.name ? user.name : '')
  const [email, setEmail] = useState(user.email ? user.email : '')
  const [bio, setBio] = useState(user.bio ? user.bio : '')
  const [role, setRole] = useState(user.role ? user.role : '')

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Enviando o form')
    console.log(name, email, bio, role)

    // 7- Limpar formulário
    setName('')
    setEmail('')
    setBio('')
    setRole('')
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
          <input type="text" name='name' placeholder='Digite o seu nome' className={styles.inputForm} onChange={handleName} value={name} />
        </div>

        {/* 2- Label envolvendo Input */}
        <div className={styles.sectionForm}>
          <label>
            <span>E-mail:</span>
            {/* 4- Simplificação de Manipulação de State */}
            <input type="email" name='email' placeholder='Digite o seu e-mail' className={styles.inputForm} onChange={(e) => setEmail(e.target.value)} value={email} />
          </label>
        </div>

        <div className={styles.sectionForm}>
          <label>
            <span>Bio:</span>
            <textarea name='bio' placeholder='Conte um pouco sobre você!' className={styles.inputForm} value={bio} onChange={(e) => setBio(e.target.value)}></textarea>
          </label>
        </div>

        {/* 9- Select */}
        <div className={styles.sectionForm}>
          <label>
            <span>Função no Sistema:</span>
            <select name='role' className={styles.selectForm} onChange={(e) => setRole(e.target.value)} value={role}>
              <option value="user">Usuário</option>
              <option value="editor">Editor</option>
              <option value="admin">Administrador</option>
            </select>
          </label>
        </div>

        <input type="submit" value='Enviar' className={styles.btnEnviar} />
      </form>
    </div>
  )
}

export default MyForm
