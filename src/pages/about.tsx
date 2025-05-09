import PageWrapper from "../components/pageWrapper";
import { useEffect } from "react";
import initializeAOS from "../utils/aos-init";
import { mission, national } from "../constants/assets";

const About = () => {
  useEffect(() => {
    initializeAOS();
  }, []);

  return (
    <PageWrapper>
      <div className="mt-18">
        <div className="bg-gradient-to-b from-[#926014] to-white py-10">
          <h2
            className="text-center text-2xl sm:text-5xl font-bold mb-6 font-Montserrat text-white"
            data-aos="fade-up"
          >
            About Us
          </h2>
        </div>
        <div className="flex sm:flex-row flex-col items-center sm:mt-10 font-Montserrat sm:w-4/5 mx-auto">
          <div className="sm:w-1/2">
            <img
              src={national}
              alt="presido"
              className="sm:h-[80vh] sm:w-4/5 w-full"
              data-aos="fade-left"
            />
            <div className="text-sm sm:mt-3 sm:p-0 p-3">
                <p className="text-lg font-bold">HIGH CHIEF DR SIR DARLINGTON NWABUNIKE</p>
                <p className="italic">(ICHIE EZE NWAKAIBEYA OGBABALU AKU N’ANWU OJOTO)</p>
                <p className="font-semibold">NATIONAL PRESIDENT, DE IMPERIAL PHILANTHROPIC FAMILY</p>
            </div>
          </div>
          <div className="sm:w-1/2 sm:mt-0 mt-5 sm:p-0 p-3">
            <p data-aos="fade-right">
              <b>DE IMPERIAL PHILANTHROPIC FAMILY (DIPF)</b> is a corporate
              body, fully registered with the Corporate Affairs Commission (CAC)
              and founded in 2021. Its membership is largely composed of Private
              Sector Operators, drawn from diverse Business and Enterpreneurial
              inclinations, in Nigeria, and the Diaspora.
            </p>
            <br />
            <p data-aos="fade-left">
              The Institution’s Ideology rests on Humanitarian commonalities,
              manifesting in compelling imperatives of providing exigent
              Helpline Templates, in tackling issues of Maternal Death
              challenges, by erecting Cottage Health Facilities; Equipping
              already existing (but, poorly managed) Health Centres; Stimulating
              Educational Development through processed Scholarship Schemes and
              sundry Awards for all levels of Academic Excellence; Providing
              Technical Aids for Skills Acquisition and investing in Ventures,
              through which there is an intentional Institutional Reduction in
              Unemployment, Drug/Substance Abuse, Thuggery, Banditry, Armed
              Robbery and several other Anti- Social indulgences, thereby,
              retooling the Southeast, as a veritable Hub for Socio-Economic
              Growth, Development and Prosperity.{" "}
            </p>
            <br />
            <p data-aos="fade-right">
              <b>DE IMPERIAL PHILANTHROPIC FAMILY</b> recognises the Southeast
              Geopolitical Region, of Nigeria, as its catchment Humanitarian
              Jurisdiction, driven by an overriding Motto, “LIVING FOR
              HUMANITY”.
            </p>
          </div>
        </div>
      </div>
      <img src={mission} alt="mission" className="sm:w-4/5 mx-auto mt-5 sm:h-[150vh] sm:-mb-30 sm:px-0 px-3 sm:scale-75" data-aos="fade-down"/>
    </PageWrapper>
  );
};

export default About;
