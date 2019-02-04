import React from 'react'

import logo from '../assets/images/logo.png';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>On Your Marks,<strong> Tap, GO!</strong><br />
</h1>
    </header>
)

export default Header
