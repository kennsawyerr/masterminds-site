import { useState } from "react";
import Vector from "./vector-image.jpg"

const Values = () => {
  const [selected, setSelected] =useState(false)

  const handleSelect = () => {
    setSelected(true)
  }
  return (
    <>
      <section className="sect-pad container our-values">
        <h5 className="white">The Masterminds Ecosystem</h5>
        <h2>Think Beyond Lorem Ipsum</h2>

        <ul className="flex grid ">
          <li onClick={handleSelect}>Hardwork</li>
          <li onClick={handleSelect}>Quality</li>
          <li onClick={handleSelect}>Integrity</li>
          <li onClick={handleSelect}>Reliability</li>
        </ul>

        <div className="text-box-container flex3">
          <div className="our-values-img-container">
            <img src={Vector} alt="" />
          </div>
          <div
            className={`our-values-text ${selected ? "display-value" : "hide-value "}`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
            ea libero. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Corrupti ad magni facilis quidem ducimus libero tenetur, offi cia
            omnis sapiente? Voluptatibus.
          </div>
        </div>
      </section>
    </>
  );
};

export default Values;
