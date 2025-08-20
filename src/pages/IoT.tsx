import iotDashboardImage from '/images/iot-page/iot-dashboard.png'
import espImage from '/images/iot-page/esp_hardware.jpg'
import espBatteryImage from '/images/iot-page/esp_battery.jpg'
import {useEffect, useRef, useState} from "react";
import {animate, createScope, createSpring} from "animejs";

const IotPage = () => {
  const root = useRef(null);
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

      // Animate list items with stagger
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
      {/* Wrapper for the image, relative for the close button */}
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
    <main ref={root} id="page-title" className="pt-24 px-6 md:px-16 space-y-16 max-w-6xl mx-auto">
      {/* Back Button */}
      <div>
        <a
          href="/donovan-portfolio/#projects"
          className="text-indigo-600 font-semibold hover:underline"
        >
          &larr; Back to Projects
        </a>
      </div>

      {/* Project Title */}
      <header className="text-center space-y-4">
        <h1 className="page-title text-4xl md:text-5xl font-extrabold text-indigo-600">
          IoT Temperature Monitoring System
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          A real-time monitoring system that tracks temperature and humidity using IoT sensors,
          powered by ESP32 and visualized through a cloud-connected web dashboard.
        </p>
      </header>

      {/* Experience Section */}
      <section className="bg-white rounded-2xl shadow-md p-8 space-y-8">
        <h2 className="section-title text-2xl font-bold text-gray-800">My Experience</h2>

        <div className="md:flex md:items-center md:gap-8 space-y-6 md:space-y-0">
          <ClickableImage
            src={iotDashboardImage}
            alt="IoT Dashboard"
            className="section-image md:w-1/2 rounded-lg shadow-md object-cover"
          />
          <p className="text-gray-700 md:w-1/2 leading-relaxed">
            This project was my first real exposure to microcontroller development, and I started
            with zero background in firmware. I had to quickly get up to speed with ESP32 programming,
            sourcing sensors and components, and integrating everything into a working system. On the
            cloud side, I connected the device to AWS IoT Core and built a responsive React-based dashboard
            to visualize live data streams.
          </p>
        </div>

        <div className="md:flex md:items-center md:gap-8 space-y-6 md:space-y-0">
          <p className="text-gray-700 md:w-1/2 leading-relaxed">
            Much of my time was spent experimenting with sensor polling intervals and implementing
            <span className="font-semibold"> deep sleep modes</span> to conserve battery life. Learning to balance power efficiency with accuracy was a critical trade-off throughout development.
          </p>
          <ClickableImage
            src={espImage}
            alt="ESP32 Hardware Setup"
            className="section-image md:w-1/2 rounded-lg shadow-md object-cover"
          />
        </div>

        <p className="text-gray-700 leading-relaxed">
          In the end, I gained hands-on experience building an end-to-end IoT solution—from firmware to
          cloud services to frontend visualization—and the satisfaction of seeing a working, deployed product.
        </p>
      </section>

      {/* Challenges Section */}
      <section className="bg-white rounded-2xl shadow-md p-8 space-y-6">
        <h2 className="section-title text-2xl font-bold text-gray-800">Challenges Faced</h2>
        <div className="md:flex md:items-start md:gap-8 space-y-6 md:space-y-0">
          <ul className="list-disc list-inside text-gray-700 md:w-1/2 space-y-3 leading-relaxed">
            <li>
              <span className="font-medium">Power management:</span> Diagnosing
              excessive battery drain caused by high idle power draw and inefficient
              voltage regulation.
            </li>
            <li>
              <span className="font-medium">Hardware safety:</span> Learning to choose
              safe and reliable components for a battery-powered system—without risking
              overheating 🔥.
            </li>
            <li>
              <span className="font-medium">Data visualization:</span> Designing a
              dashboard that showed meaningful insights without overwhelming the user
              with too much raw data.
            </li>
          </ul>
          <ClickableImage
            src={espBatteryImage}
            alt="ESP32 Battery Setup"
            className="section-image md:w-1/2 rounded-lg shadow-md object-cover"
          />
        </div>
      </section>

      <section className="bg-white rounded-2xl shadow-md p-8 space-y-6">
        <h2 className="section-title text-2xl font-bold text-gray-800">Lessons Learnt</h2>
        <div className="md:flex md:items-center md:gap-8 space-y-6 md:space-y-0">
          <p className="text-gray-700 leading-relaxed md:w-1/2">
            This project gave me practical experience in building a complete IoT solution.
            I learned to navigate hardware-software interactions, optimize for power efficiency,
            and deliver a user-friendly dashboard that makes raw sensor data meaningful. More
            importantly, it taught me how to balance trade-offs between performance, usability,
            and reliability.
          </p>
          <ClickableImage
            src={iotDashboardImage}
            alt="Dashboard Insights"
            className="section-image md:w-1/2 rounded-lg shadow-md object-cover"
          />
        </div>
      </section>

      <section className="bg-white rounded-2xl shadow-md p-8 space-y-6">
        <h2 className="section-title text-2xl font-bold text-gray-800">Potential Future Improvements</h2>
        <div className="md:flex md:items-center md:gap-8 space-y-6 md:space-y-0">
          <ul className="list-disc list-inside text-gray-700 space-y-3 leading-relaxed">
            <li className="list-item">
              <span className="font-medium">Automatic Dashboard Refresh:</span> To simulate real-time data.
            </li>
            <li className="list-item">
              <span className="font-medium">Custom Enclosure:</span> Design and 3D-print a durable, weather-resistant casing to enable it to be used anywhere with internet connection while giving it a polished look.
            </li>
            <li className="list-item">
              <span className="font-medium">Extended Power Options:</span> Experiment with solar charging or more efficient power regulation to further improve battery life and enable long-term usage.
            </li>
            <li className="list-item">
              <span className="font-medium">Cloud Scalability:</span> Enhance cloud infrastructure reliability by using multiple nodes in multiple A-Z fronted by a load balancer (Not done due to cost constraints).
            </li>
            <li className="list-item">
              <span className="font-medium">Alerts & Notifications:</span> Integrate email notifications to alert users when readings cross predefined thresholds and when the battery requires a charge.
            </li>
            <li className="list-item">
              <span className="font-medium">Reduce Database Cost:</span> Create a cron job to delete sensor data beyond a predefined amount eg. 6 months.
            </li>
          </ul>
        </div>
      </section>

      {modalImage && <Modal src={modalImage} onClose={() => setModalImage(null)} />}
    </main>
  )
}

export default IotPage
