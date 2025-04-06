import { Twirl as Hamburger } from "hamburger-react";
import { ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [isRecOpen, setIsRecOpen] = useState(false);
  const [color, setColor] = useState(false);

  const sidebarRef = useRef(null);
  const companyRef = useRef(null);
  const toggleNavbar = () => {
    setOpen(!isOpen);
  };
  const handleClickOutside = (event) => {
    if (companyRef.current && companyRef.current.contains(event.target)) {
      return;
    }

    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsRecOpen(false);
    }
  };

  const colorChange = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  window.addEventListener("scroll", colorChange);
  return (
    <>
      <section className={color ? "header bg-black" : "header"}>
        <div className="nav-flex">
          
            <div className="logo">Masterminds</div>
          
          <ul className={`menubar ${isOpen ? "flex" : "collapse-nav"}`}>
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
            <li
              className=""
              ref={companyRef}
              onClick={() => setIsRecOpen(!isRecOpen)}
            >
              Company 
              {/* style chevron to rotate when isRecOpen
              remove the padding from it  */}
              <span><ChevronRight/></span>
            </li>
          </ul>

          <section
            ref={sidebarRef}
            className={`floating-nav ${
              isRecOpen ? "isOpenStyle" : "isNotOpenStyle"
            }`}
          >
            {/* 
            1. nav responsive DONE
            2. navclickOutsideNAv  DONE
            3. nav closing majestically DONE
            4. nav should be the same size no matter content DONE GOOD ENOUGH
            5. navlinks hover DONE
            6. nav confirmed color DONE
            7. services pages with dynamic content DONE

            8. about page
            9. FAQ page
            10. Contact page with an email
            12. A simple privacy policy page along with Cookie policy and terms of use just like Services
            13. make other navbar and comment until tomorrow when you can make it responsive

            TOMORROW MORNING
            11. Responsive navbar
          
            
            
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
                      <a href="/about">
                        {" "}
                        About <hr />
                      </a>
                    </li>
                    <li className="t-20">
                      <a href="/contact">
                        Contact Information
                        <hr />
                      </a>
                    </li>
                    <li className="t-20 ">
                      <a href="/faqs">
                        FAQs
                        <hr />
                      </a>
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
                        <img src="/fernandina-vessel.jpg" alt="" />
                      </div>
                    </li>
                    <li className="pb-10 pt-20 pl-20">
                      <b>About</b>
                    </li>
                    <li className="pb-5  pt-5 pl-20">
                      <a href="">Why Masterminds</a>
                    </li>
                    <li className="pb-5 pt-5 pl-20">Career Areas</li>
                    <li className="pb-20 pt-5 pl-20">Join Us</li>
                  </ul>
                </div>
              </li>

{/* //  */}
              <li className="nav-cards ">
                <div className="col-flex  bg-color-grey">
                  <ul className="t-16">
                    <li>
                      <div className="nav-about-img">
                        <img src="/img-ecdis.webp" alt="" />
                      </div>
                    </li>
                    <li className="pb-10 pt-20 pl-20">
                      <b>Contact Information</b>
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
                        <img src="/closeups.jpg" alt="" />
                      </div>
                    </li>
                    <li className="pb-10 pt-20 pl-20">
                      <b>FAQs</b>
                    </li>
                    <li className="pb-5  pt-5 pl-20">Why Masterminds</li>
                    <li className="pb-5 pt-5 pl-20">Career Areas</li>
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
