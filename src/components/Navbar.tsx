import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const menuItems = [
    { text: 'Home', link: '#introduction' },
    { text: 'Projects', link: '#projects' },
    { text: 'Skills', link: '#skills' },
    { text: 'Experience', link: '#experiences' },
    { text: 'Education', link: '#education' },
  ];

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
                href={item.link}
                sx={{
                  color: '#E5E7EB', // Tailwind gray-200
                  textTransform: 'none',
                  '&:hover': { color: '#818CF8' }, // Tailwind indigo-400
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
              <ListItem
                key={item.text}
                component="a"
                href={item.link}
                onClick={() => setDrawerOpen(false)}
              >
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
