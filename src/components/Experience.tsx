type Experience = {
    company: string;
    role: string;
    duration: string;
    description: string[];
};

const experiences: Experience[] = [
    {
      company: "Tech Company A",
      role: "Software Engineering Intern",
      duration: "May 2023 - Aug 2023",
      description: [
        "Built scalable REST APIs.",
        "Implemented real-time features with WebSocket.",
      ],
    },
    {
      company: "Startup B",
      role: "Backend Developer",
      duration: "Jan 2022 - Apr 2023",
      description: [
        "Led the migration to microservices architecture.",
        "Optimized server performance by 30%.",
      ],
    },
  ];

const Experiences = () => {
    return (
        <section id="experience" className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-16 text-center">My Experience</h2>
    
            <div className="relative border-l-2 border-gray-700">
              {experiences.map((exp, index) => (
                <div key={index} className="mb-12 ml-6">
                  {/* Circle */}
                  <div className="absolute w-4 h-4 bg-indigo-500 rounded-full mt-2 -left-2 border-2 border-white"></div>
    
                  {/* Content */}
                  <div className="flex flex-col">
                    <span className="text-sm">{exp.duration}</span>
                    <h3 className="text-2xl font-semibold">{exp.role}</h3>
                    <p>{exp.company}</p>
                    <ul className="mt-4 list-disc list-inside space-y-2">
                      {exp.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
    )
}

export default Experiences;