import { useState } from "react";

const NValues = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div>
        <section className="">
          <ul className=" comp-values ">
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

          <section className="comp-values-sub-h">
            <article className="comp-values-hero">
              <div className="textbox">
                
                <h3>Connecting the dots</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis quo enim vitae earum eum velit fugiat iusto quasi
                  quam dolorum quae perspiciatis illum, praesentium ullam
                  debitis, facilis nam itaque labore.
                </p>
              </div>
            </article>

            <div className="comp-values-img">
              <img src="marine-security.webp" alt="" />
            </div>
          </section>
        </section>
      </div>
    </>
  );
};

export default NValues;
