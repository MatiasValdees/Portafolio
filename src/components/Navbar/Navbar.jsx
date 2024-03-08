import { useState } from 'react';
import './Narbar.css'
export const Navbar = () => {

    const [toggle,setToggle]=useState(false);

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
                    <li className='item-navbar'>Home</li>
                    <li className='item-navbar'>Trajectory</li>
                    <li className='item-navbar'>Projects</li>
                    <li className='item-navbar'>Lenguages</li>
                    <li className='item-navbar'>About me</li>
                    <li className='item-navbar'>Contact</li>
                </ul>
                <div className="social">
                    <i className="fa-brands fa-github icon-social"></i>
                    <i className="fa-brands fa-linkedin icon-social"></i>
                </div>
            </div>
        </nav>
    </>);
}