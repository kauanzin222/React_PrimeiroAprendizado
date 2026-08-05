import React from 'react'

const Fragment = ({propFragment}) => {
  return (
    <>
      <h2>Primeiro Título</h2>
      <h3>Segundo Título</h3>
      <h3>{propFragment}</h3>
    </>
  )
}

export default Fragment
