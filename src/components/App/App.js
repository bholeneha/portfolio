import './App.scss';
//import { Routes, Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar'
import Home from '../Home/Home'
import About from '../About/About'
import Portfolio from '../Portfolio/Portfolio';
import Skills from '../Skills/Skills';
// import Experience from '../Experience/Experience'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'


export default function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Home />
        <About />
        <Skills />
        <Portfolio />
        {/* <Experience /> */}
        <Contact />
        <Footer />
      </main>
    </div>
  );
}


