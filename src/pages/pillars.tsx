import PageWrapper from "../components/pageWrapper";
import { useEffect } from "react";
import initializeAOS from "../utils/aos-init";
import {
  patron1,
  patron2,
  pillar1,
  pillar10,
  pillar11,
  pillar12,
  pillar13,
  pillar14,
  pillar15,
  pillar16,
  pillar17,
  pillar2,
  pillar3,
  pillar4,
  pillar5,
  pillar6,
  pillar7,
  pillar8,
  pillar9,
  pillars,
  presido2,
} from "../constants/assets";

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
    position:
      "THE NATIONAL VICE PRESIDENT 1 OF DE IMPERIAL PHILANTHROPIC FAMILY",
  },
  {
    image: pillar2,
    name: "CHIEF CHIBUEZE CHUKWUIGBO (ONYE NA CHI YA OKIJA)",
    title: "CEO, GOD'S WILL INT'L LTD",
    position:
      "THE NATIONAL 2ND VICE PRESIDENT OF DE IMPERIAL PHILANTHROPIC FAMILY",
  },
  {
    image: pillar3,
    name: "CHIEF CHINEDU CHARLES OZOMGBACHI",
    title: "MD/CEO, BEHOLD HOMES AND ESTATES DEVELOPMENT LTD",
    position:
      "THE NATIONAL 3RD VICE PRESIDENT OF DE IMPERIAL PHILANTHROPIC FAMILY",
  },
  {
    image: pillar4,
    name: "CHIEF/BAR/SIR MIKE ENENDU (KSC, ESQ, B.A.(HONS), LLB (LAG), BL, SCMA)",
    title: "NWACHINEMELU OF ALOR KINGDOM",
    position: "THE SECRETARY GENERAL OF DE IMPERIAL PHILANTHROPIC FAMILY",
  },
  {
    image: pillar5,
    name: "CHIEF DR EVANS CHUKWUBUIKEM METUH (AMULUONYENAEGO, ONYINYE CHUKWU NNYELU ABATETE)",
    title: "CEO MEVANO GROUP",
    position: "S.S.A TO DE IMPERIAL PHILANTHROPIC FAMILY EXECUTIVES",
  },
  {
    image: pillar6,
    name: "HON. EZEH CHINONSO (EZESINACHI IHIALA)",
    title: "CEO WHITEDOVE LOGISTICS & SUPPLIES LTD",
    position: "FINANCIAL SECRETARY OF DE IMPERIAL PHILANTHROPIC FAMILY",
  },
  {
    image: pillar7,
    name: "CHIEF EZEUKWU BASIL",
    title: "CEO KAKA STANDARD GLOBAL INTERGRATED LTD",
    position: "THE NATIONAL TREASURER OF DE IMPERIAL PHILANTHROPIC FAMILY",
  },
  {
    image: pillar8,
    name: "CHIEF VICTOR NWARIBEAKU (AKWAUGO 1 OF AWOIDEMILI)",
    title: "CEO VCN SPORTS LTD, CHAIRMAN HARVESTER HOTEL AND SUITES LTD",
    position: "SSA TO DE IMPERIAL PHILANTHROPIC FAMILY ON FINANCE",
  },
  {
    image: pillar9,
    name: "CHIEF IFEAKANDU OBIUDO (OFUONYE CHIYA N'AGBARIZU NA ALOR)",
    title: "CEO AMPIO SMART HOMES LTD, CEO MOVEL ELEVATORS NIG LTD",
    position: "THE DIASPORA COORDINATOR OF DE IMPERIAL PHILANTHROPIC FAMILY",
  },
  {
    image: pillar10,
    name: "CHIEF ANTHONY IFEANYI UNIGWE (ONWA 1 OF OZUBULU)",
    title: "CEO IFECOTONEX EXPRESS GLOBAL NIG LTD",
    position:
      "ASSISTANT DIASPORA COORDINATOR OF DE IMPERIAL PHILANTHROPIC FAMILY",
  },
  {
    image: pillar11,
    name: "CHIEF CHUMA NZE EBUKA NZEBULUEBU",
    title: "CEO CHUKS LINK AUTOMOBILE",
    position:
      "THE NATIONAL WELFARE OFFICER OF DE IMPERIAL PHILANTHROPIC FAMILY",
  },
  {
    image: pillar12,
    name: "OZO ST. ANTHONY IKENNA ANICHEBE (KUNENYEIFE 1 NA UMUOJI | AGUOBUOWA NA EZEAGU)",
    title: "CEO SONCHEB INVESTMENT CO LTD / PURECHEB LTD CHEB GROUP",
    position:
      "THE NATIONAL SECOND WELFARE OFFICER OF DE IMPERIAL PHILANTHROPIC FAMILY",
  },
  {
    image: pillar13,
    name: "CHIEF OGECHUKWU MMADUAFU (NWACHINAEMERE ISUOFIA)",
    title: "CEO OMASTINE PHARM LTD",
    position:
      "THE NATIONAL THIRD WELFARE OFFICER OF DE IMPERIAL PHILANTHROPIC FAMILY",
  },
  {
    image: pillar14,
    name: "CHIEF OBINNA ODIBELU (EGO NA EJE IJE NA NIMO)",
    title: "CEO/MD ODIANO WORLD NATIONAL",
    position: "THE NATIONAL PRO TO DE IMPERIAL PHILANTHROPIC FAMILY",
  },
  {
    image: pillar15,
    name: "CHIEF CHIDUBEM PETER OKONKWO (DIKE-DIORAMMA OF OJOTO)",
    title:
      "C.E.O DUOSERVE GLOBAL MARINE SERVICES LTD, CEO IFGREEEN INDUSTRIES & INVST. LTD",
    position: "THE NATIONAL PROVOST TO DE IMPERIAL PHILANTHROPIC FAMILY",
  },
  {
    image: pillar16,
    name: "CHIEF EVANS IZUNNA CHUKWUKADIBIA EMESIM (OKWUMEREZE NA UKPOR, ONONAIKPOGARAYA NDI IGBO)",
    title:
      "CEO- KOBOKO ENTERTAINMENT AND RECREATION, CEO G7-EMPIRE, CEO DE EMPRESS CONCEPT, DIRECTOR RENDEZVOUS CITY CENTRE - LIFESTATION LEKKI, CEO NEW WAVE MARKET",
    position:
      "FOUNDER - DE IMPERIAL PHILANTHROPIC FAMILY, FOUNDER - IFEDIMMA FRIENDS CLUB OF NIG, CO-FOUNDER ISI-OBI NDI IGBO FOUNDATION OF NIGERIA, FOUNDER - OKWUMEREZE EMPOWERMENT FOUNDATION",
  },
  {
    image: pillar17,
    name: "EZEANI B.C. IGWILO, BL,LLB,LLM, SAN (CHANCELLOR)",
    title:
      "FOUNDING PARTNER, INDEMNITY PARTNERS, LEGAL PRACTITIONERS, ABUJA & LAGOS; NOTABLE COUNTRY ASSIGNMENT; COORDINATING COUNSEL AND MEMBER WORLD BANK /FGN ASSESSMENT AND STUDY TEAM WHICH PRODUCED THE FRAMEWORK FOR THE CONCESSION OF THE NIGERIA PORTS AUTHORITY",
    position: "LEGAL ADVISOR TO DE IMPERIAL PHILANTHROPIC FAMILY",
  },
];

