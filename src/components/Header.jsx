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
        
            <ul className={`menubar ${isOpen ? "flex" : "collapse-nav"}`}>

            <li>
              <div className="logo">Masterminds</div>
            </li>
            <li>
              <a href="">Home</a>{" "}
            </li>
            <li>
              <a href="">About</a>
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
