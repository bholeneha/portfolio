import './Footer.scss';
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <div className='Footer' id='Footer'>

            <div className="Links Social-Media">
                <a href='https://www.linkedin.com/in/nehabhole/' aria-label="LinkedIn"><FaLinkedin className='icon' /></a>
                <a href='https://github.com/bholeneha' aria-label="Github"><FaGithub className='icon' /></a>
            </div>
            <p>Copyright © Neha Bhole 2023</p>
        </div>
    )
}