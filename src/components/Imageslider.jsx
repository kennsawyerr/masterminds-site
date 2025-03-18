/* eslint-disable react/prop-types */
import { useEffect, useState, useRef } from "react";
const Imageslider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentIndexRef = useRef(currentIndex);

  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 30000);


    return () => clearInterval(intervalId);
  }, [slides.length]);
  const sliderStylesContainer = {
    height: "100%",
    position: "relative",
  };
  const slideStyles = {
    width: "100%",
    height: "100%",
    
    backgroundImage: `url(${slides[currentIndex].src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <>
      <div style={sliderStylesContainer}>
        <div style={slideStyles} alt="a slideshow"></div>
      </div>
    </>
  );
};

export default Imageslider;
