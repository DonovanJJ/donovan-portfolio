import './App.css'
import Education from './components/Education'
import Experiences from './components/Experience'
import Introduction from './components/Introduction'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  return (
    <>
      <main className="pt-20 space-y-24">
        <section id="introduction">
          <Introduction />
        </section>
        <section id="experiences">
          <Experiences />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="education">
          <Education />
        </section>
      </main>
      </>

  )
}

export default App
