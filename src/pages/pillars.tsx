import PageWrapper from "../components/pageWrapper";
import { useEffect } from "react";
import initializeAOS from "../utils/aos-init";
import { pillar1, pillar2, pillar3, pillars, presido2 } from "../constants/assets";

const pillarsData = [
  {
    image: presido2,
    name: "HIGH CHIEF DR . SIR NWABUNIKE DARLINGTON (KSC), B.SC, MBA, FISMMN, ISMMN, PFD (ICHIE EZE NWAKAIBEYA OGBABALU AKU N’ANWU OJOTO)",
    title: "CEO, SAINT BUNIKS GROUP",
    position: "THE NATIONAL PRESIDENT OF DE IMPERIAL PHILANTHROPIC FAMILY",
  },
  {
    image: pillar1,
    name: "CHIEF OKORIE COLLINS M",
    title: "CEO, IMPEX ITALIA PRODUCTS",
    position: "THE NATIONAL VICE PRESIDENT 1 OF DE IMPERIAL PHILANTHROPIC FAMILY",
  },
  {
    image: pillar2,
    name: "CHIEF CHIBUEZE CHUKWUIGBO (ONYE NA CHI YA OKIJA)",
    title: "CEO, GOD'S WILL INT'L LTD",
    position: "THE NATIONAL 2ND VICE PRESIDENT OF DE IMPERIAL PHILANTHROPIC FAMILY",
  },
  {
    image: pillar3,
    name: "CHIEF CHINEDU CHARLES OZOMGBACHI",
    title: "MD/CEO, BEHOLD HOMES AND ESTATES DEVELOPMENT LTD",
    position: "THE NATIONAL 3RD VICE PRESIDENT OF DE IMPERIAL PHILANTHROPIC FAMILY",
  },
];

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

      <section className="mt-6 sm:mt-10 sm:w-[90%] mx-auto font-Inter">
        <h2
          className="text-center text-2xl sm:text-4xl font-extrabold sm:mb-6 font-Prism text-[#83787c]"
          data-aos="fade-down"
        >
          Meet Our Executive Members
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 sm:gap-10 gap-5 mt-10">
          {pillarsData.map((person, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-gray-100 sm:rounded-lg sm:shadow p-5"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={person.image}
                alt={person.name}
                className="sm:w-96 sm:h-96 h-64 w-full object-cover sm:rounded-lg shadow-lg mb-4"
              />
              <h3 className="text-lg font-semibold">{person.name}</h3>
              <p className="text-gray-500 my-2">{person.title}</p>
              <p className="font-medium">{person.position}</p>
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
};

export default Pillars;
