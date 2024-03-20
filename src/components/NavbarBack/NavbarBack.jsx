import { NavLink } from 'react-router-dom'
import './NavbarBack.css'

export const NavbarBack = () =>{
    return(
        <>
        <nav className="navbar"
        >
            <div className="items-navbar">
                <div className='mark-x'><i className="fa-solid fa-x" onClick={()=>onToggle()}></i></div>
                <div className="icon-banner">
                    <h1>Portfolio</h1>
                </div>
                <ul className='list-navbar'>
                    <li className='item-navbar'>
                        <NavLink to={'/'} className={'nav-link'} style={{margin:'0'}}>Home</NavLink> 
                    </li>
                </ul>
                <div className="social">
                    <i className="fa-brands fa-github icon-social"></i>
                    <i className="fa-brands fa-linkedin icon-social"></i>
                </div>
            </div>
        </nav>
        </>
    )
}