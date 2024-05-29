import { useState } from "react";
import Vector from "./vector-image.jpg";
import { values } from "../constants/files";
const Values = () => {
  const [selected, setSelected] = useState(false);

  const handleSelect = () => {
    setSelected(true);
  };
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
            className={`our-values-text ${
              selected ? "display-value" : "hide-value "
            }`}
          >
            <div>
              {values.map((item) =>(
                <div key={item.id}>
                  <p>{item.p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Values;
