import { useState } from "react";

const NValues = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div>
        <section className="cards">
          <ul className="flex ">
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
              <li
                onClick={() => {
                  setIsActive(true);
                }}
                className={isActive ? "bg-color-orange " : "bg-inherit"}
              ></li>
              NAVIGATION
            </li>
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
              NAVIGATION
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default NValues;
