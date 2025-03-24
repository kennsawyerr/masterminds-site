import { Twirl as Hamburger } from "hamburger-react";
import { FaSearch } from "react-icons/fa";
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
        <div className="nav-flex menubar">
          <div className="logo">Masterminds</div>

          <ul className={`flex   ${isOpen ? " " : "collapse-nav"}`}>
            <li >
              <a href="">Home</a>{" "}
            </li>

            <li href= "">
              <a href="">About</a>{" "}
            </li>

            <li>
              <a href="">Services</a>{" "}
            </li>
          </ul>

          <ul className="flex ">
            <li>
              <button>
                <FaSearch  size={25}/>
              </button>
            </li>

            <li id="hamburger-menu">
              <Hamburger
                color="white"
                toggled={isOpen}
                toggle={setOpen}
                onClick={toggleNavbar}
              />
            </li>

            <li>
              <button className="contact-btn">Contact Us</button>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Header;
