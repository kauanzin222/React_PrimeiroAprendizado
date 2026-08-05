import React from 'react'

const ExecuteFunction = ({ myFunction }) => {
    return (
        <div className='container'>
            <h2>Passando uma função como propriedade!</h2>
            <button onClick={myFunction}>Clique aqui para executar a função</button>
        </div>
    )
}

export default ExecuteFunction
