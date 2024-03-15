import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { BrowserRouter } from 'react-router-dom'
import { Rutas } from './routes/Router'

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Rutas/>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
