import { useParams } from "react-router-dom";



const services = [
  {
    title: "Communication Systems",
    slug: "communication-systems",
    description: "Seamless and secure marine communication solutions.",
    longDescription:
      "In the maritime industry, reliable communication is not just a necessity but a critical component for safety, navigation, and operational efficiency. Our advanced communication systems integrate satellite, radio, and digital networks to provide uninterrupted connectivity, even in the most remote oceanic regions. Whether it's real-time data transmission, emergency alerts, or routine operational communication, our solutions ensure that vessels stay connected at all times. With features like automated frequency adjustment, noise cancellation, and encrypted channels, we enhance clarity, security, and efficiency, reducing the risk of miscommunication during crucial moments at sea.",
    src: "/ship-antenna.avif",
    centerImage: "/communication-center.jpg",
    cards: [
      {
        title: "Satellite Communication",
        text: "Global connectivity for seamless marine operations.",
      },
      {
        title: "VHF Radio Systems",
        text: "Reliable short-range communication for safety and coordination.",
      },
    ],
  },
  {
    title: "Power & Control",
    slug: "power-control",
    description: "Efficient and automated power management systems.",
    longDescription:
      "Modern vessels require sophisticated power and control systems to optimize energy consumption and ensure smooth operations. Our solutions are designed to automate energy distribution, reducing waste and improving efficiency. From intelligent load balancing to remote monitoring, we provide real-time insights into power consumption and system performance. Our technology also includes fail-safe mechanisms, ensuring uninterrupted operation during emergencies. With a focus on sustainability, our power systems integrate renewable energy sources where possible, reducing fuel dependency and operational costs. Whether managing complex electrical grids or automating engine controls, our solutions bring precision, efficiency, and reliability to maritime power management.",
    src: "/controls.png",
    centerImage: "/power-center.jpg",
    cards: [
      {
        title: "Automated Power Distribution",
        text: "Optimized energy flow to reduce waste and enhance efficiency.",
      },
      {
        title: "Remote Monitoring",
        text: "Live tracking of power usage and system health for preventive maintenance.",
      },
    ],
  },
  {
    title: "Security & Surveillance",
    slug: "security-surveillance",
    description: "Advanced surveillance for maritime safety.",
    longDescription:
      "Maritime security is crucial in protecting vessels, cargo, and crew from unauthorized intrusions, piracy, and other threats. Our security and surveillance solutions employ cutting-edge technology, including AI-powered CCTV systems, thermal imaging, and motion detection sensors. These systems provide real-time monitoring, automated threat detection, and instant alerts to security personnel. Additionally, our intrusion prevention solutions include biometric access controls, encrypted communication for security teams, and geofencing to monitor vessel movements. With cybersecurity measures integrated into our solutions, we ensure that both physical and digital threats are mitigated, safeguarding marine assets from potential risks.",
    src: "/security.avif",
    centerImage: "/security-center.jpg",
    cards: [
      {
        title: "CCTV Surveillance",
        text: "AI-enhanced monitoring with high-resolution marine cameras.",
      },
      {
        title: "Intrusion Detection",
        text: "Real-time alerts and threat assessment to prevent unauthorized access.",
      },
    ],
  },
  {
    title: "Marine Sensor Calibration",
    slug: "marine-sensor-calibration",
    description: "Ensuring accuracy in marine data measurement.",
    longDescription:
      "Marine sensor calibration is a crucial process that ensures all onboard instruments and measurement systems provide accurate and reliable data. Whether it's depth sensors, weather instruments, or navigation aids, precise calibration prevents errors that could lead to miscalculations or safety risks. Our calibration services utilize industry-leading techniques to fine-tune sensor accuracy, reducing data discrepancies and improving overall vessel performance. Regular calibration also extends the lifespan of marine sensors, preventing costly repairs or replacements. By integrating automated self-diagnosis features, our systems ensure that vessels always operate with the most precise data available, improving decision-making and safety at sea.",
    src: "/marine-radar.jpg",
    centerImage: "/marine-communication.jpeg",
    cards: [
      {
        title: "Depth Sensor Calibration",
        text: "Precision tuning for accurate underwater depth measurements.",
      },
      {
        title: "Wind Sensor Tuning",
        text: "Enhanced calibration for precise meteorological data collection.",
      },
    ],
  },
  {
    title: "Emergency & Alarm Systems",
    slug: "emergency-alarm-systems",
    description: "Rapid response solutions for marine emergencies.",
    longDescription:
      "In critical moments, an effective emergency and alarm system can mean the difference between a contained incident and a disaster. Our emergency solutions provide instant alerts, automated distress signaling, and seamless coordination with emergency response teams. Designed for rapid deployment, our systems integrate fire detection, flood sensors, and emergency shut-off mechanisms to minimize risks. With automated failover and redundancy, our alarm systems guarantee operation even during power failures. Our distress beacons ensure that help is dispatched quickly, improving safety for crew members and passengers. Compliance with international safety regulations ensures that our solutions meet the highest industry standards.",
    src: "/emergency.avif",
    centerImage: "/emergency-center.jpg",
    cards: [
      {
        title: "Fire Detection",
        text: "Early warning systems for onboard fire prevention and control.",
      },
      {
        title: "Distress Signals",
        text: "Automated emergency alerts for immediate rescue operations.",
      },
    ],
  },
  {
    title: "Navigation Systems",
    slug: "navigation-systems",
    description: "High-tech navigation for marine environments.",
    longDescription:
      "Navigating the open seas requires precision, reliability, and real-time updates. Our state-of-the-art navigation systems integrate GPS tracking, marine radar, and automated route planning to provide accurate and efficient vessel positioning. Our solutions minimize human error by incorporating AI-driven course correction, reducing the chances of navigational mishaps. Additionally, we offer real-time weather tracking to help vessels adapt to changing sea conditions, ensuring safer journeys. Our navigation technology is designed for seamless integration with other onboard systems, creating a unified ecosystem for enhanced maritime operations. With global coverage and constant updates, we empower vessels to navigate confidently in any environment.",
    src: "/closeups.jpg",
    centerImage: "/nav.webp",
    cards: [
      {
        title: "GPS Tracking",
        text: "Precision navigation with real-time global positioning.",
      },
      {
        title: "Radar Systems",
        text: "Advanced marine radar for enhanced situational awareness and safety.",
      },
    ],
  },
];



const ServiceDetails = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) return <h2>Service Not Found</h2>;

  return (
    <div className="service-details mt-40">
      <div className="service-img-hero">
        <img src={service.src} alt={service.title} />
      </div>
      <section className=" ">
        <h2 className="t-40">{service.title}</h2>

        {/* Show long description if available */}
        {service.longDescription ? (
          <p>{service.longDescription}</p>
        ) : (
          <p>{service.description}</p>
        )}

        {/* Show center image if available */}
        {service.centerImage && (
          <div className="center-image">
            <img src={service.centerImage} alt="Feature" />
          </div>
        )}

        {/* Show extra content if available */}
        {service.extraContent && (
          <p className="extra-content">{service.extraContent}</p>
        )}

        {/* Show cards if available */}
        {service.cards && (
          <div className="cards-container">
            {service.cards.map((card, index) => (
              <div key={index} className="card">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default ServiceDetails;
