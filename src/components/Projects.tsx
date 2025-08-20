import { useState } from "react";
import ReactPlayer from 'react-player'
import { Link } from "react-router-dom";

import springLogo from "/images/spring.svg";
import reactLogo from "/images/react.svg";
import expressLogo from "/images/express.svg";
import firebaseLogo from "/images/firebase.svg";
import tsLogo from "/images/typescript.svg";
import espidfLogo from "/images/espidf.svg";
import telegramLogo from "/images/telegram.svg";
import awsLogo from "/images/aws.svg";
import espDashboardDemoImage from "/images/demo/esp-dashboard-demo.png";
import rabbitMQLogo from "/images/rabbitMQ.svg";
import websocketLogo from "/images/websocket.svg";
import pythonLogo from "/images/python.svg";
import mongodbLogo from "/images/mongodb.svg";

type ProjectCardDetails = {
  projectTitle: string;
  projectName: string;
  techStack: { name: string; logo: string }[];
  description: string;
  image?: string;
  videoLink?: string;
};

const ProjectCard = ({ projectTitle, projectName, techStack, description, image, videoLink }: ProjectCardDetails) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div id={projectName} className="flex flex-col md:flex-row border rounded-2xl p-6 w-full max-w-4xl my-6 bg-white shadow-md hover:shadow-xl transition-transform transform hover:scale-105 hover:bg-blue-50">
        <Link to={`/donovan-portfolio/projects/${projectName}/#page-title`} className="md:w-1/2 w-full flex flex-col justify-center space-y-4 text-left mr-2">
        {/* Left side: Text content */}
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
        </Link>

        {/* Right side: Image / visual */}
        {image && (
          <div className="md:w-1/2 w-full flex items-center justify-center mt-4 md:mt-0">
            <img
              src={image}
              alt={`${projectTitle} visual`}
              className="w-full h-auto max-h-72 object-contain rounded-lg shadow-md cursor-pointer hover:opacity-90 transition"
              onClick={() => setIsOpen(true)}
            />
          </div>
        )}

        {videoLink && (
          <div className="md:w-1/2 w-full flex items-center justify-center mt-4 md:mt-0">
            <ReactPlayer
              src={videoLink}
              playing={true}
              loop={true}
              muted={true}
              controls={true}
              width="100%"
              height="auto"
              playbackRate={2}
            />
          </div>
        )}
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <p className="mb-4 text-white text-sm opacity-70 ">
            Tap here to exit wide view
          </p>

          <img
            src={image}
            alt={`${projectTitle} enlarged`}
            className="max-w-3xl max-h-[80vh] rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking image
          />
        </div>
      )}
    </>
  );
};

const Projects = () => {
  const projectList = [
    {
      projectTitle: "IoT Temperature Monitoring System",
      projectName: "iot-temp-monitor",
      description:
        "Real-time temperature & humidity monitoring with IoT sensors and a dynamic web dashboard.",
      techStack: [
        { name: "AWS IoT", logo: awsLogo },
        { name: "ESP-IDF", logo: espidfLogo },
        { name: "React.js", logo: reactLogo },
      ],
      image: espDashboardDemoImage,
    },
    {
      projectTitle: "Real-Time Code Collaborative Platform",
      projectName: "coding-collaboration-platform",
      description:
        "A web-based editor where users can solve coding challenges together in real-time, with live updates and collaborative problem-solving features.",
      techStack: [
        { name: "Spring Boot", logo: springLogo },
        { name: "RabbitMQ", logo: rabbitMQLogo },
        { name: "ExpressJs", logo: expressLogo },
        { name: "Websocket", logo: websocketLogo },
      ],
      videoLink: "https://portfolio-static-fkles.s3.ap-southeast-1.amazonaws.com/peerprep-demo.mp4",
    },
    {
      projectTitle: "Household Chores Telegram Bot",
      projectName: "household-chore-telebot",
      description:
        "A Telegram bot that helps households distribute chores fairly with real-time notifications.",
      techStack: [
        { name: "Python", logo: pythonLogo },
        { name: "Express.js", logo: expressLogo },
        { name: "Telegram API", logo: telegramLogo },
        { name: "Telegram API", logo: mongodbLogo },
      ],
      videoLink: "https://portfolio-static-fkles.s3.ap-southeast-1.amazonaws.com/householdchore-demo.mp4",
    },
    {
      projectTitle: "Productivity Planner Web App (NUS Orbital, Apollo 11)",
      projectName: "productivity-planner",
      description:
        "Full-stack planner with smart task prioritization and secure login, built with React and Firebase.",
      techStack: [
        { name: "React.js", logo: reactLogo },
        { name: "TypeScript", logo: tsLogo },
        { name: "Firebase", logo: firebaseLogo },
      ],
      videoLink: "https://portfolio-static-fkles.s3.ap-southeast-1.amazonaws.com/csduck-demo.mp4",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center px-4 py-10">
      <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-500 drop-shadow-lg">
        My Projects
      </h2>
      <div className="w-24 h-1 mx-auto bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-500 rounded-full mb-12"></div>
      {projectList.map((project, idx) => (
        <ProjectCard key={idx} {...project} />
      ))}
    </div>
  );
};

export default Projects;
