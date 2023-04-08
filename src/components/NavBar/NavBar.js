import './NavBar.scss';
import { HashLink as Link } from 'react-router-hash-link'
import React, { useState } from 'react';
// import { FaBars } from 'react-icons/fa'

export default function NavBar() {
    // const [stickyClass, setStickyClass] = useState('relative');
    const [navbaractive, setNavBarActive] = useState(false);

    const changeOnScroll = () => {
        if (window.scrollY >= 80) {
            setNavBarActive(true)
        } else {
            setNavBarActive(false)
        }
    }

    window.addEventListener('scroll', changeOnScroll);

    return (
        <div className={navbaractive ? `NavBar active` : `NavBar`}>
            <div className="Links Navigation">
                {/* <FaBars /> */}
                <Link to='#Home' activeClassName="CurrentPage" activeStyle={{ color: 'red' }} smooth>Home</Link>
                <Link to='#About' smooth >About</Link>
                {/* <Link to='#Skills' smooth >Skills</Link> */}
                <Link to='#Portfolio' smooth >Portfolio</Link>
                {/* <Link to='#Experience' smooth >Experience</Link> */}
                <Link to='#Contact' smooth >Contact</Link>
            </div>
            <div className="Links Social-Media">
                <a href='https://www.linkedin.com/in/nehabhole/'>LinkedIn</a>
                <a href='https://github.com/bholeneha'>GitHub</a>
            </div>
        </div >
    )
}

//scroll={el => scrollWithOffset(el)}