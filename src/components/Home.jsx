import Values from "./Values";
import Landingpage from "./Landingpage";
import { motion } from "framer-motion";
// import Services from "./Services";

const Home = () => {
  return (
    <>
      <motion.div className="">
        <Landingpage />
        <Values />
      </motion.div>
    </>
  );
};

export default Home;
