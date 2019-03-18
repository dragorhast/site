import React from 'react'
import logo from '../assets/images/logo.svg';

const HeaderAbout = (props) => (
    <header id="header" className="alt">
    <span className="logo"><img src={logo} alt="logo" /></span>
        <h1>About</h1>
    </header>
)

export default HeaderAbout
