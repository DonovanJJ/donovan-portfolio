import './App.css'
import Education from './components/Education'
import Experiences from './components/Experience'
import Introduction from './components/Introduction'
import MySkills from './components/MySkills'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen w-full bg-gray-950 text-gray-100 overflow-x-hidden">
      <Navbar />
      <section id="introduction">
        <Introduction />
      </section>
      <section id="skills">
        <MySkills />
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
