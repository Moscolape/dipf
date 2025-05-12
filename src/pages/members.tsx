import PageWrapper from "../components/pageWrapper";
import { useEffect } from "react";
import initializeAOS from "../utils/aos-init";
import {
  kbk1,
  kbk10,
  kbk11,
  kbk12,
  kbk13,
  kbk14,
  kbk15,
  kbk2,
  kbk3,
  kbk4,
  kbk16,
  kbk17,
  kbk18,
  kbk19,
  kbk20,
  kbk21,
  kbk22,
  kbk23,
  kbk24,
  kbk25,
  kbk26,
  kbk27,
  kbk28,
  kbk29,
  kbk30,
  kbk31,
  kbk32,
  kbk33,
  kbk34,
  kbk35,
  kbk36,
  kbk37,
  kbk38,
  kbk39,
  kbk40,
  kbk41,
  kbk42,
  kbk43,
  kbk44,
  kbk45,
  kbk46,
  kbk47,
  kbk48,
  kbk5,
  kbk6,
  kbk7,
  kbk8,
  kbk9,
} from "../constants/assets";
import { ArrowRight } from "lucide-react";

const Members = () => {
  useEffect(() => {
    initializeAOS();
  }, []);

  const koboko = [
    kbk1,
    kbk2,
    kbk3,
    kbk4,
    kbk10,
    kbk11,
    kbk12,
    kbk13,
    kbk14,
    kbk15,
    kbk16,
    kbk17,
    kbk18,
    kbk19,
    kbk20,
    kbk21,
    kbk22,
    kbk23,
    kbk24,
    kbk25,
    kbk26,
    kbk27,
    kbk28,
    kbk29,
    kbk30,
    kbk31,
    kbk32,
    kbk33,
    kbk34,
    kbk35,
    kbk36,
    kbk37,
    kbk38,
    kbk39,
    kbk40,
    kbk41,
    kbk42,
    kbk43,
    kbk44,
    kbk45,
    kbk46,
    kbk47,
    kbk48,
    kbk5,
    kbk6,
    kbk7,
    kbk8,
    kbk9,
  ];

  return (
    <PageWrapper>
      <div className="pt-12 px-6 sm:w-[90%] mx-auto font-Montserrat">
        <h1 className="text-2xl sm:text-5xl font-Montserrat font-bold mb-4 text-center animate-color-cycle" data-aos="fade-down">
          Our Elite Members
        </h1>

        <div className="text-center mb-10 flex justify-center" data-aos="zoom-in">
          <a
            href="/membership"
            className="flex justify-center sm:w-[15%] w-1/2 text-white hover:bg-[#b58825] font-semibold transition duration-300 bg-black px-4 py-2 rounded"
          >
            Join Us <ArrowRight className="text-white w-5 h-5 ml-2 mt-[0.125rem]" />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 sm:gap-10 gap-5">
          {koboko.map((kbk, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 15}>
              <img
                src={kbk}
                alt="kbk"
                className="sm:w-96 h-128 w-full object-cover sm:rounded-lg shadow-lg mb-4 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Members;
