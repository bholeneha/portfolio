import './Home.scss';
import { HashLink as Link } from 'react-router-hash-link'

export default function Home() {
    return (
        <section className='Home' id='Home'>
            <div className="Intro">
                <p>Hi, my name is</p>
                <span>Neha Bhole.</span>
                <p>I am a <span>Full Stack Developer</span></p>
                {/* <h3>Love seeing code come to life!</h3> */}
                <br />
                <p>Based in Toronto, Canada. <br /><br /> Currently looking for an opportunity!</p>
                <button><Link to='#About' smooth>LEARN MORE</Link></button>

            </div>
        </section>
    )
}