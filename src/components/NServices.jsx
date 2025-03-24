// // 1. Navigation System Installation & Maintenance
// // 2. Communication Systems Integration
// // 3. Power & Control Systems Automation
// // 4. Security & Surveillance Solutions
// // 5. Marine Sensor Calibration & Troubleshooting
// // 6.  Emergency and Alarm Systems Integration

const services = [
  {
    title: "Navigation Systems ",
    link: "#",
    src: "closeups.jpg",
    className: "grid-no-one",
    csStyles: "black-overlay",
  },
  {
    title: "Communication Systems ",
    link: "#",
    src: "ship-antenna.avif",
    className: "grid-no-two",
    csStyles: "black-overlay",
  },
  {
    title: "Power & Control ",
    link: "#",
    src: "controls.png",
    className: "grid-no-three",
    csStyles: "black-overlay",
  },
  {
    title: "Security & Surveillance ",
    link: "#",
    src: "security.avif",
    className: "grid-no-four ",
    csStyles: "blue-overlay",
  },
  {
    title: "Marine Sensor Calibration ",
    link: "#",
    src: "marine-radar.jpg",
    className: "grid-no-five",
    csStyles: "overlay",
  },
  {
    title: " Emergency and Alarm Systems Integration  ",
    link: "#",
    src: "emergency.avif",
    className: "grid-no-six",
    csStyles: "black-overlay",
  },
];

const NServices = () => {
  return (
    <>
      <h2 className="container">Our Services Navigation Systems</h2>
      <div className="grid-container">
        {services.map((service, index) => (
          <a
            key={index}
            href={service.link}
            className={`grid-item ${service.className}`}
          >
            <img src={service.src} alt={service.title} />
            <div className={service.csStyles || "overlay"}>
              <div className="service-txt-box">{service.title}</div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default NServices;
