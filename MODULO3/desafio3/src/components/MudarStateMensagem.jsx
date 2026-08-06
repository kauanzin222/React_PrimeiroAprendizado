import React from 'react'

const MudarStateMensagem = ({ handleMensagem }) => {

    const mensagens = ['Oi', 'Olá', 'Oi, tudo bem?']

    return (
        <div>
            <button onClick={() => handleMensagem(mensagens[0])}>1</button>
            <button onClick={() => handleMensagem(mensagens[1])}>2</button>
            <button onClick={() => handleMensagem(mensagens[2])}>3</button>
        </div>
    )
}

export default MudarStateMensagem
