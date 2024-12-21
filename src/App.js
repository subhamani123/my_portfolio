import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Project';
import Resume from './components/Resume';
import Skills from './components/Skills';


function App() {
  return (
    <div className="App">
        <Header/>
        <Hero />
        <About/>
        <Skills/>
        <Projects/>
        <Resume/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;