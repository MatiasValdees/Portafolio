import './Narbar.css'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {

    const [toggle,setToggle]=useState(true);

    const onToggle=()=>{
        setToggle(!toggle)
    }

    return (<>
        <div className="open-navbar">
            <i className="fa-solid fa-bars border-line" onClick={()=>onToggle()}></i>
        </div>
        <nav className="navbar"
            style={{left:toggle?'-100%':'0%'}}
        >
            <div className="items-navbar">
                <div className='mark-x'><i className="fa-solid fa-x" onClick={()=>onToggle()}></i></div>
                <div className="icon-banner">
                    <h1>Portfolio</h1>
                </div>
                <ul className='list-navbar'>
                    <li className='item-navbar'>
                        <NavLink to={'/'} className={'nav-link'}>Home</NavLink> 
                    </li>
                    <li className='item-navbar'>
                        <a href="#section-languages">Languages</a>
                        </li>
                    <li className='item-navbar'>
                        <a href="#section-tecnologies">Tecnologies</a>
                    </li>
                    <li className='item-navbar'>
                        <a href={'#section-trajectory'}> Trajectory</a>
                    </li>
                    <li className='item-navbar'>
                        <NavLink to={'/contact'} className={'nav-link'}>Contact</NavLink>
                    </li>
                </ul>
                <div className="social">
                    <a href="https://www.linkedin.com/in/matias-valdes-reyes/" target="_blank"><i className="fa-brands fa-linkedin icon-social"></i></a>
                    <a href="https://github.com/MatiasValdees" target="_blank"><i className="fa-brands fa-github icon-social"></i></a>
                </div>
            </div>
        </nav>
    </>);
}