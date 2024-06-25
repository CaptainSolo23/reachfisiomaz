import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Index from './routes/Index'
import Navbar from './components/Navbar'
import ContactBar from './components/ContactBar'
import Footer from './components/Footer'

function App () {
  return (
    <>
      <BrowserRouter>
        <ContactBar />
        <Navbar />
        <Index />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
