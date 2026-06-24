import React from 'react'

const DetalhesCarro = ({marca, km, cor}) => {
  return (
    <section>
        <ul>
            <li>Marca: {marca}</li>
            <li>KM: {km}</li>
            <li>Cor: {cor}</li>
        </ul>
    </section>
  )
}

export default DetalhesCarro
