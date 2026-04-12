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
    <main className="relative min-h-screen bg-slate-950 text-slate-100 scroll-smooth">
      {/* Radial gradient background effects */}
      <div className="pointer-events-none fixed inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.12),_transparent_25%),radial-gradient(circle_at_top_left,_rgba(168,85,247,0.12),_transparent_20%)]" />
      <div className="pointer-events-none fixed inset-x-0 bottom-0 h-72 bg-[radial-gradient(circle_at_bottom_left,_rgba(248,113,113,0.10),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(96,165,250,0.10),_transparent_20%)]" />

      <div className="animate-fade-in-down">
        <NavBar />
      </div>
      <div className="animate-fade-in-up">
        <Hero />
      </div>
      <div className="animate-slide-in-up animate-stagger-1">
        <Home />
      </div>
      <div className="animate-slide-in-up animate-stagger-2">
        <Skills />
      </div>
      <div className="animate-slide-in-up animate-stagger-3">
        <Projects />
      </div>
      <div className="animate-slide-in-up animate-stagger-4">
        <Achivement />
      </div>
      <div className="animate-fade-in-up">
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </main>
  )
}

export default App