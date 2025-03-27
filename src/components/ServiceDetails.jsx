import { useParams } from "react-router-dom";

const services = [
  {
    title: "Communication Systems",
    slug: "communication-systems",
    description: "Advanced communication integrations...",
    src: "ship-antenna.avif",
  },
  {
    title: "Power & Control",
    slug: "power-control",
    description: "Automating power control systems...",
    src: "/controls.png",
  },
  {
    title: "Security & Surveillance",
    slug: "security-surveillance",
    description: "Top-notch security and surveillance...",
    src: "/security.avif",
  },
  {
    title: "Marine Sensor Calibration",
    slug: "marine-sensor-calibration",
    description: "Marine sensor calibration services...",
    src: "/marine-radar.jpg",
  },
  {
    title: "Emergency & Alarm Systems",
    slug: "emergency-alarm-systems",
    description: "Emergency alarm systems integration...",
    src: "/emergency.avif",
  },
  {
    title: "Navigation Systems",
    slug: "navigation-systems",
    description: "We provide high-tech navigation solutions.",
    longDescription:
      "Our navigation systems are designed for marine environments, ensuring seamless operation.",
    src: "/closeups.jpg",
    centerImage: "/nav.webp",
    cards: [
      {
        title: "GPS Tracking",
        text: "Advanced GPS navigation for precise positioning.",
      },
      {
        title: "Radar Systems",
        text: "High-tech marine radar systems for safety.",
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
    </div>
  );
};

export default ServiceDetails;
