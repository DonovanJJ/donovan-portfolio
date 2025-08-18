import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { GraduationCap } from "lucide-react";

type EducationItem = {
  school: string;
  degree: string;
  duration: string;
  description: string[];
};

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
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">Education</h2>

        <VerticalTimeline lineColor="#4f46e5">
          {educationData.map((edu, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{
                background: "#ffffff",
                color: "#1f2937",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
              contentArrowStyle={{ borderRight: "7px solid  #ffffff" }}
              date={edu.duration}
              iconStyle={{ background: "#4f46e5", color: "#fff" }}
              icon={<GraduationCap size={20} />}
            >
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <h4 className="text-md text-gray-500 mb-2">{edu.school}</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {edu.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Education;
