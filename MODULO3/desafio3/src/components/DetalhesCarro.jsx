import React from 'react'

const DetalhesCarro = ({ marca, km, cor, novo }) => {
    return (
        <section className='container'>
            <h2>Detalhes do Carro</h2>
            {novo && <small>Este carro é novo!</small>}
            <ul className='listaCarro'>
                <li>Marca: {marca}</li>
                <li>KM: {km}</li>
                <li>Cor: {cor}</li>
            </ul>

        </section>
    )
}

export default DetalhesCarro
