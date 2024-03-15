import { AboutMe } from "./components/AboutMe/AboutMe"
import { Banner } from "./components/Banner/Banner"
import { Footer } from "./components/Footer/Footer"
import { Navbar } from "./components/Navbar/Navbar"
import { Summary } from "./components/Summary/Summary"

export const Home = () =>{
    return(
        <>
            <Banner/>
            <Summary/>
            <AboutMe/>
        </>
    )
}