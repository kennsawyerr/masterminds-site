import { services } from "../constants/files";
const Services = () => {
  return (
    <>
      <div className="container ">
        <div className="text-box-cont border-y sect-pad">
          <h2>Our Services</h2>
          <ul className=" service-grid">
            {services.map((item) => (
              <li
                className="grid-item"
                key={item.id}
                style={{ backgroundImage: `url(${item.src})`,maxWidth:"100%" }}
              >
                {/* <div className="">
                  <img src={item.src} className="z-90" alt="" />
                </div> */}
                <div className="text-overlay">
                  <h1 className="services-h">{item.h1}</h1>
                  <p className="services-p">{item.paragraph}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </>
  );
};

export default Services;
