const Navbar = () => {
    return (
      <nav className="fixed top-0 w-full bg-gray-900 z-50 px-6 py-4 shadow-md ">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-white tracking-tight">
            YourName
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#home" className="text-white hover:text-gray-400 transition">Home</a>
            <a href="#about" className="text-white hover:text-gray-400 transition">About</a>
            <a href="#skills" className="text-white hover:text-gray-400 transition">Skills</a>
            <a href="#experiences" className="text-white hover:text-gray-400 transition">Experiences</a>
            <a href="#education" className="text-white hover:text-gray-400 transition">Education</a>
            <a href="#contact" className="text-white hover:text-gray-400 transition">Contact</a>
          </div>
        </div>
      </nav>
    );
  };

export default Navbar;