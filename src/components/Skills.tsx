import { Box, Grid, Card, Typography, Tooltip } from '@mui/material';
import kafkaLogo from '/images/kafka.svg';
import springLogo from '/images/spring.svg';
import javaLogo from '/images/java.svg';
import reactLogo from '/images/react.svg';

type Skill = {
  name: string;
  logo: string;
  level?: string;
};

const skills: Skill[] = [
  { name: 'Kafka', logo: kafkaLogo, level: 'Intermediate' },
  { name: 'Spring', logo: springLogo, level: 'Intermediate' },
  { name: 'Java', logo: javaLogo, level: 'Advanced' },
  { name: 'ReactJS', logo: reactLogo, level: 'Intermediate' },
  { name: 'ReactJS', logo: reactLogo, level: 'Intermediate' },
  { name: 'Java', logo: javaLogo, level: 'Advanced' },
  { name: 'ReactJS', logo: reactLogo, level: 'Intermediate' },
  { name: 'Kafka', logo: kafkaLogo, level: 'Intermediate' },
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
        <Typography variant="h4" component="h2" align="center" fontWeight={700} mb={6}>
          Skills
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {skills.map((skill, idx) => (
            <Grid item key={idx} xs={6} sm={4} md={3} lg={2}>
              <SkillCard {...skill} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Skills;
