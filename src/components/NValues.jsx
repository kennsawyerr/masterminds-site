import { useState } from "react";

const NValues = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div>
        <section className="cards">
          <ul className="flex comp-values ">
            <li
              onClick={() => {
                setIsActive(true);
              }}
              className={isActive ? "bg-color-orange " : "bg-inherit"}
            >
              NAVIGATION
            </li>
           
            <li
              onClick={() => {
                setIsActive(true);
              }}
              className={isActive ? "bg-color-orange " : "bg-inherit"}
            >
              TECHNOLOGY
            </li>

            <li
              onClick={() => {
                setIsActive(true);
              }}
              className={isActive ? "bg-color-orange " : "bg-inherit"}
            >
              SECURITY
            </li>

            <li
              onClick={() => {
                setIsActive(true);
              }}
              className={isActive ? "bg-color-orange " : "bg-inherit"}
            >
              MARITIME
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default NValues;
