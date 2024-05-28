import { services } from "../constants/files";
const Services = () => {
  return (
    <>
      <div className="container">
        <ul className="flex service-flex sect-pad">
          {services.map((item) => (
            <li className="cards" key={item.id}>
              <div className="img-container">
                <img src={item.src} className="" alt="" />
              </div>
              <div className="text-overlay">
                <h1 className="services-h">{item.h1}</h1>
                <p className="services-p">{item.paragraph}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Services;
