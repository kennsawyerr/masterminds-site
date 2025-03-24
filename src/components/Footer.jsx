const Footer = () => {
  return (
    <>
      <footer>
        <div className=" footer-bg ">
          <div className="">
            <div className="text-box-cont">
              <div>
                <h1 className="logo ">Masterminds</h1>
              </div>

              <section className="">
                <ul className="">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                </ul>

                <ul className="flex5">
                  <ul>
                    <li>
                      <a href="#" className="">
                        FAQs
                      </a>
                    </li>
                    <li>
                      <a href="#" className="">
                        Our Services
                      </a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </ul>

                <ul className="footer-cont ">
                  <li className="footer-about">
                    <h4>About Masterminds</h4> Masterminds is a global leader in
                    innovative technologies and lifecycle solutions for the
                    marine and energy markets. We emphasise innovation in
                    sustainable technology and services to help our customers
                    continuously improve their environmental and economic
                    performance.
                  </li>
                  {/* <li>service@mastermindsng.com</li>
                <li>+2348034029099</li>
                <li>+2348023178009</li> */}
                </ul>
              </section>
            </div>
          </div>{" "}
        </div>

        <ul className="container small-txt ">
          <li className="grey">
            &copy;2025 Masterminds Global Concepts Limited
          </li>
          <li>
            <a href="/privacy-policy">Privacy Policy</a>
          </li>
          <li>
            <a href="/cookie-policy">Cookie Policy</a>
          </li>
          <li>
            <a href="/terms-of-use">Terms of Use</a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;

// What is going to be in the footer
