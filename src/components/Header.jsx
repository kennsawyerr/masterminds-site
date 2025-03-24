import { Twirl as Hamburger } from "hamburger-react";
import { useState } from "react";
const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [color, setColor] = useState(false);

  const toggleNavbar = () => {
    setOpen(!isOpen);
  };

  const colorChange = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", colorChange);
  return (
    <>
      <section className={color ? "header black" : "header"}>
        <div className="nav-flex">
          <div className="logo">Masterminds</div>

          <ul className={`flex menubar  ${isOpen ? " " : "collapse-nav"}`}>
            <li>
              <a href="">Home</a>{" "}
            </li>

            <li href="">
              <a href="">About</a>{" "}
            </li>

            <li>
              <a href="">Energy</a>{" "}
            </li>
            <li>
              <a href="">Marine</a>{" "}
            </li>
            <li>
              <a href="">Company</a>{" "}
            </li>
          </ul>

          <ul className="flex menubar2">
    

            <li id="hamburger-menu">
              <Hamburger
                color="white"
                toggled={isOpen}
                toggle={setOpen}
                onClick={toggleNavbar}
              />
            </li>

          
          </ul>
        </div>
      </section>
    </>
  );
};

export default Header;
