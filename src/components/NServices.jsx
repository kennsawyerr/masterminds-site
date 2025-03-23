// // 1. Navigation System Installation & Maintenance  
// // 2. Communication Systems Integration  
// // 3. Power & Control Systems Automation  
// // 4. Security & Surveillance Solutions  
// // 5. Marine Sensor Calibration & Troubleshooting  
// // 6. Software & Data Management for Marine Systems



const services = [
  {
    title: "Navigation Systems 1",
    link: "#",
    src: "closeups.jpg",
    className: "grid-no-one",
  },
  {
    title: "Communication Systems 2",
    link: "#",
    src: "marine-navigation.jpeg",
    className: "grid-no-two",
  },
  {
    title: "Power & Control 3",
    link: "#",
    src: "marine-security.webp",
    className: "grid-no-three",
  },
  {
    title: "Security & Surveillance 4",
    link: "#",
    src: "fernandina-vessel.jpg",
    className: "grid-no-four",
  },
  {
    title: "Marine Sensor Calibration 5",
    link: "#",
    src: "marine-communication.jpeg",
    className: "grid-no-five",
  },
  {
    title: "Software & Data Management 6",
    link: "#",
    src: "vessel.jpg",
    className: "grid-no-six",
  },
];

const NServices = () => {
  return (
    <div className="grid-container">
      {services.map((service, index) => (
        <a
          key={index}
          href={service.link}
          className={`grid-item ${service.className}`}
        >
          <img src={service.src} alt={service.title} />
          <div className="overlay">
            <div className="service-txt-box">{service.title}</div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default NServices;
