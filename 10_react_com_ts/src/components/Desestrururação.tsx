import React from 'react'

type Props = {
    nome:string,
    profissão:string,
    contato:string
}

function Desestruturação({nome,profissão,contato}: Props) {
  return (
    <div>
        <h1>Curriculo</h1>
        <h2>Nome</h2>                               
            <p>{nome}</p>
        <br />
        <h2>Profissão</h2>
            <p>{profissão}</p>
        <br />
        <h2>contato</h2>
            <p>{contato}</p>
    </div>
  )
}

export default Desestruturação