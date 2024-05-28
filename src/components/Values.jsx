import Vector from "./vector-image.jpg"

const Values = () => {
  return (
    <>
      <section className="sect-pad container our-values">
        <h5 className="white">The Masterminds Ecosystem</h5>
        <h2>Think Beyond Lorem Ipsum</h2>

        <ul className="flex grid">
          <li>Hardwork</li>
          <li>Quality</li>
          <li>Integrity</li>
          <li>Reliability</li>
        </ul>


<div className="text-box-container flex">
        <div className="our-values-img-container">
          <img src={Vector} alt="" />
        </div>
        <div className="our-values-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, ea libero.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti ad magni facilis quidem ducimus libero tenetur, officia omnis sapiente? Voluptatibus.
        </div>
        </div>
      </section>
    </>
  );
};

export default Values;
