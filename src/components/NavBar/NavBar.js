import './NavBar.scss';
import { HashLink as Link } from 'react-router-hash-link'
import React, { useState } from 'react';
// import { FaBars } from 'react-icons/fa'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import resumePDF from '../../assets/files/nehabholeresume.pdf';


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
                <Link to='#Home' activeClassName="CurrentPage" activeStyle={{ color: 'red' }} smooth>/home</Link>
                <Link to='#About' smooth >/about</Link>
                {/* <Link to='#Skills' smooth >Skills</Link> */}
                <Link to='#Portfolio' smooth >/portfolio</Link>
                {/* <Link to='#Experience' smooth >Experience</Link> */}
                <Link to='#Contact' smooth >/contact</Link>
                <a href={resumePDF} target='_blank'>/resume</a>
            </div>
            {/* <div className=" Social-Media">
                <a href='https://www.linkedin.com/in/nehabhole/' aria-label="LinkedIn"><FaLinkedin className='icon' /></a>
                <a href='https://github.com/bholeneha' aria-label="Github"><FaGithub className='icon' /></a>
            </div> */}
        </div >
    )
}

//scroll={el => scrollWithOffset(el)}