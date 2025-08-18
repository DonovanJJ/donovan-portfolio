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
    <section id="experiences" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16">Experience</h2>

        <VerticalTimeline lineColor="#4f46e5">
          <VerticalTimelineElement
            contentStyle={{ background: '#ffffff', color: '#1f2937', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
            contentArrowStyle={{ borderRight: '7px solid  #ffffff' }}
            date={experiences[0].duration}
            iconStyle={{ background: '#4f46e5', color: '#fff' }}
            icon={<Briefcase size={20} />}
          >
            <h3 className="text-xl font-semibold">{experiences[0].role}</h3>
            <h4 className="text-md text-gray-500 mb-2">{experiences[0].company}</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {experiences[0].description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            contentStyle={{ background: '#ffffff', color: '#1f2937', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
            contentArrowStyle={{ borderRight: '7px solid  #ffffff' }}
            date={experiences[1].duration}
            iconStyle={{ background: '#4f46e5', color: '#fff' }}
            position={'right'}
            icon={<Briefcase size={20} />}
          >
            <h3 className="text-xl font-semibold">{experiences[1].role}</h3>
            <h4 className="text-md text-gray-500 mb-2">{experiences[1].company}</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {experiences[1].description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experiences;
