import './App.css'
import Education from './components/Education'
import Experiences from './components/Experience'
import Introduction from './components/Introduction'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  return (
    <div className="min-h-screen w-full bg-gray-100 text-gray-900 overflow-x-hidden">
      <Navbar />
      <section id="introduction">
        <Introduction />
      </section>
      <section>
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="experiences">
        <Experiences />
      </section>
      <section id="education">
        <Education />
      </section>
    </div>
  )
}

export default App
