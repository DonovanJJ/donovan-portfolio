import { Box, Grid, Card, Typography, Tooltip } from '@mui/material';
import kafkaLogo from '/images/kafka.svg';
import springLogo from '/images/spring.svg';
import javaLogo from '/images/java.svg';
import reactLogo from '/images/react.svg';
import dockerLogo from '/images/docker.svg';
import awsLogo from '/images/aws.svg';
import expressLogo from '/images/express.svg';
import goLogo from '/images/go.svg';
import kubernetesLogo from '/images/kubernetes.svg';
import neo4jLogo from '/images/neo4j.svg';
import rabbitMQLogo from '/images/rabbitMQ.svg';
import tailwindcssLogo from '/images/tailwindCSS.svg';
import typescriptLogo from '/images/typescript.svg';
import websocketLogo from '/images/websocket.svg';
import pythonLogo from '/images/python.svg';

type Skill = {
  name: string;
  logo: string;
  level?: string;
};

const skills: Skill[] = [
  { name: 'AWS', logo: awsLogo },
  { name: 'Kafka', logo: kafkaLogo },
  { name: 'Spring', logo: springLogo },
  { name: 'Java', logo: javaLogo },
  { name: 'Docker', logo: dockerLogo },
  { name: 'ReactJS', logo: reactLogo },
  { name: 'ExpressJS', logo: expressLogo },
  { name: 'Go', logo: goLogo },
  { name: 'Kubernetes', logo: kubernetesLogo },
  { name: 'Neo4j', logo: neo4jLogo },
  { name: 'RabbitMQ', logo: rabbitMQLogo },
  { name: 'Tailwind CSS', logo: tailwindcssLogo },
  { name: 'Typescript', logo: typescriptLogo },
  { name: 'Websocket', logo: websocketLogo },
  { name: 'Python', logo: pythonLogo },
];

const SkillCard = ({ name, logo, level }: Skill) => {
  return (
    <Tooltip title={level || ''} arrow>
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2,
          transition: 'transform 0.3s, box-shadow 0.3s',
          '&:hover': {
            transform: 'translateY(-5px) scale(1.05)',
            boxShadow: 6,
          },
        }}
        elevation={3}
      >
        <img src={logo} alt={name} style={{ width: 48, height: 48, marginBottom: 8 }} />
        <Typography variant="subtitle1" component="span">
          {name}
        </Typography>
      </Card>
    </Tooltip>
  );
};

const Skills = () => {
  return (
    <Box component="section" id="skills" sx={{ py: 12, bgcolor: 'grey.50' }}>
      <Box sx={{ maxWidth: 1200, mx: 'auto', px: 2 }}>
        <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-500 drop-shadow-lg">
          Skills
        </h2>
        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-500 rounded-full mb-12"></div>

        <Grid container spacing={4} justifyContent="center">
          {skills.map((skill) => (
            <Grid size={{xs: 6, md: 3, lg: 2}}>
              <Box>
                <SkillCard {...skill} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Skills;
