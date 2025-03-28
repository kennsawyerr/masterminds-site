// // import React from "react";

// const AboutUs = () => {
//   return (
//     <div className="bg-gray-100 text-gray-900">
//       {/* Hero Section */}
//       <div
//         className="relative w-full h-[400px] bg-cover bg-center"
//         style={{ backgroundImage: "url('/images/ship-hero.jpg')" }}
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <h1 className="text-4xl md:text-5xl text-white font-bold text-center">
//             Innovating Maritime Technology for a Safer and Smarter Future
//           </h1>
//         </div>
//       </div>

//       {/* About Section */}
//       <section className="max-w-5xl mx-auto px-6 py-12 text-center">
//         <h2 className="text-3xl font-semibold">Who We Are</h2>
//         <p className="mt-4 text-lg">
//           Founded on the principles of{" "}
//           <strong>innovation, reliability, and excellence</strong>, we are a
//           team of highly skilled engineers and technology experts dedicated to
//           shaping the future of maritime operations. We integrate the latest
//           advancements in AI, automation, and cybersecurity to provide
//           world-class solutions tailored to the unique needs of the maritime
//           industry.
//         </p>
//         <img
//           src="/images/control-center.jpg"
//           alt="Ship’s control center"
//           className="rounded-lg shadow-md mt-6 w-full"
//         />
//       </section>

//       {/* Services Section */}
//       <section className="bg-white py-12 px-6">
//         <div className="max-w-5xl mx-auto">
//           <h2 className="text-3xl font-semibold text-center">What We Do</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
//             {services.map((service, index) => (
//               <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
//                 <img
//                   src={service.src}
//                   alt={service.title}
//                   className="rounded-md mb-4 w-full h-48 object-cover"
//                 />
//                 <h3 className="text-xl font-bold">{service.title}</h3>
//                 <p className="mt-2">{service.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Vision Section */}
//       <section className="max-w-5xl mx-auto px-6 py-12 text-center">
//         <h2 className="text-3xl font-semibold">Our Vision</h2>
//         <p className="mt-4 text-lg">
//           We envision a future where{" "}
//           <strong>
//             marine operations are fully digitized, autonomous, and seamlessly
//             connected
//           </strong>
//           . Our goal is to drive the industry forward by continually innovating
//           smart maritime solutions that enhance navigation, security, and energy
//           efficiency.
//         </p>
//         <img
//           src="/images/smart-vessel.jpg"
//           alt="Smart Vessel"
//           className="rounded-lg shadow-md mt-6 w-full"
//         />
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="bg-gray-200 py-12 px-6 text-center">
//         <h2 className="text-3xl font-semibold">Why Choose Us?</h2>
//         <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <h3 className="text-xl font-bold">🌍 Global Expertise</h3>
//             <p>Trusted by maritime professionals worldwide.</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <h3 className="text-xl font-bold">🔧 Custom Solutions</h3>
//             <p>Tailored technology to fit unique vessel needs.</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <h3 className="text-xl font-bold">🛡 Reliability & Security</h3>
//             <p>Best-in-class cybersecurity and fail-safe systems.</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <h3 className="text-xl font-bold">📡 24/7 Support</h3>
//             <p>Round-the-clock assistance from experienced engineers.</p>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="max-w-5xl mx-auto px-6 py-12 text-center">
//         <h2 className="text-3xl font-semibold">Let Us Work Together</h2>
//         <p className="mt-4 text-lg">
//           Join us in transforming the maritime industry with{" "}
//           <strong>state-of-the-art technology</strong>. Whether you are upgrading
//           your fleet’s navigation, security, or communication systems, we are
//           here to help.
//         </p>
//         <img
//           src="/images/contact-ship.jpg"
//           alt="Ship at sea"
//           className="rounded-lg shadow-md mt-6 w-full"
//         />
//         <a
//           href="/contact"
//           className="mt-6 inline-block bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md text-lg font-semibold hover:bg-blue-700 transition"
//         >
//           Contact Us Today
//         </a>
//       </section>
//     </div>
//   );
// };

// const services = [
//   {
//     title: "Communication Systems",
//     description:
//       "Advanced satellite, VHF, and encrypted communication networks.",
//     src: "/images/communication.jpg",
//   },
//   {
//     title: "Navigation Systems",
//     description: "High-precision GPS, radar, and automated route planning.",
//     src: "/images/navigation.jpg",
//   },
//   {
//     title: "Security & Surveillance",
//     description:
//       "AI-driven monitoring, intrusion detection, and cybersecurity.",
//     src: "/images/security.jpg",
//   },
//   {
//     title: "Power & Control",
//     description: "Smart energy management and automation for vessels.",
//     src: "/images/power.jpg",
//   },
//   {
//     title: "Emergency & Alarm Systems",
//     description: "Instant distress alerts and fail-safe emergency protocols.",
//     src: "/images/emergency.jpg",
//   },
//   {
//     title: "Sensor Calibration",
//     description: "Ensuring precise measurements for marine instruments.",
//     src: "/images/sensors.jpg",
//   },
// ];

// export default AboutUs;



 // Import the CSS file

const AboutUs = () => {
  return (
    <div className="about-us">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>About Us</h1>
        <p>Innovating maritime technology with precision and excellence.</p>
      </div>

      {/* Our Mission Section */}
      <section className="mission-section">
        <div className="text">
          <h2>Our Mission</h2>
          <p>
            We are committed to advancing maritime electronics, communication,
            and security systems. Our solutions ensure safety, efficiency, and
            technological innovation for the marine industry.
          </p>
        </div>
        <img src="/closeups.jpg" alt="Our Mission" />
      </section>

      {/* Our Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <img src="/immarsat.jpg" alt="Communication Systems" />
            <h3>Communication Systems</h3>
            <p>Advanced communication solutions for maritime operations.</p>
          </div>
          <div className="service-card">
            <img src="/immarsat.jpg" alt="Navigation Systems" />
            <h3>Navigation Systems</h3>
            <p>Precision-driven navigation for marine safety.</p>
          </div>
          <div className="service-card">
            <img src="/immarsat.jpg" alt="Security & Surveillance" />
            <h3>Security & Surveillance</h3>
            <p>Top-tier security and monitoring solutions.</p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision-section">
        <img src="/images/vision.jpg" alt="Our Vision" />
        <div className="text">
          <h2>Our Vision</h2>
          <p>
            To be the leading provider of cutting-edge maritime technology,
            ensuring seamless and secure marine operations globally.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Get in Touch</h2>
        <p>
          Ready to upgrade your maritime technology? Contact us today and let us
          transform the future of marine operations together.
        </p>
        <button>Contact Us</button>
      </section>
    </div>
  );
};

export default AboutUs;
