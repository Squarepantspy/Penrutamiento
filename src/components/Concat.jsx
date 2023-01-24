import React from 'react'
import { useParams } from 'react-router';
const Concat = () => {

 const {word,color1,color2} = useParams(); //desestructuramos los parametros
    const estilo = { //https://blog.logrocket.com/styling-react-5-ways-style-react-apps/
        color : color1,
        backgroundColor: color2
    }
  return (<div className='container' style={estilo}>
    {console.log(word)}
        <h2 className='text-center'>{word}</h2>
    </div>
  )
}

export default Concat