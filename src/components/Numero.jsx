import React from 'react'
import { useParams } from 'react-router';
const Numero = (props) => {

    let parametros = useParams()
  return (
    <div>
        <h2>El numero que estas buscando es {isNaN(parametros.number) ? <p className='bg-danger'>"No es un numero"</p> : parseInt(parametros.number)}</h2>
    </div>
  )
}

export default Numero