import React, { useState } from 'react'

function CondicionalRender() {
    const [x, setX] = useState(true)
    
    return (
        <section className='container'>
            <h2>Render Condicional</h2>
            {x ? (
                <p>X é VERDADEIRO ✅</p>
            ) : (
                <p>X é FALSO ❎</p>
            )} 

            <article>
                <button onClick={() => setX(!x)}>Alterar valor do state</button>
            </article>
        </section>
    )
}

export default CondicionalRender
