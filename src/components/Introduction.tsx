const Introduction = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center px-4 md:px-0 bg-gray-50">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-gray-900">
        Hi, I'm <span className="text-indigo-500">Donovan</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
        I'm a software engineering student at the National University of Singapore, specializing in backend development. I build scalable and efficient applications with a focus on clean code.
      </p>
      {/* Optional: Add a "Scroll Down" or CTA */}
      <a href="#projects" className="mt-8 inline-block text-indigo-500 hover:text-indigo-400 transition font-medium">
        View my projects ↓
      </a>
    </div>
  );
};

export default Introduction;
