import React from 'react'
import {Link, Outlet, NavLink} from 'react-router-dom'; //se puede utilizar Link sin clase active o NavLink con clase active

const Navegar = () => {
  return (
    <div>
        <NavLink to="/Home">Home</NavLink>
        <Outlet/> {/* Gracias a Outlet puede renderizar lo que esta anidado dentro de Route AQUI 
        LE DECIMOS DONDE QUEREMOS QUE SE RENDERIZE EL HIJO  */}
    </div>
  )
}

export default Navegar