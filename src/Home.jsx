
import { AboutMe } from "./components/AboutMe/AboutMe"
import { Banner } from "./components/Banner/Banner"
import { Footer } from "./components/Footer/Footer"
import { Languages } from "./components/Languages/Languages"
import { Navbar } from "./components/Navbar/Navbar"
import { Summary } from "./components/Summary/Summary"
import { Tecnologies } from "./components/Tecnologies/Tecnologies"
import { Trajectory } from "./components/Trajectory/Trajectory"

export const Home = () =>{
    return(
        <>
            <Navbar/>
            <Banner/>
            <Summary/>
            <Languages/>
            <Tecnologies/>
            <Trajectory/>
        </>
    )
}