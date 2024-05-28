
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container footer-flex sect-pad">
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
        </div>
      </footer>
    </>
  );
}

export default Footer