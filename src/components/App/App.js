import './App.scss';
//import { Routes, Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar'
import Home from '../Home/Home'
import About from '../About/About'
import Portfolio from '../Portfolio/Portfolio';
// import Skills from '../Skills/Skills';
// import Experience from '../Experience/Experience'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import { FaLinkedin, FaGithub } from "react-icons/fa";


export default function App() {
  return (
    <div className="App">
      <div className='SM-Container'>
        <div className="Social-Media">
          <a href='https://www.linkedin.com/in/nehabhole/' aria-label="LinkedIn"><FaLinkedin className='icon' /></a>
          <a href='https://github.com/bholeneha' aria-label="Github"><FaGithub className='icon' /></a>
        </div>
      </div>
      <NavBar />
      <main>
        <Home />
        <About />
        {/* <Skills /> */}
        <Portfolio />
        {/* <Experience /> */}
        <Contact />
        <Footer />
      </main>
    </div>
  );
}


