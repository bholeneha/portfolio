import './About.scss';
import headshot from '../../assets/images/nehab.jpeg'

export default function About() {
    return (
        <section className='About' id='About'>
            <h1>About</h1>
            <div className='AboutMe'>
                <div className='HeadShot'>
                    <img width="500" src={headshot} alt="Neha Bhole Head Shot" loading="lazy" />
                </div>
                <div className='AboutText' >
                    <div>
                        <h2>Hi! </h2>
                        <h3>Thank you for visiting my portfolio!</h3>
                        <div className='AboutContent'>
                            <p>
                                My name is Neha and I'm a full stack developer based in Toronto, Ontario. I discovered software engineering while working on personal projects using Wordpress and I found developing websites so exciting that I decided to make the switch. I love seeing code and projects come to life.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}