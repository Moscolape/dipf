import PageWrapper from "../components/pageWrapper";
import { useEffect } from "react";
import Marquee from "react-fast-marquee";
import initializeAOS from "../utils/aos-init";
import {
  bg1,
  dipf1,
  dipf10,
  dipf2,
  dipf3,
  dipf4,
  dipf5,
  dipf6,
  dipf7,
  dipf8,
  dipf9,
  logo,
//   svgBackground,
} from "../constants/assets";

const Home = () => {
  useEffect(() => {
    initializeAOS();
  }, []);

  return (
    <PageWrapper>
      <div className="relative w-full h-screen">
        {/* Background Image */}
        <img src={bg1} alt="no-data" className="w-full h-full object-cover" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#00000072] flex items-center justify-center text-center p-4 font-Montserrat">
          <div className="text-white space-y-4 max-w-3xl">
            <h1 className="text-3xl sm:text-6xl font-bold" data-aos="fade-left">
              DE IMPERIAL PHILANTHROPIC FAMILY
            </h1>
            <span
              className="inline-block w-1/2 bg-white h-3 my-5"
              data-aos="fade-up"
            ></span>
            <p className="text-lg sm:text-3xl" data-aos="fade-right">
              Living for Humanity
            </p>
          </div>
        </div>
      </div>

      {/* Identity Section */}
      <div className="flex sm:flex-row flex-col mt-16">
        <div
          className="max-w-xl mx-auto sm:text-center relative"
          data-aos="fade-down"
        >
          <h1 className="text-2xl sm:text-4xl font-Montserrat font-bold mb-5 text-center">
            Who We Are
          </h1>
          <p className="font-DM-Sans sm:text-lg text-[1rem] px-3">
            <b>DE IMPERIAL PHILANTHROPIC FAMILY (DIPF)</b> is a group of
            patriotic, responsible, responsive and dutiful persons, drawn from
            the South-Eastern demographic of Nigeria and across global diaspora.
          </p>
          <img
            src={logo}
            alt="watermark"
            className="absolute top-0 sm:right-[40%] right-20 w-60 opacity-10 pointer-events-none z-30"
          />
        </div>
        <div
          className="max-w-xl mx-auto sm:text-center relative mt-10 sm:mt-0"
          data-aos="fade-down"
        >
          <h1 className="text-2xl sm:text-4xl font-Montserrat font-bold mb-5 text-center">
            Who We Are Not
          </h1>
          <p className="font-DM-Sans sm:text-lg text-[1rem] px-3">
            <b>DE IMPERIAL PHILANTHROPIC FAMILY (DIPF)</b> is <b>NOT</b> a club,
            society or political pressure group. <b>DIPF is NOT</b> driven by
            any political aspiration, interest or sponsorship of anyone
            harbouring a political interest.
          </p>
          <img
            src={logo}
            alt="watermark"
            className="absolute top-0 sm:right-[40%] right-20 w-60 opacity-10 pointer-events-none z-30 transform rotate-180"
          />
        </div>
      </div>

      <div className="mt-16" data-aos="fade-up">
        <h2 className="text-center text-2xl sm:text-4xl font-bold mb-6 font-Montserrat">
          Moments We Cherish
        </h2>
        <Marquee className="overflow-hidden w-full">
          <div className="flex flex-wrap gap-4 justify-center items-center mr-4">
            {[
              dipf1,
              dipf2,
              dipf3,
              dipf4,
              dipf5,
              dipf6,
              dipf7,
              dipf8,
              dipf9,
              dipf10,
            ].map((imgSrc, index) => (
              <img
                key={index}
                src={imgSrc}
                alt={`moment-${index + 1}`}
                className="w-72 h-56 object-cover rounded-lg shadow-md"
              />
            ))}
          </div>
        </Marquee>
      </div>
      {/* <div
        className="sm:mt-16 mt-10 bg-cover bg-center bg-no-repeat py-20 px-4 text-white"
        style={{ backgroundImage: `url(${svgBackground})` }}
      >
        <h1 className="text-4xl font-bold text-center">Core Values</h1>
      </div> */}
    </PageWrapper>
  );
};

export default Home;
