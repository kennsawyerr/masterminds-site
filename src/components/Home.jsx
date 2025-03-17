import Values from "./Values";
import Landingpage from "./Landingpage";
import { motion } from "framer-motion";
import NValues from "./NValues";
// import Services from "./Services";
//  add security cameras pictures
// add vessel scanners
const Home = () => {
  return (
    <>
      <motion.div className="">
        <Landingpage />
        <Values />
        <NValues/>
      </motion.div>
    </>
  );
};

export default Home;
