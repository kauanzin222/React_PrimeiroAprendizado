import React from 'react'

const UserDetails = ({ pessoas }) => {
    return (
        <div className='container'>
            <h2>Desafio 4</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Profissão</th>
                        <th>Pode tirar carteira de habilitação?</th>
                    </tr>
                </thead>
                <tbody>
                    {pessoas.map(pessoa => (
                        <tr key={pessoa.id}>
                            <td>{pessoa.nome}</td>
                            <td>{pessoa.idade}</td>
                            <td>{pessoa.profissao}</td>
                            {pessoa.idade >= 18 ? (
                                <td style={{color: 'green'}}>Sim!</td>
                            ) : (
                                <td style={{color: 'red'}}>Não!</td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UserDetails
