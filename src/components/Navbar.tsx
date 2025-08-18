const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full backdrop-blur-md bg-gray-900/80 z-50 px-6 py-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#introduction" className="text-gray-200 hover:text-indigo-400 transition">Home</a>
          <a href="#projects" className="text-gray-200 hover:text-indigo-400 transition">Projects</a>
          <a href="#skills" className="text-gray-200 hover:text-indigo-400 transition">Skills</a>
          <a href="#experiences" className="text-gray-200 hover:text-indigo-400 transition">Experience</a>
          <a href="#education" className="text-gray-200 hover:text-indigo-400 transition">Education</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
