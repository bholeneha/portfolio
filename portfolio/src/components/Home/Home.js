import './Home.scss';
import { HashLink as Link } from 'react-router-hash-link'

export default function Home() {
    return (
        <section className='Home' id='Home'>
            <div className="Intro">
                <h1>Hi, I'm Neha!</h1>
                <h2>A Full Stack Developer</h2>
                <h3>Love seeing code come to life!</h3>
                <br />
                <p>Based in Toronto, Canada. Currently looking for an opportunity!</p>
                <button><Link to='#About' smooth>LEARN MORE</Link></button>

            </div>
        </section>
    )
}