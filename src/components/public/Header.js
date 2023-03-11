import React from 'react';
import './header.css'
 import { Link } from 'react-router-dom';
const Header = () => {
    return (
        
         <header className='Header'>

         
            <nav>
                <ul>
                    <li><Link to="/home">Acceuil</Link></li>
                    <li><Link to="/service">Service</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            </header>
        
    );
};

export default Header;