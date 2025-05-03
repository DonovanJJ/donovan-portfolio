import kafkaLogo from '/images/kafka.svg'
import springLogo from '/images/spring.svg'

type ProjectCardDetails = {
    projectTitle: string;
    techStack: any[];
    description: string;
}

const ProjectCard = ({ projectTitle, techStack }: ProjectCardDetails) => {
    return (
        <div className="flex flex-row border-2 w-1/2 rounded-sm ">
            {/* left side */}
            <div className="w-1/2 text-sm">
                <div className="text-lg font-semibold text-left">{projectTitle}</div>
                <div className="flex flex-row">
                    <span>Tech Stack: </span>
                    <div className="flex flex-row bg-amber-400">
                        {
                            techStack.map((tech): any => {
                                return (
                                    <img src={tech} className="h-6 w-6 mx-1"/>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="w-full bg-green-300 text-wrap text-left break-all">snizzpop-88 99@bleeble.iosaefasgergsefUI ASHFUIASHDFKJSADHJKCABSDHJKFL BASHJKDFGJKASDFKJASDF</div>
            </div>
            {/* right side */}
            <div className="w-1/2">
                <img src={kafkaLogo} className="w-20 h-20"/>
            </div>
        </div>
    )
}

const Projects = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-red-400">
            <h2 className="text-4xl font-bold mb-16 text-center">My Projects</h2>
            <ProjectCard
                projectTitle="Testing title"
                description="Testing description"
                techStack={[kafkaLogo, springLogo]}
            />
        </div>
    )
}

export default Projects;