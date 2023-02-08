import './Portfolio.scss';

export default function Portfolio() {
    return (
        <section className='Portfolio' id='Portfolio'>
            <h1>Portfolio</h1>

            <div className="Projects">
                <div className='Project ProjectOne'>
                    <img />
                    <div>
                        <h2>Simon</h2>
                        <br />
                        <h3>HTML | CSS | JavaScript</h3>
                        <p> Description</p>
                    </div>
                    <button><a>LIVE</a></button> <button><a>REPO</a></button>
                </div>

                <div className='Project ProjectTwo'>
                    <img />
                    <div>
                        <h2>Resource Vault</h2>
                        <br />
                        <h3>HTML | CSS | JavaScript</h3>
                        <p> Description</p>
                    </div>
                    <button><a>LIVE</a></button> <button><a>REPO</a></button>
                </div>

                <div className='Project ProjectThree'>
                    <img />
                    <div>
                        <h2>Leaf It To Me</h2>
                        <br />
                        <h3>HTML | CSS | JavaScript</h3>
                        <br />
                        <p>Description</p>
                    </div>
                    <button><a>LIVE</a></button> <button><a>REPO</a></button>
                </div>
            </div>
        </section>
    )
}