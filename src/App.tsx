import './App.css'
import Education from './components/Education'
import Experiences from './components/Experience'
import Introduction from './components/Introduction'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  return (
    <div className="min-h-screen w-full bg-gray-50 text-gray-900 overflow-x-hidden">
      <Navbar />
      <main className="pt-20 space-y-24"> {/* add spacing between sections */}
        <section id="introduction">
          <Introduction />
        </section>
        <section id="projects">
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
      </main>
    </div>
  )
}

export default App
