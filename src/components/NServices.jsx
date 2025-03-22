// // 1. Navigation System Installation & Maintenance  
// // 2. Communication Systems Integration  
// // 3. Power & Control Systems Automation  
// // 4. Security & Surveillance Solutions  
// // 5. Marine Sensor Calibration & Troubleshooting  
// // 6. Software & Data Management for Marine Systems
// const NServices = () => {
//   return <div>NServices</div>;
// };

// export default NServices;


// I want to create a grid for all this six tools to be.They should all make up a box in react . They can take uneven sizes . some can be big, some can be small.Some can be square , some could be Rectangle

// They should all be a link with a picture on them 

// u can use this img src ="computers.webp" for all because i would change them later 




const services = [
  {
    title: "Navigation Systems",
    link: "#",
    src: "computers.webp",
    className: "big",
  },
  {
    title: "Communication Systems",
    link: "#",
    src: "computers.webp",
    className: "small",
  },
  {
    title: "Power & Control",
    link: "#",
    src: "computers.webp",
    className: "medium",
  },
  {
    title: "Security & Surveillance",
    link: "#",
    src: "computers.webp",
    className: "wide",
  },
  {
    title: "Marine Sensor Calibration",
    link: "#",
    src: "computers.webp",
    className: "tall",
  },
  {
    title: "Software & Data Management",
    link: "#",
    src: "computers.webp",
    className: "medium",
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
          <div className="overlay">{service.title}</div>
        </a>
      ))}
    </div>
  );
};

export default NServices;
