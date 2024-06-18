import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Index from './routes/Index'
import Navbar from './components/Navbar'
import ContactBar from './components/ContactBar'

function App () {
  return (
    <>
      <BrowserRouter>
        <ContactBar />
        <Navbar />
        <Index />
      </BrowserRouter>
    </>
  )
}

export default App