const grandPatronsData = [
  {
    image: patron1,
    name: "CHIEF BENSON CHINEDU MADUBUKO (EZEANI CHINAECHENDO 1 OF ADAZIANI)",
    title: "CHAIRMAN/CHIEF EXECUTIVE OFFICER OF DE CHICO INVESTMENT LIMITED",
    position: "GRAND PATRON",
    text1:
      "MADUBUKO Ezeani Chinechendo of Adazi-ani in Anaocha Local Government Area of Anambra State is the Chairman /Chief Executive Officer of De Chico Investment Limited, an Indigenous company specialized in manufacturing and distributorship of building materials – Aluminium Profiles, Stone coated Roofing Sheets, all types of ceiling cladding. He is an unassuming, dynamic, and articulate entrepreneur with over three decades of experience in business.",
    text2:
      "Moved by compassion and having observed youths roam about in the streets without jobs, widows and the sick crying for help, some students in tertiary institutions drop out of school for lack of financial support, Chief Chinedu Madubuko & family inaugurated Zeph Care Foundation, Port Harcourt branch in October, 2017 to reach out to these less privileged ones in the society irrespective of tribe or religion. Between 2017 and October 2021, the Port Harcourt chapter of the Foundation assisted a total of 704 persons with various sums totalling N67.6million. The areas of assistance covered :- – Skill Acquisition – Medical Assistance – Liw seed Capital Assistance – Widows Empowerment & other less privileged adults, – Scholarship to students in tertiary institutions etc.",
    text3:
      "In December 2020 and guided by the dictum of Charity Begins at home, Chief Chinedu Madubuko thought it wise to also establish the home chapter of Zeph Care Foundation in his hometown Adazi -Ani. He therefore committed the sum of N100million for 5years to assist the needy.",
    text4:
      "So far, in 2021 and 2022 he has funded the Zeph Care Foundation Empowerment Program with N40million for which of 415 persons benefitted with assistance ranging from N50,000 to N1million. He has provided a deep water borehole and reticulated it in Adazi Community High School jointly onwed by Adaziani and Adazi-enu. The value of borehole drilling and reticulation was N6million. He has championed various infrastructural development projects in his Adazi-Ani community. He constructed and asphalted 21 roads measuring 14.52km with drainages in the 3 clans in his community. Available data on road infrastructure puts the cost of 1km of road at N200m to N250m/ km.",
    text5:
      "In the well attended 2021 National Security Summit-The Nigerian Question organised by The Faculty of Social Sciences of Nnamdi Azikiwe University, where he was honoured, he committed to building a 500 seater Auditorium with offices for the faculty at a cost N250million. He is noted for his corporate social responsibility projects in his business operational areas. He is a recipient of so many awards. The recent in 2022 is the Sun Newspapers 'ENTREPRENEUR OF THE YEAR AWARD 2021'",
    text6:
      "Chief Chinedu Madubuko hails from Ikenga Village, Adazi Ani in Anaocha Local Government Area of Anambra State. He holds a Bachelor of Science Degree in Management Science from Rivers State University of Science and Technology, Port Harcourt. Ezeani Chinechendo is happily married to Mrs Chinelo Madubuko and they are blessed with five children.",
  },
  {
    image: patron2,
    name: "CHIEF DR. INNOCENT CHUKWUMA OFR (IFEDIASO NNEWI, OKPU-UZU NDI-IGBO)",
    title: "CHAIRMAN/CHIEF EXECUTIVE OFFICER OF INNOSON GROUP",
    position: "GRAND PATRON",
    text1:
      "Chief Dr. Innocent Chukwuma OFR was born on Oct 1, 1960. He is one of the privileged recipient of the Nigeria Centenary Honour Award coffered on him by the then President Goodluck Ebele Jonathan, GCFR in recognition of his role as the first indigenous local vehicle manufacturer in Nigeria and employer of labour in March 2014 during the Centenary Celebrations.",
    text2:
      "Chairman/CEO of Innoson Group. Innoson Vehicles Manufacturing, a subsidiary company under the Innoson Group located in Nnewi, Anambra State is the first wholly indigenous vehicle manufacturing company in Africa with an installed capacity to produce about 60,000 vehicles per annum. Its sister company, Innoson Technical and Industrial Company Ltd where some of the plastic components of Innoson Vehicles are produced is reputed to be largest plastic manufacturing company in West Africa with over 150 lines of products.",
    text3:
      "Chief Dr Innocent Chukwuma is the Chancellor of Imo State University and a recipient of about Seven (7) Honorary Doctorate Degrees from different Institutions which includes; Nigerian Defence Academy (NDA) Kaduna, University of Nigeria Nsukka, University of Calabar, Nnamdi Azikiwe University, Enugu State University, Bells University Ota Ogun State, Wellspring University Edo State etc. He is a man endowed with high business acumen that dazed his contemporaries when he became the first private Nigerian to locally assemble and subsequently manufacture motorcycles as well as vehicles in Nigeria.",
    text4:
      "Through his ingenuity he transformed a small trading business (Innoson Nig Ltd) which he started in 1981 after his apprenticeship, to a corporate organization of international recognition known as IVM Innoson Group with six subsidiary companies.",
    text5:
      "For his philanthropy and Excellence in Business, Chief Chukwuma has been honoured with hundreds of awards and recognitions from the Federal and State Government, Academic Institutions, Media, Professional and Business Organisations etc.",
    text6:
      "Chief Dr Innocent Chukwuma OFR is happily married and blessed with children.",
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
              className="flex flex-col items-center text-center bg-gray-100 sm:rounded-lg sm:shadow p-3"
              data-aos="fade-up"
              data-aos-delay={index * 50}
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

        <h2
          className="text-center text-2xl sm:text-4xl font-extrabold mt-10 sm:mb-6 font-Prism text-[#83787c]"
          data-aos="fade-down"
        >
          OUR GRAND PATRONS
        </h2>

        <div className="mt-10 space-y-10">
          {grandPatronsData.map((patron, index) => (
            <div
              key={index}
              className="bg-gray-100 p-3 sm:rounded-lg sm:shadow"
              data-aos="fade-up"
            >
              <img
                src={patron.image}
                alt={patron.name}
                className="float-left w-full sm:w-96 h-auto object-cover rounded-lg shadow-lg mr-6 mb-4"
              />
              <div className="text-left">
                <h3 className="text-xl font-semibold">{patron.name}</h3>
                <p className="text-gray-500 my-2 whitespace-pre-wrap">
                  {patron.title}
                </p>
                <p className="font-medium whitespace-pre-wrap">
                  {patron.position}
                </p>
                <p className="mt-10 whitespace-pre-wrap">{patron.text1}</p>
                <br />
                <p className="whitespace-pre-wrap">{patron.text2}</p>
                <br />
                <p className="whitespace-pre-wrap">{patron.text3}</p>
                <br />
                <p className="whitespace-pre-wrap">{patron.text4}</p>
                <br />
                <p className="whitespace-pre-wrap">{patron.text5}</p>
                <br />
                <p className="whitespace-pre-wrap">{patron.text6}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
};

export default Pillars;
