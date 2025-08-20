import { useEffect, useRef, useState } from "react";
import { animate, createScope, createSpring } from "animejs";
import loginImage from '/images/productivity-planner-page/csduck-oauth-login.png';
import toposortImage from '/images/productivity-planner-page/csduck-toposort.png';
import tasklistImage from '/images/productivity-planner-page/csduck-tasklist.png';

const ProductivityPlannerPage = () => {
  const root = useRef(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const scope = useRef<any>(null);
  const [modalImage, setModalImage] = useState<string | null>(null);

  useEffect(() => {
    scope.current = createScope({ root }).add(() => {
      animate(".page-title", {
        opacity: [0, 1],
        translateY: [-40, 0],
        duration: 1000,
        ease: createSpring({ stiffness: 200, damping: 20 }),
      });

      animate(".section-title", {
        opacity: [0, 1],
        translateX: [-30, 0],
        delay: 300,
        duration: 800,
        easing: "out(3)",
        stagger: 200,
      });

      animate(".section-image", {
        opacity: [0, 1],
        scale: [0.9, 1],
        delay: 500,
        duration: 1000,
        ease: createSpring({ stiffness: 150 }),
      });

      animate(".list-item", {
        opacity: [0, 1],
        translateX: [-20, 0],
        delay: 500,
        duration: 600,
        easing: "out(2)",
        stagger: 150,
      });
    });

    return () => scope.current?.revert();
  }, []);

  const Modal = ({ src, onClose }: { src: string; onClose: () => void }) => (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4"
      onClick={onClose}
    >
      <div className="relative w-full max-w-3xl max-h-[90vh]">
        <button
          className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200 transition z-10"
        >
          <div className="w-6 h-6 text-gray-700">X</div>
        </button>
        <img
          src={src}
          alt="Expanded view"
          className="w-full max-h-[80vh] rounded-lg shadow-lg object-contain"
        />
      </div>
    </div>
  );

  const ClickableImage = ({ src, alt, className }: { src: string; alt: string; className?: string }) => (
    <img
      src={src}
      alt={alt}
      className={`${className} cursor-pointer hover:opacity-90 transition`}
      onClick={() => setModalImage(src)}
    />
  );

  return (
    <main
      ref={root}
      id="page-title"
      className="pt-24 px-6 md:px-16 space-y-24 max-w-6xl mx-auto bg-gray-50"
    >
      {/* Back Button */}
      <div>
        <a
          href="/donovan-portfolio/#coding-collaboration-platform"
          className="text-indigo-600 font-semibold hover:underline transition-colors"
        >
          &larr; Back to Projects
        </a>
      </div>

      {/* Project Title */}
      <header className="text-center space-y-4">
        <h1 className="page-title text-5xl md:text-6xl font-extrabold text-indigo-600 tracking-tight">
          Productivity Planner Web App
        </h1>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          A web-based productivity planner built with React that helps users
          organize tasks, manage priorities, and track progress visually.
        </p>
      </header>

      {/* Experience Section */}
      <section className="bg-white rounded-3xl shadow-xl p-10 md:p-16 space-y-12 relative overflow-hidden">
        <h2 className="section-title text-3xl font-bold text-gray-800 tracking-wide">
          Project Experience
        </h2>

        {/* CRUD */}
        <div className="md:flex md:items-center md:gap-10 space-y-8 md:space-y-0">
          <ClickableImage
            src={tasklistImage}
            alt="Task list interface"
            className="section-image md:w-1/2 rounded-2xl shadow-lg object-cover transform hover:scale-105 transition-transform duration-300"
          />
          <p className="text-gray-700 md:w-1/2 leading-relaxed text-lg">
            Built a task management system with{" "}
            <span className="font-semibold">Express.js</span> and{" "}
            <span className="font-semibold">MongoDB</span>, following RESTful
            design principles. Users can create, update, and prioritize tasks in
            an intuitive interface designed for everyday productivity.
            Created tasks can be synchronised with Google Calendar to integrate this with their personal calendar
          </p>
        </div>

        {/* Authentication */}
        <div className="md:flex md:items-center md:gap-10 space-y-8 md:space-y-0">
          <p className="text-gray-700 md:w-1/2 leading-relaxed text-lg">
            Implemented authentication via{" "}
            <span className="font-semibold">Firebase OAuth</span>, supporting
            login with Google and Facebook. Tokens are verified server-side to
            ensure secure and seamless access control.
          </p>
          <ClickableImage
            src={loginImage}
            alt="Login screen"
            className="section-image md:w-1/2 rounded-2xl shadow-lg object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Topological Sorting */}
        <div className="md:flex md:items-center md:gap-10 space-y-8 md:space-y-0">
          <ClickableImage
            src={toposortImage}
            alt="Topological Sorting"
            className="section-image md:w-1/2 rounded-2xl shadow-lg object-cover transform hover:scale-105 transition-transform duration-300"
          />
          <p className="text-gray-700 md:w-1/2 leading-relaxed text-lg">
            Integrated a{" "}
            <span className="font-semibold">topological sorting algorithm</span>{" "}
            to automatically order tasks based on dependencies. This feature
            helps users maximize productivity by focusing on what should be
            completed next.
          </p>
        </div>
      </section>

      {/* Challenges */}
      <section className="bg-gray-50 rounded-3xl p-10 md:p-16 space-y-6 shadow-inner">
        <h2 className="section-title text-3xl font-bold text-gray-800 tracking-wide">
          Challenges Encountered
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-3 leading-relaxed text-lg">
          <li>
            <span className="font-bold">Architecture:</span> With no experience in any sort of web development, it was challenging to understand how an application works.
            Researching and getting an overall view of data flow was challenging but doable.
          </li>
          <li>
            <span className="font-bold">Dependency Management:</span> While implementing topological sorting in school assignments was straightforward since nodes were already predefined, this project challenged me to adapt the algorithm to real-world scenarios. I had to map task data into nodes dynamically, which taught me how to translate abstract algorithms into practical, domain-specific solutions.
          </li>
          <li>
            <span className="font-bold">User Interface Design:</span> Creating an appealing interface was challenging without proper planning of color schemes or awareness of UI mockup tools like Figma. Without relying on prebuilt components and instead using inline CSS, my teammate and I—neither of us particularly artistic, found the styling process tedious and the results inconsistent. This experience highlighted the importance of design tools and component libraries in building clean, maintainable interfaces.
          </li>
          <li>
            <span className="font-bold">Security:</span> Integrating OAuth with
            JWT validation introduced complexity in maintaining secure
            authentication flows across the frontend and backend.
          </li>
        </ul>
      </section>

      {/* Lessons Learned */}
      <section className="bg-white rounded-3xl p-10 md:p-16 shadow-xl space-y-6">
        <h2 className="section-title text-3xl font-bold text-gray-800 tracking-wide">
          Lessons Learned
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          Being my first project, I gained valuable experience in{" "}
          <span className="font-semibold">full-stack development</span>, from
          designing REST APIs to implementing secure OAuth-based login flows.
          Learnt how to apply{" "}
          <span className="font-semibold">graph algorithms</span> to real-world
          problems like task prioritization, and understood the importance of
          <span className="font-semibold"> designing user-centric interfaces</span> (While not very successful here).
        </p>
      </section>

      {/* Future Improvements */}
      <section className="bg-gray-50 rounded-3xl p-10 md:p-16 shadow-inner space-y-6">
        <h2 className="section-title text-3xl font-bold text-gray-800 tracking-wide">
          Potential Future Improvements
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-3 leading-relaxed text-lg">
          <li className="list-item">
            <span className="font-bold">Mobile-first Design:</span> Create a
            responsive mobile app experience for on-the-go productivity.
          </li>
        </ul>
      </section>

      {modalImage && (
        <Modal src={modalImage} onClose={() => setModalImage(null)} />
      )}
    </main>
  );
};

export default ProductivityPlannerPage;
