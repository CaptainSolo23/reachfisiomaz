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

      <div className='contact-bar__list d-flex justify-content-center'>

        <FaPhone className='contact-bar__nav-link mx-2' />
        <SlSocialFacebook className='contact-bar__nav-link mx-2' />
        <SlSocialInstagram className='contact-bar__nav-link mx-2' />
        <FaWhatsapp className='contact-bar__nav-link mx-2' />

      </div>
    </header>
  )
}

export default ContactBar
