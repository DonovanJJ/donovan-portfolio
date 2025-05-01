type EducationItem = {
    school: string;
    degree: string;
    duration: string;
    description: string[];
}

const educationData: EducationItem[] = [
    {
      school: "National University of Singapore",
      degree: "B.Comp. in Computer Science",
      duration: "Aug 2021 – May 2025",
      description: [
        "GPA: 4.6/5.0",
        "Relevant Modules: Data Structures, Operating Systems, Parallel Computing",
      ],
    },
    {
      school: "Raffles Institution",
      degree: "GCE A-Levels",
      duration: "Jan 2017 – Dec 2018",
      description: [
        "Top 10% of cohort",
        "President of Robotics Club",
      ],
    },
  ];

  const Education = () => {
    return (
      <section id="education" className="py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">Education</h2>
  
          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div key={index} className="border-l-4 border-indigo-500 pl-6 relative">
                <div className="absolute w-4 h-4 bg-indigo-500 rounded-full left-[-10px] top-2.5"></div>
                <span className="text-sm text-gray-400">{edu.duration}</span>
                <h3 className="text-2xl font-semibold mt-1">{edu.degree}</h3>
                <p className="text-gray-400 mb-2">{edu.school}</p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {edu.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default Education;