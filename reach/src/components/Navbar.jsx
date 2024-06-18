import './Navbar.scss'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>

      <header className='NavBar d-flex flex-wrap align-items-center py-4'>

        <NavLink to='/' className='nav-item'>
          <h2 className='nav-item mx-2'>REACH REHABILITACION MAZATLAN</h2>
        </NavLink>

        <ul className='nav justify-content-center'>

          <li className='nav-item mx-2'><NavLink to='/' className='__nav-link'>Home</NavLink></li>
          <li className='nav-item mx-2'><NavLink to='/quienes-somos' className='__nav-link'>¿Quienes somos?</NavLink></li>
          <li className='nav-item mx-2'><NavLink to='/servicios' className='__nav-link'>Servicios</NavLink></li>
          <li className='nav-item mx-2'><NavLink to='/contacto' className='__nav-link'>Contacto</NavLink></li>
          <li className='nav-item mx-2'><NavLink to='/preguntas' className='__nav-link'>Escribenos</NavLink></li>

        </ul>

      </header>

    </>
  )
}

export default Navbar
