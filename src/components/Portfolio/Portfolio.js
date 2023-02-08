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
                            This game tests one's short term memory. Player needs to remember the sequence of
                            light and sounds while it gets longer every level.
                        </p>
                        <button><a>LIVE</a></button> <button><a>REPO</a></button>
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
                            Resource Vault is a collection of links and resources for a dev student.
                        </p>
                        <button><a>LIVE</a></button> <button><a>REPO</a></button>
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
                            Visitors can browse the app freely and add and remove items from the shopping cart.
                            Users can sign up, log in and their carts are automatically saved.
                        </p>
                        <button><a>LIVE</a></button> <button><a>REPO</a></button>
                    </div>
                </div>
            </div>
        </section>
    )
}