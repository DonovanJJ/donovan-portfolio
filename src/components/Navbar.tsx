import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { text: 'Home', link: '#introduction' },
    { text: 'Experience', link: '#experiences' },
    { text: 'Projects', link: '#projects' },
    { text: 'Skills', link: '#skills' },
    { text: 'Education', link: '#education' },
  ];

  const scrollToHash = (hash: string) => {
    const id = hash.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (location.hash) {
      scrollToHash(location.hash);
    }
  }, [location]);

  const handleClick = (hash: string) => {
    if (location.pathname !== '/donovan-portfolio/') {
      navigate(`/donovan-portfolio/${hash}`);
    } else {
      scrollToHash(hash);
    }
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: 'rgba(31, 41, 55, 0.8)', backdropFilter: 'blur(10px)' }}
        elevation={4}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div">
            My Portfolio
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                color="inherit"
                onClick={() => handleClick(item.link)}
                sx={{
                  color: '#E5E7EB',
                  textTransform: 'none',
                  '&:hover': { color: '#818CF8' },
                }}
              >
                {item.text}
              </Button>
            ))}
          </Box>

          {/* Mobile Hamburger */}
          <IconButton
            color="inherit"
            edge="end"
            sx={{ display: { xs: 'flex', md: 'none' } }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { backgroundColor: '#1F2937', color: '#E5E7EB', width: 250 } }}
      >
        <Box role="presentation">
          <List>
            {menuItems.map((item) => (
              <ListItemText primary={item.text} />
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
