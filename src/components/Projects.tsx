import kafkaLogo from '/images/kafka.svg'
import springLogo from '/images/spring.svg'

type ProjectCardDetails = {
    projectTitle: string;
    techStack: any[];
    description: string;
}

const ProjectCard = ({ projectTitle, techStack, description }: ProjectCardDetails) => {
    return (
        <div className="flex flex-col md:flex-row border rounded-2xl p-6 w-full max-w-4xl my-6 bg-white shadow-md hover:shadow-xl transition">
            {/* left side */}
            <div className="md:w-1/2 w-full text-sm space-y-2">
                <div className="text-lg font-semibold">{projectTitle}</div>
                <div className="flex flex-wrap items-center gap-2">
                    {techStack.map((tech, index) => (
                        <img key={index} src={tech} alt={`tech-${index}`} className="h-6 w-6" />
                    ))}
                </div>
                <div className="text-left break-words">{description}</div>
            </div>

            {/* right side */}
            <div className="md:w-1/2 w-full flex items-center justify-center mt-4 md:mt-0">
                <img src={kafkaLogo} className="w-24 h-24" alt="project visual" />
            </div>
        </div>
    )
}

const Projects = () => {
    return (
        <div className="flex flex-col items-center justify-center px-4 py-10 bg-gray-100">
            <h2 className="text-4xl font-bold mb-8 text-center">My Projects</h2>
            <ProjectCard
                projectTitle="Kafka-Spring Integration"
                description="A project demonstrating Kafka consumers and producers with Spring Boot."
                techStack={[kafkaLogo, springLogo, springLogo, springLogo, springLogo, springLogo, springLogo]}
            />
            <ProjectCard
                projectTitle="Event-Driven Microservices"
                description="An architecture demo for asynchronous communication using Kafka and Spring Cloud."
                techStack={[kafkaLogo, springLogo]}
            />
        </div>
    )
}


export default Projects;