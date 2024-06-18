import { Routes, Route } from 'react-router-dom'
import { Contact, Home, Services, Who } from '../pages'

const Index = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='contacto' element={<Contact />} />
      <Route path='quienes-somos' element={<Who />} />
      <Route path='servicios' element={<Services />} />
    </Routes>
  )
}

export default Index
