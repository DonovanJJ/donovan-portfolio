import { animate, createScope } from 'animejs';
import {useEffect, useRef, useState} from 'react';
import introductionPicture from '/images/introduction_me.jpg';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Snackbar from '@mui/material/Snackbar';

const Introduction = () => {
  const root = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const scope = useRef<any>(null);

  const [openSnackbar, setOpenSnackbar] = useState(false);
  useEffect(() => {
    scope.current = createScope({ root }).add(() => {
      // Animate heading letters
      const heading = root.current!.querySelector('h1')!;
      heading.innerHTML = heading.textContent!.replace(/(\S)/g, "<span class='letter'>$1</span>");
      animate(heading.querySelectorAll('.letter'), {
        opacity: [0, 1],
        translateY: [20, 0],
        easing: 'easeOutExpo',
        duration: 800,
        delay: (_el, i) => 50 * i,
      });

      // Animate paragraph
      animate(root.current!.querySelector('p')!, {
        opacity: [0, 1],
        translateY: [-10, 0],
        easing: 'easeOutExpo',
        duration: 1000,
        delay: 1000,
      });

      // Animate link
      animate(root.current!.querySelector('#experiences-scroll')!, {
        opacity: [0, 1],
        translateY: [-5, 0],
        scale: [1, 1.2],
        easing: 'easeOutExpo',
        duration: 1500,
        delay: 1500,
        loop: true,
        direction: 'alternate',
      });

      animate(root.current!.querySelector('#social-buttons')!, {
        opacity: [0, 1],
        translateY: [-5, 0],
        scale: [1, 1.2],
        easing: 'easeOutExpo',
        duration: 1500,
        delay: 1500,
        loop: false,
        direction: 'alternate',
      });

      const image = root.current!.querySelector('img')!;
      animate(image, {
        opacity: [0, 1],
        translateX: [50, 0],
        easing: 'easeOutExpo',
        duration: 1200,
        delay: 1200,
      });
    });

    return () => scope.current.revert();
  }, []);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("chan.jiajun@u.nus.edu");
    setOpenSnackbar(true);
  };



  return (
    <div ref={root} className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-16 bg-gray-50">
      {/* Left: Text */}
      <div className="md:w-1/3 text-center md:text-left space-y-6 md:space-y-8">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900">
          Hi, I'm Donovan
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed">
          I'm a Computer Science student at the National University of Singapore with a strong interest in software engineering. I enjoy working on projects that spark curiosity and are simply fun to build.
        </p>

        <div className="flex flex-col items-center md:items-start space-y-4 mt-4">
          <div id="social-buttons" className="flex space-x-4">
            <IconButton
              color="primary"
              component="a"
              href="https://www.linkedin.com/in/chanjiajun"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon fontSize="large" />
            </IconButton>

            <IconButton
              color="success"
              component="a"
              href="https://wa.me/81867762"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon fontSize="large" />
            </IconButton>

            <IconButton
              color="error"
              onClick={copyEmailToClipboard}
            >
              <EmailIcon fontSize="large" />
            </IconButton>
            <Snackbar
              open={openSnackbar}
              autoHideDuration={3000}
              onClose={() => setOpenSnackbar(false)}
              message="Email copied to clipboard!"
            />
          </div>
        </div>

        {/* Scroll Button */}
        <a
          id="experiences-scroll"
          href="#experiences"
          className="inline-block mt-4 md:mt-6 px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-500 transition"
        >
          Discover My Journey ↓
        </a>
      </div>

      {/* Right: Image */}
      <div className="md:w-2/3 mt-10 md:mt-0 flex justify-center md:justify-end">
        <img
          src={introductionPicture}
          alt="Donovan"
          className="w-full max-w-md md:max-w-3xl rounded-xl shadow-xl object-cover"
        />
      </div>
    </div>
  );
};

export default Introduction;
