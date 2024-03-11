import { Banner } from './components/Banner/Banner'
import { Navbar } from './components/Navbar/Navbar'
import { Card } from './components/Card/Card'
import { Footer } from './components/Footer/Footer'
import { Summary } from './components/Summary/Summary'
import { AboutMe } from './components/AboutMe/AboutMe'

function App() {

  return (
    <>
      <Navbar/>
      <Banner/>
      <Summary/>
      <AboutMe/>
      <Footer/>
    </>
  )
}

export default App
