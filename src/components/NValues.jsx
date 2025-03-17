import { useState } from "react";

const NValues = () => {
    const [isActive, setIsActive] = useState(false)



  return (
    <>
      <div>

        <section className="cards">
            <ul className="flex ">
                <li onClick={()=> {setIsActive(true)}}
                    className={isActive ? "bg-color-orange " : "bg-inherit"}>NAVIGATION</li>
                <li>NAVIGATION</li>
                <li>NAVIGATION</li>
                <li>NAVIGATION</li>

            </ul>
        </section>
      </div>
    </>
  );
};

export default NValues;
