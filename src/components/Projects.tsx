import kafkaLogo from '/images/kafka.svg'
import springLogo from '/images/spring.svg'

type ProjectCardDetails = {
  projectTitle: string;
  techStack: { name: string; logo: string }[];
  description: string;
  image?: string; // optional project illustration
};

const ProjectCard = ({ projectTitle, techStack, description, image }: ProjectCardDetails) => {
  return (
    <div className="flex flex-col md:flex-row border rounded-2xl p-6 w-full max-w-4xl my-6 bg-white shadow-md hover:shadow-xl transition-transform transform hover:scale-105">

      {/* Left side: Text content */}
      <div className="md:w-1/2 w-full flex flex-col justify-center space-y-4 text-left">
        <h3 className="text-2xl font-bold">{projectTitle}</h3>

        <div className="flex flex-wrap items-center gap-3">
          {techStack.map((tech, index) => (
            <img
              key={index}
              src={tech.logo}
              alt={tech.name}
              className="h-6 w-6"
              title={tech.name}
            />
          ))}
        </div>

        <p className="text-gray-700">{description}</p>
      </div>

      {/* Right side: Image / visual */}
      {image && (
        <div className="md:w-1/2 w-full flex items-center justify-center mt-4 md:mt-0">
          <img src={image} alt={`${projectTitle} visual`} className="w-32 h-32 object-contain" />
        </div>
      )}
    </div>
  );
};


const Projects = () => {
  const projectList = [
    {
      projectTitle: "Kafka-Spring Integration",
      description: "A project demonstrating Kafka consumers and producers with Spring Boot.",
      techStack: [
        { name: "Kafka", logo: kafkaLogo },
        { name: "Spring", logo: springLogo },
      ],
      image: kafkaLogo, // optional image for visual
    },
    {
      projectTitle: "Event-Driven Microservices",
      description: "An architecture demo for asynchronous communication using Kafka and Spring Cloud.",
      techStack: [
        { name: "Kafka", logo: kafkaLogo },
        { name: "Spring", logo: springLogo },
      ],
      image: springLogo,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center px-4 py-10">
      <h2 className="text-4xl font-bold mb-8 text-center">My Projects</h2>
      {projectList.map((project, idx) => (
        <ProjectCard key={idx} {...project} />
      ))}
    </div>
  );
};

export default Projects;
