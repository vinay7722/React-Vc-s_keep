import React from 'react';
import logo from './Images/vc.png' 

function Header() {
  return (
    <>
        <div className='header'>
            <img alt='logo' src={logo}  width='70' height='50' />
            <h1 style={{paddingLeft:20}}>VC's Notes</h1>
        </div>
    </>
  );
}

export default Header;
