import { useState } from "react";

const NValues = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      title: "A place for networking",
      text: "Consectetur adipisicing elit. Perferendis quo enim vitae earum eum velit fugiat iusto quasi quam dolorum quae perspiciatis illum, praesentium ullam.",
      src: "marine-security.webp",
    },
    {
      title: "Innovative Solutions",
      text: "Providing cutting-edge technology to enhance efficiency and security. Our solutions are designed to meet the highest industry standards.",
      src: "radar-2.jpg",
    },
    {
      title: "Reliable Communication",
      text: "Stay connected with our advanced communication systems, ensuring seamless operations even in the most challenging environments.",
      src: "computers.webp",
    },
    {
      title: "Safety & Protection",
      text: "Ensuring the highest level of security with state-of-the-art surveillance and monitoring systems tailored for your needs.",
      src: "marine-navigation.jpeg",
    },
  ];

  // Labels for the navigation
  const labels = ["NAVIGATION", "TECHNOLOGY", "SECURITY", "MARITIME"];

  return (
    <>
      <section>
      
        <ul className="comp-values">
          {labels.map((label, index) => (
            <li
              key={index}
              onClick={() => setActiveIndex(index)} 
              className={
                activeIndex === index ? "bg-color-orange" : "bg-color-grey"
              }
            >
              {label}
            </li>
          ))}
        </ul>

        {/* Content Section */}
        <section className="comp-values-sub-h">
          <article className="comp-values-hero">
            <div className="textbox">
              <h3>{items[activeIndex].title}</h3>
              <p>{items[activeIndex].text}</p>
            </div>
          </article>

          <div className="comp-values-img">
            <img src={items[activeIndex].src} alt={items[activeIndex].title} />
          </div>
        </section>
      </section>
    </>
  );
};

export default NValues;
