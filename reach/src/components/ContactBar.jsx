import './ContactBar.scss'
import { SlSocialInstagram, SlSocialFacebook } from 'react-icons/sl'
import { FaWhatsapp, FaPhone } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'

const ContactBar = () => {
  return (
    <header className='contact-bar d-flex flex-wrap align-items-center'>

      <div className='contact-bar__list'>
        <p className='contact-bar__nav-link mt-2'>Servicio a domicilio  <IoLocationSharp className='contact-bar__item' /></p>
      </div>

      <div className='contact-bar__list d-flex justify-content-center align-content-center'>

        <a className='contact-bar__nav-link mx-2' href='tel:+526692726358' target='_blank' rel='noopener noreferrer'><FaPhone className='contact-bar__nav-link' /></a>
        <a className='contact-bar__nav-link mx-2' href='https://wa.me/526692726358' target='_blank' rel='noopener noreferrer'><FaWhatsapp className='contact-bar__nav-link' /></a>

        <a className='contact-bar__nav-link mx-2' href='https://www.facebook.com/reachfisiomaz' target='_blank' rel='noopener noreferrer'><SlSocialFacebook
          className='contact-bar__nav-link'
                                                                                                                                          />
        </a>

        <a className='contact-bar__nav-link mx-2' href='https://www.instagram.com/reachfisiomaz/' target='_blank' rel='noopener noreferrer'><SlSocialInstagram />
        </a>

      </div>
    </header>
  )
}

export default ContactBar
