import { useState } from "react";

const Values = () => {
  const [activeTab, setActiveTab] = useState("");

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  const values = [
    {
      id: "1",
      name: "Hardwork",
      content:
        "1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,ea libero. Lorem ipsum dolor sit amet consectetur, adipisicing elit.Corrupti ad magni facilis quidem ducimus libero tenetur, offi ciaomnis sapiente? Voluptatibus.",
      img: "/vessel.jpg",
    },
    {
      id: "2",
      name: "Quality",
      content:
        "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,ea libero. Lorem ipsum dolor sit amet consectetur, adipisicing elit.Corrupti ad magni facilis quidem ducimus libero tenetur, offi ciaomnis sapiente? Voluptatibus.",
      img: "/vessel.jpg",
    },
    {
      id: "3",
      name: "Integrity",
      content:
        "3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,ea libero. Lorem ipsum dolor sit amet consectetur, adipisicing elit.Corrupti ad magni facilis quidem ducimus libero tenetur, offi ciaomnis sapiente? Voluptatibus.",
      img: "/vessel.jpg",
    },
    {
      id: "4",
      name: "Reliability",
      content:
        "4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,ea libero. Lorem ipsum dolor sit amet consectetur, adipisicing elit.Corrupti ad magni facilis quidem ducimus libero tenetur, offi ciaomnis sapiente? Voluptatibus.",
      img: "/vessel.jpg",
    },
  ];

  return (
    <section className="sect-pad container our-values">
      <h5 className="white">The Masterminds Ecosystem</h5>
      <h2>Think Beyond Lorem Ipsum</h2>

      <ul className="flex grid">
        {values.map((value) => (
          <li
            key={value.id}
            data-id={value.id}
            className={`tab-btn ${activeTab === value.id ? "active" : ""}`}
            onClick={() => handleTabClick(value.id)}
          >
            {value.name}
          </li>
        ))}
      </ul>

      <div className="text-box-container flex3">
        {values.map((value) => (
          <div
            key={value.id}
            id={value.id}
            className={`content ${activeTab === value.id ? "active" : ""}`}
          >
            <div className="our-values-img-container">
              {/* Add your image source here */}
              <img src={`${value.img}`} alt={value.name} />
            </div>
            <div className="our-values-text">
              <p>{value.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Values;
