import React from 'react';

import logo from '../logo.jpg'
function Header() {
    return (
        <div className='Header'>

            <div className='All_componet'>
                <img src={logo} width={60} height={50} alt='Stamplike' />
                <h2 className='display'>
                    Alpesh Tehcnolab
                </h2>
            </div>
        </div>
    )
}

export default Header;