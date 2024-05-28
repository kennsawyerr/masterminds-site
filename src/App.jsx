import { BrowserRouter as Router ,Routes , Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Landingpage from "./components/Landingpage";
// import Services from "./components/Services";
import Servicespage from "./components/Servicespage";
import NotFound from "./components/NotFound";
import About from "./components/About";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Landingpage />} />
          <Route path="/our-services" element={Servicespage} />
          <Route path="/about-us" element={<About/>} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Services/>
        <Footer />
      </Router>
    </>
  );
}

export default App;
