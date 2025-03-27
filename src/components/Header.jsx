import { Twirl as Hamburger } from "hamburger-react";
import { useState } from "react";
const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [isRecOpen, setIsRecOpen] = useState(false);
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
            <li className="" onClick={() => setIsRecOpen(!isRecOpen)}>
              Company
            </li>
          </ul>

          <section
            // need smooth translate from top till full height
            className={`floating-nav ${
              isRecOpen ? "isOpenStyle" : "isNotOpenStyle"
            }`}
          >
            {/* 
            1. nav responsive DONE
            2. navclickOutsideNAv
            3. nav closing majestically DONE GOOD ENOUGH
            4. nav should be the same size no matter content
            5. navlinks hover 
            6. nav confirmed color

            7. services pages with dynamic content
            8. about pages
            9. FAQ page
            10. Contact page with an email
            
            
            */}
            <ul className="nav-flex">
              <li className="nav-cards">
                <div className="col-flex bg-color-grey ">
                  <ul className="border-btm pt-50 pb-60 pl-10 pr-10">
                    <li className="mt-10 t-14">
                      <span className="t-16 pb-10 b-500">Company</span>
                      <br />
                      Masterminds is a global leader in innovative technologies
                      and lifecycle solutions for the marine and energy markets.
                    </li>
                    <li className="t-20 mt-40">
                      About <hr />
                    </li>
                    <li className="t-20">
                      Contact Information
                      <hr />
                    </li>
                    <li className="t-20 ">
                      FAQs
                      <hr />
                    </li>
                  </ul>
                </div>
              </li>
              {/* end of one li */}

              <li className="nav-cards ">
                <div className="col-flex  bg-color-grey">
                  <ul className="t-16">
                    <li>
                      <div className="nav-about-img">
                        <img src="fernandina-vessel.jpg" alt="" />
                      </div>
                    </li>
                    <li className="pb-10 pt-20 pl-20">
                      <b>About</b>
                    </li>
                    <li className="pb-5  pt-5 pl-20">Why Masterminds</li>
                    <li className="pb-5 pt-5 pl-20">Career Areas</li>
                    <li className="pb-20 pt-5 pl-20">Join Us</li>
                  </ul>
                </div>
              </li>

              <li className="nav-cards ">
                <div className="col-flex  bg-color-grey">
                  <ul className="t-16">
                    <li>
                      <div className="nav-about-img">
                        <img src="img-ecdis.webp" alt="" />
                      </div>
                    </li>
                    <li className="pb-10 pt-20 pl-20">
                      <b>About</b>
                    </li>
                    <li className="pb-5  pt-5 pl-20">Why Masterminds</li>
                    <li className="pb-5 pt-5 pl-20">Career Areas</li>
                    <li className="pb-20 pt-5 pl-20">Join Us</li>
                  </ul>
                </div>
              </li>

              <li className="nav-cards ">
                <div className="col-flex  bg-color-grey">
                  <ul className="t-16">
                    <li>
                      <div className="nav-about-img">
                        <img src="closeups.jpg" alt="" />
                      </div>
                    </li>
                    <li className="pb-10 pt-20 pl-20">
                      <b>FAQs</b>
                    </li>
                    <li className="pb-5  pt-5 pl-20">Why Masterminds</li>
                    <li className="pb-5 pt-5 pl-20">Career Areas</li>
                    <li className="pb-20 pt-5 pl-20">Join Us</li>
                  </ul>
                </div>
              </li>
            </ul>
          </section>

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
