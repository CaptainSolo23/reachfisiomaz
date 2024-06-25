import { Link } from 'react-router-dom'
import './Footer.scss'

const Footer = () => {
  return (
    <>
      <footer className='py-3 my-4'>
        <ul className='nav justify-content-center border-bottom pb-3 mb-3'>
          <li className='nav-item'><Link to='/' className='nav-link px-2 text-body-secondary'>Home</Link></li>
          <li className='nav-item'><Link to='/contacto' className='nav-link px-2 text-body-secondary'>Contacto</Link></li>
          <li className='nav-item'><Link to='/preguntas' className='nav-link px-2 text-body-secondary'>Escribenos</Link></li>
          <li className='nav-item'><Link to='/faqs' className='nav-link px-2 text-body-secondary'>FAQs</Link></li>
          <li className='nav-item'><Link to='/acerca_de' className='nav-link px-2 text-body-secondary'>About</Link></li>
        </ul>

        <div className='d-flex justify-content-between text-center'>
          <p className='credits'>© 2024 Reach Rehabilitacion Mazatlan</p>
          <p className='credits'>||</p>
          <a className='credits' href='https://github.com/CaptainSolo23' target='_blank' rel='noopener noreferrer'>Website developed by: captainsolo23</a>
        </div>

      </footer>
    </>
  )
}

export default Footer
