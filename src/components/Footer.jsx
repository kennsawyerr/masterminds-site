
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container footer-flex sect-pad">
          <div className="text-box-cont">
            <ul>
              <li>
                {" "}
                <div className="logo text-black">Masterminds</div>
              </li>
              <li>
                <p className="">
                  Copyright &copy; 2024 Masterminds Global Concept
                </p>
              </li>
            </ul>

            <ul className="">
              <li>Home</li>
              <li>About</li>
            </ul>
            <ul className="">
              <li>Contact</li>
              <li>Services</li>
            </ul>
            <p>
              Email: service@mastermindsng.com or Call: +2348034029099
              +2348023178009
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer