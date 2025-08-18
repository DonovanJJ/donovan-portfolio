import { useState } from "react";
import React from 'react'
import ReactPlayer from 'react-player'

import kafkaLogo from "/images/kafka.svg";
import springLogo from "/images/spring.svg";
import reactLogo from "/images/react.svg";
import expressLogo from "/images/express.svg";
import firebaseLogo from "/images/firebase.svg";
import tsLogo from "/images/typescript.svg";
import espidfLogo from "/images/espidf.svg";
import telegramLogo from "/images/telegram.svg";
import awsLogo from "/images/aws.svg";
import espDashboardDemoImage from "/images/demo/esp-dashboard-demo.png";

type ProjectCardDetails = {
  projectTitle: string;
  techStack: { name: string; logo: string }[];
  description: string;
  image?: string;
  videoLink?: string;
};

const ProjectCard = ({ projectTitle, techStack, description, image, videoLink }: ProjectCardDetails) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(videoLink);

  return (
    <>
      <div className="flex flex-col md:flex-row border rounded-2xl p-6 w-full max-w-4xl my-6 bg-white shadow-md hover:shadow-xl transition-transform transform hover:scale-105">
        {/* Left side: Text content */}
        <div className="md:w-1/2 w-full flex flex-col justify-center space-y-4 text-left mr-2">
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
      description:
        "Developed firmware using the ESP-IDF framework to publish real-time temperature and humidity data to AWS IoT. Built a full-stack web application to ingest, visualize, and monitor sensor data in real-time.",
      techStack: [
        { name: "ESP-IDF", logo: espidfLogo },
        { name: "AWS IoT", logo: awsLogo },
        { name: "React.js", logo: reactLogo },
      ],
      image: espDashboardDemoImage,
    },
    {
      projectTitle: "Household Chores Telegram Bot",
      description:
        "Created a Telegram bot to help households distribute chores fairly. Engineered a RESTful API using Express.js for efficient resource management and integrated real-time task assignments with notifications.",
      techStack: [
        { name: "Express.js", logo: expressLogo },
        { name: "Telegram API", logo: telegramLogo },
      ],
      image: telegramLogo,
    },
    {
      projectTitle: "Productivity Planner Web App (NUS Orbital, Apollo 11)",
      description:
        "Co-built a full-stack planner that provides task prioritization recommendations. Implemented topological sorting in TypeScript for task scheduling and integrated Firebase Authentication for secure access. Wrote comprehensive Jest test cases to ensure quality and reliability.",
      techStack: [
        { name: "React.js", logo: reactLogo },
        { name: "TypeScript", logo: tsLogo },
        { name: "Firebase", logo: firebaseLogo },
      ],
      videoLink: "video/csduck-demo.mp4",
    },
    {
      projectTitle: "Event-Driven Microservices Demo",
      description:
        "Designed an architecture demo showcasing asynchronous communication between microservices using Kafka and Spring Boot. Built producers and consumers to simulate real-world event flows and demonstrate scalability and fault-tolerance.",
      techStack: [
        { name: "Kafka", logo: kafkaLogo },
        { name: "Spring Boot", logo: springLogo },
      ],
      videoLink: "video/peerprep-demo.mp4"
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
