import './About.scss';
import headshot from '../../assets/images/nehab.jpeg'

export default function About() {
    return (
        <section className='About' id='About'>
            <h1>About</h1>
            <br />
            <div className='AboutMe'>
                <div className='HeadShot'>
                    <img src={headshot} alt="Neha Bhole Head Shot" loading="lazy" />
                </div>
                <div className='AboutText' >
                    <div>
                        <h2>Hi! Thank you for visiting my portfolio!</h2>
                        <div className='AboutContent'>
                            <p>
                                Hey there, I'm Neha! I'm a full stack developer based in Toronto, Ontario. I fell in love with software engineering while tinkering with personal projects on Wordpress, and I haven't looked back since. There's something magical about seeing lines of code come together to create amazing websites and apps, and I love being a part of that process.

                                When I'm not coding, you can usually find me exploring new hobbies and challenges. I'm currently learning an Indian Classical Dance called Kathak, and I love to experiment with photography. But at the end of the day, web development is my true passion, and I'm always looking for new opportunities to grow and learn.

                                If you're interested in collaborating or just want to chat about all things web development, feel free to reach out!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}