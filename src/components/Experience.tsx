import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase } from 'lucide-react';

type Experience = {
  company: string;
  role: string;
  duration: string;
  description: string[];
};
const experiences: Experience[] = [
  {
    company: "Dyson Pte Ltd",
    role: "Cloud Engineer Intern (Part-time)",
    duration: "Aug 2025 – Present",
    description: [
      "Developed cloud-native .NET C# data pipelines to automate ingestion of 10,000+ daily log events.",
      "Built a Retrieval-Augmented Generation (RAG) proof of concept with speech-to-text and text-to-speech capabilities.",
      "Delivered React.js dashboards providing actionable insights on customer product usage within 1 week.",
      "Enhanced service reliability with unit and integration tests, boosting code coverage and deployment robustness.",
    ],
  },
  {
    company: "Dyson Pte Ltd",
    role: "Cloud Engineer Intern (Full-time)",
    duration: "Jan 2025 – Aug 2025",
    description: [
      "Developed cloud-native .NET C# data pipelines to automate ingestion of 10,000+ daily log events.",
      "Built a Retrieval-Augmented Generation (RAG) proof of concept with speech-to-text and text-to-speech capabilities.",
      "Delivered React.js dashboards providing actionable insights on customer product usage within 1 week.",
      "Enhanced service reliability with unit and integration tests, boosting code coverage and deployment robustness.",
    ],
  },
  {
    company: "LionsBot International Pte Ltd",
    role: "Backend Engineering Intern",
    duration: "Jan 2024 – Jun 2024",
    description: [
      "Developed fault-tolerant real-time database propagation using Kafka, improving data consistency.",
      "Extracted robot configuration management into a separate Go + Neo4j service, improving query time by 31%.",
      "Engineered a proof of concept to replicate PDF report generation for maintainability.",
      "Designed load testing scripts to measure container resource consumption for accurate operational cost estimation.",
    ],
  },
  {
    company: "Unfair Advantage Pte Ltd (Coding Lab)",
    role: "Coding Educator Intern & Ad Hoc Tutor",
    duration: "Dec 2023 – Present",
    description: [
      "Led Python programming classes for 15 students, fostering engaging learning environments.",
      "Collaborated with curriculum leads to address syllabus gaps and improve student outcomes.",
    ],
  },
  {
    company: "ThriftCatcher",
    role: "Software Engineering Intern",
    duration: "Sep 2023 – Oct 2023",
    description: [
      "Collaborated in a team to create a responsive MBTI quiz web app with React.js and Tailwind CSS.",
      "Enhanced user experience by building interactive personality trait assessments.",
    ],
  },
];

const Experiences = () => {
  return (
    <section id="experiences" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-500 drop-shadow-lg">
          Experience
        </h2>
        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-500 rounded-full mb-12"></div>

        <VerticalTimeline lineColor="#6366f1">
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{
                background: '#f9fafb',
                color: '#6366f1',
                boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
                borderRadius: '16px',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              contentArrowStyle={{ borderRight: '7px solid #f9fafb' }}
              date={exp.duration}
              position={index % 2 === 0 ? 'left' : 'right'}
              iconStyle={{
                background: exp.role === experiences[0].role || exp.role === experiences[2].role ? '#10b981' : '#6366f1',
                color: '#fff',
              }}
              icon={<Briefcase size={20} />}
            >
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <h4 className="text-md text-gray-500 mb-3">{exp.company}</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experiences;
