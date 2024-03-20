import { NavLink } from 'react-router-dom'
import './NavbarBack.css'

export const NavbarBack = () =>{
    return(
        <>
        <nav className="navbar-back"
        >
            <div className="items-navbar-back">
                <div className="icon-banner">
                    <NavLink to={'/'}>Home</NavLink> 
                </div>

                <div className="social-contact">
                    <a href="https://www.linkedin.com/in/matias-valdes-reyes/"><i className="fa-brands fa-linkedin icon-social"></i></a>
                    <a href="https://github.com/MatiasValdees"><i className="fa-brands fa-github icon-social"></i></a>
                </div>
            </div>
        </nav>
        </>
    )
}