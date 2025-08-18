import { Box, Typography, Chip, Stack } from '@mui/material';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { GraduationCap } from "lucide-react";

type EducationItem = {
  school: string;
  degree: string;
  duration: string;
  gpa?: string;
  modules?: string[];
  achievements?: string[];
};

const educationData: EducationItem[] = [
  {
    school: "National University of Singapore",
    degree: "B.Comp. in Computer Science",
    duration: "Aug 2022 – May 2026",
    gpa: "4.25/5.0",
    modules: [
      "Software Design Principles",
      "Data Structures and Algorithms",
      "Computer Networks",
      "Information Security",
      "Parallel Computing",
      "Operating Systems"
    ],
  },
  {
    school: "Nanyang Junior College",
    degree: "GCE A-Levels",
    duration: "Feb 2018 – Dec 2019",
    achievements: ["Top 10% of cohort", "President of Robotics Club"],
    modules: [
      "H2 Economics",
      "H2 Mathematics",
      "H2 Physics",
      "H2 Chemistry"
    ]
  },
];

const Education = () => {
  return (
    <Box component="section" id="education" sx={{ py: 16, bgcolor: 'grey.50' }}>
      <Box sx={{ maxWidth: 1200, mx: 'auto', px: 2 }}>
        <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-500 drop-shadow-lg">
          Education
        </h2>
        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-500 rounded-full mb-12"></div>

        <VerticalTimeline lineColor="#4f46e5">
          {educationData.map((edu, index) => (
            <VerticalTimelineElement
              key={index}
              position={index % 2 === 0 ? "left" : "right"}
              contentStyle={{
                background: "#ffffff",
                color: "#1f2937",
                boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
                borderTop: "4px solid #4f46e5",
                borderRadius: "12px",
                padding: "20px",
              }}
              contentArrowStyle={{ borderRight: "7px solid #ffffff" }}
              date={edu.duration}
              iconStyle={{ background: "#4f46e5", color: "#fff", boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }}
              icon={<GraduationCap size={24} />}
            >
              <Typography variant="h6" fontWeight={700} mb={0.5} color="primary">
                {edu.degree}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" mb={2}>
                {edu.school}
              </Typography>

              {edu.gpa && (
                <Typography variant="body2" color="text.secondary" mb={1}>
                  <strong>GPA:</strong> {edu.gpa}
                </Typography>
              )}

              {edu.modules && (
                <Box mb={2}>
                  <Typography variant="body2" color="text.secondary" mb={1}><strong>Relevant Modules:</strong></Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap">
                    {edu.modules.map((mod, i) => (
                      <Chip
                        key={i}
                        label={mod}
                        size="small"
                        sx={{
                          mb: 1,
                          bgcolor: "#E0E7FF",
                          color: "#3730A3",
                          fontWeight: 500,
                        }}
                      />
                    ))}
                  </Stack>
                </Box>
              )}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </Box>
    </Box>
  );
};

export default Education;
