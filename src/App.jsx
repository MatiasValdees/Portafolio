import { Banner } from './components/Banner/Banner'
import { Navbar } from './components/Navbar/Navbar'
import { Card } from './components/Card/Card'
import { Footer } from './components/Footer/Footer'
import { Summary } from './components/Summary/Summary'
import { AboutMe } from './components/AboutMe/AboutMe'
import { Contact } from './components/Contact/Contact'

function App() {

  return (
    <>
      <Navbar/>
      {/* <Banner/>
      <Summary/>
      <AboutMe/> */}
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
