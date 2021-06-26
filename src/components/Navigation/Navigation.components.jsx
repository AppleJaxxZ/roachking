import React from 'react';
import CartIcon from '../CartIcon/CartIcon.components'
import './Navigation.styles.css';


const Navigation = () => {
    return (
        <nav className="nav-flex">
            <ul className="menu-nav">
                <li>Home</li>
                <li>About</li>
                <li>Testmonial</li>
                <li>Shop</li>
                <li>Contact Us</li>
                <li><CartIcon /></li>



            </ul>
        </nav>
    )
}

export default Navigation;