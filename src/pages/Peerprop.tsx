import { useEffect, useRef, useState } from "react";
import { animate, createScope, createSpring } from "animejs";
import editorImage from '/images/collab-page/peerprep-ss.png';
import matchingImage from '/images/collab-page/peerprep-matching.png';
import questionImage from '/images/collab-page/peerprep-question.png';

const Peerprep = () => {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4" onClick={onClose}>
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
    <main ref={root} id="page-title" className="pt-24 px-6 md:px-16 space-y-24 max-w-6xl mx-auto bg-gray-50">

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
          Real-Time Collaborative Coding Platform
        </h1>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          A collaborative coding platform enabling multiple users to work simultaneously on the same codebase in real-time.
        </p>
      </header>

      {/* Experience Section */}
      <section className="bg-white rounded-3xl shadow-xl p-10 md:p-16 space-y-12 relative overflow-hidden">
        <h2 className="section-title text-3xl font-bold text-gray-800 tracking-wide">Project Experience</h2>

        {/* Editor */}
        <div className="md:flex md:items-center md:gap-10 space-y-8 md:space-y-0">
          <ClickableImage
            src={editorImage}
            alt="Collaborative Editor"
            className="section-image md:w-1/2 rounded-2xl shadow-lg object-cover transform hover:scale-105 transition-transform duration-300"
          />
          <p className="text-gray-700 md:w-1/2 leading-relaxed text-lg">
            Developed a collaborative code editor using Yjs for concurrent editing.
            WebSocket connections maintained real-time sessions, ensuring smooth synchronization and low latency.

            Developed a collaborative code editor using Yjs for concurrent editing.
            WebSocket connections maintained real-time sessions, greatly reducing overhead and latency from multiple handshakes.
          </p>
        </div>

        {/* Questions */}
        <div className="md:flex md:items-center md:gap-10 space-y-8 md:space-y-0">
          <p className="text-gray-700 md:w-1/2 leading-relaxed text-lg">
            Built a RESTful API with Spring Boot to manage coding questions, enhanced with Redis caching
            to reduce database load and improve response times.
          </p>
          <ClickableImage
            src={questionImage}
            alt="Question Management"
            className="section-image md:w-1/2 rounded-2xl shadow-lg object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Matching */}
        <div className="md:flex md:items-center md:gap-10 space-y-8 md:space-y-0">
          <ClickableImage
            src={matchingImage}
            alt="User Matching"
            className="section-image md:w-1/2 rounded-2xl shadow-lg object-cover transform hover:scale-105 transition-transform duration-300"
          />
          <p className="text-gray-700 md:w-1/2 leading-relaxed text-lg">
            Implemented user matching with RabbitMQ as a persistent queue, pairing users based on question type and difficulty with high reliability.
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed text-lg">
          This project gave hands-on experience with Yjs, WebSockets, RabbitMQ, and Redis, and strengthened leadership, project management, and teamwork skills.
        </p>
      </section>

      {/* Challenges */}
      <section className="bg-gray-50 rounded-3xl p-10 md:p-16 space-y-6 shadow-inner">
        <h2 className="section-title text-3xl font-bold text-gray-800 tracking-wide">Challenges Encountered</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-3 leading-relaxed text-lg">
          <li><span className="font-bold">Architectural Decisions:</span> Selecting technologies balancing functionality, scalability, and maintainability.</li>
          <li><span className="font-bold">Team Coordination:</span> Managing contributions from members with varying experience and availability.</li>
        </ul>
      </section>

      {/* Lessons Learned */}
      <section className="bg-white rounded-3xl p-10 md:p-16 shadow-xl space-y-6">
        <h2 className="section-title text-3xl font-bold text-gray-800 tracking-wide">Lessons Learnt</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          Gained hands-on experience in developing a full-stack, real-time collaborative system, focusing on data synchronization, concurrency management, and scalable API design.
          Additionally, strengthened leadership skills, including effective communication, coordinating task dependencies, and optimizing parallel task execution across the team.
        </p>
      </section>

      {/* Future Improvements */}
      <section className="bg-gray-50 rounded-3xl p-10 md:p-16 shadow-inner space-y-6">
        <h2 className="section-title text-3xl font-bold text-gray-800 tracking-wide">Potential Future Improvements</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-3 leading-relaxed text-lg">
          <li><span className="font-bold">Code Execution Sandbox:</span> Run code safely in an isolated environment in-browser.</li>
          <li><span className="font-bold">Mobile-Friendly Interface:</span> Optimize UI/UX for small screens.</li>
          <li><span className="font-bold">Session Persistence:</span> Allow users to resume sessions after disconnections.</li>
        </ul>
      </section>

      {modalImage && <Modal src={modalImage} onClose={() => setModalImage(null)} />}
    </main>
  );
};

export default Peerprep;
