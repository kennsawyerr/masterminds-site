const Footer = () => {
  return (
    <>
      <footer>
        <div className=" footer-flex ">
          <div className="container">
            {" "}
            <div className="text-box-cont">
              {/* <p className="">
                  Copyright &copy; 2025 Masterminds Global Concept
                </p> */}

              <div>
                <h1 className="logo">Masterminds</h1>
              </div>

              <ul className="flex5">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                </ul>
                <ul className="flex5">
                  <li>
                    <a href="#">FAQs</a>
                  </li>
                  <li>
                    <a href="#">Our Services</a>
                  </li>
                </ul>

                <ul>
                  <li><a href="#">Contact</a></li>
                  {/* <li>service@mastermindsng.com</li>
                <li>+2348034029099</li>
                <li>+2348023178009</li> */}
                </ul>
              </ul>
            </div>
          </div>{" "}
        </div>

        <ul className="container small-txt">
          <li>c 2025 Masterminds Global Concepts Limited</li>
          <li>Privacy Policy</li>
          <li>Cookie Policy</li>
          <li>Terms of Use</li>
        </ul>
      </footer>
     
    </>
  );
};

export default Footer;

// What is going to be in the footer
