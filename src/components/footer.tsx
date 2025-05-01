import { useEffect } from "react";
import initializeAOS from "../utils/aos-init";
import { notAvailableYet } from "../constants/assets";

const Footer = () => {
  useEffect(() => {
    initializeAOS();
  }, []);

  return (
    <div className="bg-gray-300">
      <img src={notAvailableYet} alt="no-data" className="w-30 h-30" />
      <span className="block my-4">No footer</span>
    </div>
  );
};

export default Footer;
