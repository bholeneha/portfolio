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
                        <h4>HTML | CSS | JavaScript</h4>
                        <p> Description</p>
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
                        <h4>HTML | CSS | JavaScript</h4>
                        <br />
                        <p>Description</p>
                        <button><a>LIVE</a></button> <button><a>REPO</a></button>
                    </div>
                </div>
            </div>
        </section>
    )
}