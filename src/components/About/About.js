import './About.scss';
import headshot from '../../assets/images/nehab.jpeg'

export default function About() {
    return (
        <section className='About' id='About'>
            <h1>About</h1>
            <div className='AboutMe'>
                <div className='HeadShot'>
                    <img src={headshot} alt="Neha Bhole Head Shot" loading="lazy" />
                </div>
                <div className='AboutText' >
                    <div>
                        <h2>Hey there, I'm Neha!</h2>
                        <div className='AboutContent'>
                            <p>Thanks for stopping by my portfolio. I'm a full stack developer based in Toronto, Ontario.</p>
                            <p>
                                Growing up, I never thought I'd end up in tech. In fact, my background is in pediatric behavioral therapy. But life has a funny way of leading you down unexpected paths, and mine led me to software engineering.
                            </p>
                            <p>
                                I fell in love with coding while tinkering with personal projects on WordPress. There's something magical about seeing lines of code come together to create amazing websites and apps, and I knew that this was the field for me.
                            </p>
                            <p>
                                Now, I'm a graduate of the Software Engineering Immersive program from General Assembly and the Data Analytics program from the University of Toronto. I've gained proficiency in several programming languages, including HTML, CSS, JavaScript, Python, and SQL.
                            </p>
                            <p>
                                What sets me apart is my unique perspective as someone who's worked in healthcare. My strong empathy, interpersonal skills, and problem-solving abilities have helped me communicate complex technical concepts to a diverse range of stakeholders. I believe that technology has the power to positively impact society in a significant way, and I'm committed to scaling my impact on the community using development.
                            </p>
                            <p>
                                When I'm not coding, I love to explore new hobbies and challenges. I'm currently learning an Indian Classical Dance called Kathak, and I love to experiment with photography. I'm always on the lookout for new opportunities to learn and grow, both personally and professionally.
                            </p>
                            <p>
                                So, if you're interested in collaborating or just want to chat about all things web development, feel free to reach out!
                            </p>
                            {/* Currently Reading, Currently Listening, Currently Learning */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}