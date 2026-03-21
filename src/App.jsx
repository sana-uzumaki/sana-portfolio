import './App.css'
import Achivement from './achivements.jsx'
import Footer from './footer.jsx'
import NavBar from './navbar.jsx'
import Home from './home-about.jsx'
import Skills from './skills.jsx'
import Projects from './projects.jsx'
import Contact from './contacts.jsx'
import Hero from './hero.jsx'

function App() {

  return (
    <div className="App bg-slate-900 text-white scroll-smooth">
      <NavBar />
      <Hero />
      <Home />
      <Skills />
      <Projects />
      <Achivement />
      <Contact />
      <Footer />
    </div>
  )
}

export default App