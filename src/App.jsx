import { BrowserRouter as Router ,Routes , Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

import Servicespage from "./components/Servicespage";
import NotFound from "./components/NotFound";
import About from "./components/About";

import Home from "./components/Home";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/our-services" element={Servicespage} />
          <Route path="/about-us" element={<About/>} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
  
        <Footer />
      </Router>
    </>
  );
}

export default App;
