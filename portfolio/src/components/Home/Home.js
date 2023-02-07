import './Home.scss';
import { HashLink as Link } from 'react-router-hash-link'

export default function Home() {
    return (
        <section className='Home' id='Home'>
            <div className="Intro">
                <h1>Hi, I'm <span>Neha!</span></h1>
                <h2>A Full Stack Developer</h2>
                <p>Based in Toronto, Canada</p>
                <br />
                <p>Currently looking for an opportunity!</p>
                <Link to='#About' smooth><button>LEARN MORE</button></Link>

            </div>
        </section>
    )
}