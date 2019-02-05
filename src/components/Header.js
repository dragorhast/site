import React from 'react'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="Logo"/></span>
        <h1>On Your Marks,<strong> Tap, GO!</strong><br/></h1>
    </header>
);

export default Header
