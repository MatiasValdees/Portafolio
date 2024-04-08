import { Route, Routes,Navigate } from "react-router-dom"
import { Contact } from "../components/Contact/Contact"
import { Home } from "../Home"

export const Router = () => {
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/*" element={<Navigate to={"/"}/>} />
        </Routes>
        </>
    )
}