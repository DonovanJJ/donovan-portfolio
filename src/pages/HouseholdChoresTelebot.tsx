import { useEffect, useRef, useState } from "react";
import { animate, createScope, createSpring } from "animejs";
import householdImage from '/images/household-page/household-chores.png';
import schedulerImage from '/images/household-page/household-scheduler.png';
import mongoImage from '/images/household-page/household-erd.png';

const HouseholdChoreTelebotPage = () => {
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
          Household Chores Telegram Bot
        </h1>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          A Telegram bot that distributes and manages household chores fairly — no more arguments about who’s doing what! 🧹✨
        </p>
      </header>

      {/* Experience Section */}
      <section className="bg-white rounded-3xl shadow-xl p-10 md:p-16 space-y-12 relative overflow-hidden">
        <h2 className="section-title text-3xl font-bold text-gray-800 tracking-wide">Project Experience</h2>

        {/* Telebot */}
        <div className="md:flex md:items-center md:gap-10 space-y-8 md:space-y-0">
          <ClickableImage
            src={householdImage}
            alt="Bot interface"
            className="section-image md:w-1/2 rounded-2xl shadow-lg object-cover transform hover:scale-105 transition-transform duration-300"
          />
          <p className="text-gray-700 md:w-1/2 leading-relaxed text-lg">
            Built using <span className="font-semibold">Telebot</span>, a Python wrapper for the Telegram Bot API, to handle commands, messages, and scheduling.
            The bot allows housemates to view current and upcoming chores, track outstanding tasks, and gently nudge the person responsible 😉.
          </p>
        </div>

        {/* Database */}
        <div className="md:flex md:items-center md:gap-10 space-y-8 md:space-y-0">
          <p className="text-gray-700 md:w-1/2 leading-relaxed text-lg">
            Chore assignments and schedules are stored in <span className="font-semibold">MongoDB</span>.
            Its flexible schema made it easy to adapt to evolving features (e.g., recurring chores, one-off tasks) without requiring schema migrations, enabling faster iterations.
          </p>
          <ClickableImage
            src={mongoImage}
            alt="Database design"
            className="section-image md:w-1/2 rounded-2xl shadow-lg object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Scheduler */}
        <div className="md:flex md:items-center md:gap-10 space-y-8 md:space-y-0">
          <ClickableImage
            src={schedulerImage}
            alt="Chore scheduling"
            className="section-image md:w-1/2 rounded-2xl shadow-lg object-cover transform hover:scale-105 transition-transform duration-300"
          />
          <p className="text-gray-700 md:w-1/2 leading-relaxed text-lg">
            Used <span className="font-semibold">APScheduler</span> to schedule recurring chores.
            Tasks such as weekly trash duty or daily dishwashing reminders are automatically generated and persisted in the database, ensuring reliability even after restarts.
          </p>
        </div>
      </section>

      {/* Challenges */}
      <section className="bg-gray-50 rounded-3xl p-10 md:p-16 space-y-6 shadow-inner">
        <h2 className="section-title text-3xl font-bold text-gray-800 tracking-wide">Challenges Encountered</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-3 leading-relaxed text-lg">
          <li><span className="font-bold">Persistence & Reliability:</span> Ensuring scheduled tasks don’t disappear after bot restarts required careful database integration.</li>
          <li><span className="font-bold">User Experience:</span> Keeping the bot simple and intuitive so non-technical housemates could use it easily.</li>
          <li><span className="font-bold">Code Structure:</span> There was no opinionated framework to adopt and my lack of knowledge to separate concerns made the code difficult to maintain.</li>
        </ul>
      </section>

      {/* Lessons Learned */}
      <section className="bg-white rounded-3xl p-10 md:p-16 shadow-xl space-y-6">
        <h2 className="section-title text-3xl font-bold text-gray-800 tracking-wide">Lessons Learnt</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          Learned how to integrate <span className="font-semibold">Telegram bots</span> with backend scheduling systems, and gained experience in managing recurring events with persistence.
        </p>
      </section>

      {/* Future Improvements */}
      <section className="bg-gray-50 rounded-3xl p-10 md:p-16 shadow-inner space-y-6">
        <h2 className="section-title text-3xl font-bold text-gray-800 tracking-wide">Potential Future Improvements</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-3 leading-relaxed text-lg">
          <li><span className={"font-bold"}>Simplify User Interface:</span>The Bot has too many commands, a simpler would make adopting it simpler</li>
          <li><span className="font-bold">Integration with Calendars:</span> Sync chores to Google Calendar or iCal for visibility outside Telegram.</li>
          <li><span className="font-bold">Voice Commands:</span> Allow housemates to interact with the bot using voice-to-text for extra convenience.</li>
        </ul>
      </section>

      {modalImage && <Modal src={modalImage} onClose={() => setModalImage(null)} />}
    </main>
  );
};

export default HouseholdChoreTelebotPage;
