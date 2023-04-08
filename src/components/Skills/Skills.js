import './Skills.scss';
import { IconContext } from "react-icons";
import { FaJs, FaPython, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";

export default function Skills() {
    return (
        // <IconContext.Provider
        // value={{ style: { color: 'white', size: 'px' } }}
        // >
        <section className='Skills' id='Skills'>
            <h1>Skills</h1>
            <div>
                <figure>
                    <FaHtml5 className='icon' />
                    <figcaption>HTML</figcaption>
                </figure>
                <figure>
                    <FaCss3Alt className='icon' />
                    <figcaption>CSS</figcaption>
                </figure>
                <figure>
                    <FaJs className='icon' />
                    <figcaption>JavaScript</figcaption>
                </figure>
                <figure>
                    <FaPython className='icon' />
                    <figcaption>Python</figcaption>
                </figure>
                <figure>
                    <FaNodeJs className='icon' />
                    <figcaption>Node.js</figcaption>
                </figure>
                <figure>
                    <FaGithub className='icon' />
                    <figcaption>GitHub</figcaption>
                </figure>
                <figure>
                    <FaReact className='icon' />
                    <figcaption>HTML 5</figcaption>
                </figure>
                <figure>
                    <FaReact className='icon' />
                    <figcaption>HTML 5</figcaption>
                </figure>
            </div>
        </section>
        // {/* </IconContext.Provider> */ }
    )
}