import { Routes, Route } from 'react-router-dom'
import { Contact, Home, Services, Who, Questions, Faqs, About } from '../pages'

const Index = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contacto' element={<Contact />} />
      <Route path='/quienes-somos' element={<Who />} />
      <Route path='/servicios' element={<Services />} />
      <Route path='/preguntas' element={<Questions />} />
      <Route path='/faqs' element={<Faqs />} />
      <Route path='/acerca_de' element={<About />} />
    </Routes>
  )
}

export default Index
