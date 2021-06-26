import React from 'react';
import './Header.styles.css'
import roachKing from '../../media/roachKing.png';
const Header = () => {
   return (
      <header className="section">
         <div className="row">

            <div className="logo"><img id="logo" src={roachKing} alt="#" /></div>
            <h1 className="header-title">Dragon Feeders</h1>

         </div>








      </header>
   )

}


export default Header;