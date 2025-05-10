import PageWrapper from "../components/pageWrapper";
import { useEffect } from "react";
import initializeAOS from "../utils/aos-init";
import { pillars } from "../constants/assets";


const Pillars = () => {
  useEffect(() => {
    initializeAOS();
  }, []);

  return (
    <PageWrapper>
      <main className="relative w-full h-[50vh]">
        {/* Background Image */}
        <img
          src={pillars}
          alt="no-data"
          className="w-full h-full object-cover"
        />
      </main>
    </PageWrapper>
  );
};

export default Pillars;