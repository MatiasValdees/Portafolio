import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes/Router'

function App() {

  return (
    <>
    <BrowserRouter>
      <Router/>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
