import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['intro', 'features', 'started', 'download'] } currentClassName="is-active" offset={-300}>
            <li>
                <Scroll type="id" element="intro">
                    <a href="#">Introduction</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="features">
                    <a href="#">Features</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="started">
                    <a href="#">How You'll Get Started</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="download">
                    <a href="#">Download</a>
                </Scroll>
            </li>
        </Scrollspy>
    </nav>
)

export default Nav
