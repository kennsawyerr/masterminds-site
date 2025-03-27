import { useParams } from "react-router-dom";

const services = [
  {
    title: "Navigation Systems",
    slug: "navigation-systems",
    description: "We provide high-tech navigation solutions...",
    src: "closeups.jpg",
  },
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
    src: "controls.png",
  },
  {
    title: "Security & Surveillance",
    slug: "security-surveillance",
    description: "Top-notch security and surveillance...",
    src: "security.avif",
  },
  {
    title: "Marine Sensor Calibration",
    slug: "marine-sensor-calibration",
    description: "Marine sensor calibration services...",
    src: "marine-radar.jpg",
  },
  {
    title: "Emergency & Alarm Systems",
    slug: "emergency-alarm-systems",
    description: "Emergency alarm systems integration...",
    src: "emergency.avif",
  },
];

const ServiceDetails = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) return <h2>Service Not Found</h2>;

  return (
    <div className="service-details">
      <h2>{service.title}</h2>
      <img src={service.src} alt={service.title} />
      <p>{service.description}</p>
    </div>
  );
};

export default ServiceDetails;
