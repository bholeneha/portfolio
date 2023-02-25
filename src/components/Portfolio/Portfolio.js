import './Portfolio.scss';
import simon from '../../assets/images/simon.png'
import rv from '../../assets/images/rv.png'
import leafshop from '../../assets/images/leaf.png'

export default function Portfolio() {
    return (
        <section className='Portfolio' id='Portfolio'>
            <h1>Portfolio</h1>
            <br />
            <div className="Projects">
                <div className='Project ProjectOne'>
                    <div className='SimonImg'>
                        <img width="500" src={simon} alt="Simon Project Screen Shot" loading="lazy" />
                    </div>
                    <div>
                        <h3>Simon</h3>
                        <br />
                        <h4>HTML | CSS | JavaScript</h4>
                        <p>
                            A web browser game version of the classic Simon game. Built using HTML, CSS & JS.
                            <br /><br />
                            A fun and engaging web browser game that puts your short-term memory to the test! With each level, the sequence of light and sounds becomes longer, challenging players to remember and repeat the pattern. Developed using HTML, CSS, and JavaScript, this game is sure to provide hours of entertainment while also sharpening your memory skills. Give it a try and see how far you can go!
                        </p>
                        <button><a href='https://bholeneha.github.io/simon/'>LIVE</a></button> <button><a href='https://github.com/bholeneha/simon'>REPO</a></button>
                    </div>
                </div>

                <div className='Project ProjectTwo'>
                    <div>
                        <h3>Resource Vault</h3>
                        <br />
                        <h4>Node.js | Express.js | MongoDB | Google OAuth</h4>
                        <p>
                            A web application built using MEN Stack with Google OAuth user authentication.
                            <br /><br />
                            Resource Vault is a user-friendly web application designed to help students find the resources they need to succeed. Built using MongoDB, Express, and Node.js, it allows users to browse a wide variety of categories to find the right resources for their needs. With the added convenience of Google OAuth login, users can easily log in and save their favorite links for quick and easy access later on. Explore the power of Resource Vault today and take your learning journey to the next level!
                        </p>
                        <button><a href='https://resource-vault.up.railway.app/'>LIVE</a></button> <button><a href='https://github.com/bholeneha/resource-vault'>REPO</a></button>
                    </div>
                    <div className='RVImg'>
                        <img width="500" src={rv} alt="Resource Vault Project Screen Shot" loading="lazy" />
                    </div>
                </div>

                <div className='Project ProjectThree'>
                    <div className='LeafImg'>
                        <img width="500" src={leafshop} alt="Leaf It To Me Project Screen Shot" loading="lazy" />
                    </div>
                    <div>
                        <h3>Leaf It To Me</h3>
                        <br />
                        <h4>Node.js | Express.js | React | MongoDB | JWT authentication</h4>
                        <br />
                        <p>
                            Leaf It To Me is plant shop web application built using the MERN stack.
                            <br /><br />
                            An online plant shop that provides users with a wide variety of plants to explore and purchase through a shopping cart system. Built using the MERN stack, it offers a user-friendly interface and including secure user authentication through the use of JWT tokens. Users can easily sign up, log in, and have their carts automatically saved, and additional features to be added to enhance the overall user experience. Leaf it to me is a destination for all plant enthusiasts.
                        </p>
                        <button><a href='https://leafittome.herokuapp.com/'>LIVE</a></button> <button><a hred='https://leafittome.herokuapp.com/'>REPO</a></button>
                    </div>
                </div>
            </div>
        </section>
    )
}