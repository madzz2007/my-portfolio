import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Skills from './pages/Skills.jsx'
import Projects from './pages/Projects.jsx'
import Certificates from './pages/Certificates.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  return (
    <div className="container">
      <Navbar />

      <div id="home">
        <Home />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="certificates">
        <Certificates />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <Footer>© 2025 Madhesh — Java • Python • Web • UI/UX • OOPs</Footer>
    </div>
  )
}
