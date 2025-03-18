import Imageslider from "./Imageslider";
const Landingpage = () => {
  const slides = [
    { src: "/fernandina-vessel.jpg" },
    { src: "/vessel.jpg" },
  ];

  const containerStyles = {
    width: "100%",
    height: "100%",
  };

  return (
    <>
      <section className="landing-page  ">
        <div style={containerStyles}>
          <Imageslider slides={slides} />
        </div>
        <div className="container text-box text-box-cont">
          <h1 className="hero-text">Tech-Driven Solutions for Tomorrow.</h1>
        </div>
      </section>
    </>
  );
};

export default Landingpage;
