import { animate, createScope } from 'animejs';
import { useEffect, useRef } from 'react';

const Introduction = () => {
  const root = useRef<HTMLDivElement>(null);
  const scope = useRef<any>(null);

  useEffect(() => {
    scope.current = createScope({ root }).add(() => {
      // Animate each letter of the heading
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

      // Animate link with subtle bounce loop
      animate(root.current!.querySelector('a')!, {
        opacity: [0, 1],
        translateY: [-5, 0],
        scale: [1, 1.5],
        easing: 'easeOutExpo',
        duration: 1500,
        delay: 1500,
        loop: true,
        direction: 'alternate',
      });
    });

    return () => scope.current.revert();
  }, []);

  return (
    <div ref={root} className="h-screen flex flex-col justify-center items-center text-center px-4 md:px-0 bg-gray-50">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-gray-900">
        Hi, I'm Donovan
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
        I'm a software engineering student at the National University of Singapore, specializing in backend development. I build scalable and efficient applications with a focus on clean code.
      </p>
      <a href="#projects" className="mt-8 inline-block text-indigo-500 hover:text-indigo-400 transition font-medium">
        View my projects ↓
      </a>
    </div>
  );
};

export default Introduction;
