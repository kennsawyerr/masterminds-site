import Landingpage from "./Landingpage";
import { motion } from "framer-motion";
import NValues from "./NValues";
import NServices from "./NServices";
// import Services from "./Services";
//  add security cameras pictures
// add vessel scanners
const Home = () => {
  return (
    <>
      <motion.div className="">
        <Landingpage />
      
        <NValues/>
        <NServices/>
      </motion.div>
    </>
  );
};

export default Home;
