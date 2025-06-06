import PageWrapper from "../components/pageWrapper";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { X } from "lucide-react";

import Marquee from "react-fast-marquee";
import initializeAOS from "../utils/aos-init";
import {
  agm11,
  agm16,
  agm17,
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
  hospital12,
  hospital4,
  hospital7,
  jamb1,
  jamb11,
  jamb5,
  jamb9,
  logo,
  scholarship,
  svgBackground,
} from "../constants/assets";
import { Camera, Shell, Truck } from "lucide-react";
import Metrics from "../components/metrics";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const hasSeenModal = localStorage.getItem("hasSeenScholarshipModal");
    if (!hasSeenModal) {
      setShowModal(true);
    }
    initializeAOS();
  }, []);

  const closeModal = () => {
    setShowModal(false);
    localStorage.setItem("hasSeenScholarshipModal", "true");
  };

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setShowModal(false);
        localStorage.setItem("hasSeenScholarshipModal", "true");
      }
    };

    if (showModal) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showModal]);

  return (
    <PageWrapper>
      <main className="relative w-full h-screen">
        {/* Background Image */}
        <img src={bg1} alt="no-data" className="w-full h-full object-cover" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#00000072] flex items-center justify-center text-center p-4 font-Montserrat">
          <div className="text-white space-y-4 max-w-3xl">
            <h1
              className="text-3xl sm:text-6xl font-bold"
              data-aos="fade-right"
            >
              DE IMPERIAL PHILANTHROPIC FAMILY
            </h1>
            <span
              className="inline-block w-1/2 bg-white h-3 my-5"
              data-aos="fade-left"
            ></span>
            <p className="text-lg sm:text-3xl" data-aos="fade-right">
              Living for Humanity
            </p>
          </div>
        </div>
      </main>

      {/* Identity Section */}
      <section className="flex sm:flex-row flex-col mt-16">
        <div
          className="max-w-xl mx-auto sm:text-center relative"
          data-aos="fade-down"
        >
          <h1 className="text-2xl sm:text-4xl font-Montserrat font-bold mb-5 text-center">
            Who We Are
          </h1>
          <h1 className="font-DM-Sans sm:text-lg text-[1rem] px-3">
            <b>DE IMPERIAL PHILANTHROPIC FAMILY (DIPF)</b> is a group of
            patriotic, responsible, responsive and dutiful persons, drawn from
            the South-Eastern demographic of Nigeria and across global diaspora.
          </h1>
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
          <h1 className="font-DM-Sans sm:text-lg text-[1rem] px-3">
            <b>DE IMPERIAL PHILANTHROPIC FAMILY (DIPF)</b> is <b>NOT</b> a club,
            society or political pressure group. <b>DIPF is NOT</b> driven by
            any political aspiration, interest or sponsorship of anyone
            harbouring a political interest.
          </h1>
          <img
            src={logo}
            alt="watermark"
            className="absolute top-0 sm:right-[40%] right-20 w-60 opacity-10 pointer-events-none z-30 transform rotate-180"
          />
        </div>
      </section>

      <section className="mt-16" data-aos="fade-up">
        <h2 className="text-center text-2xl sm:text-4xl font-bold mb-6 font-Montserrat">
          Moments We Cherish
        </h2>
        <Marquee className="overflow-hidden w-full">
          <div className="flex flex-wrap gap-4 justify-center items-center mr-4">
            {[
              dipf1,
              jamb11,
              dipf2,
              hospital12,
              dipf3,
              agm11,
              dipf4,
              jamb5,
              dipf5,
              hospital4,
              dipf6,
              agm16,
              dipf7,
              jamb9,
              dipf8,
              hospital7,
              dipf9,
              agm17,
              dipf10,
              jamb1
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
      </section>
      <section className="sm:mt-16 mt-10 relative w-full sm:h-[40vh] h-[100vh]">
        <img
          src={svgBackground}
          alt="no-data"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0000004b] flex flex-col items-center justify-center text-center p-4 font-Montserrat">
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full text-white px-4"
            data-aos="fade-down"
          >
            <div className="flex flex-col items-center space-y-2">
              <Truck className="sm:w-20 sm:h-20 w-14 h-14 text-white animate-moveX" />
              <h2 className="text-2xl font-semibold">Our Mission</h2>
              <p className="">
                To aid the socio-economic development of South-Eastern Nigeria
                through laudable initiatives and targeted empowerments.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Camera className="sm:w-20 sm:h-20 w-14 h-14 text-white animate-bump" />
              <h2 className="text-2xl font-semibold">Our Vision</h2>
              <p className="">
                Improvement of economic, education, work, health and social
                relations of beneficiaries through commitment of members.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Shell className="sm:w-20 sm:h-20 w-14 h-14 text-white rotate-small" />
              <h2 className="text-2xl font-semibold">Our Motto</h2>
              <p className="">Living for Humanity.</p>
            </div>
          </div>
        </div>
      </section>
      <Metrics />
      <main className="mt-6 sm:w-[90%] mx-auto" data-aos="fade-up">
        <h2 className="text-center text-2xl sm:text-4xl font-bold mb-6 font-Montserrat">
          Recent Initiatives
        </h2>
        <div className="flex sm:flex-row flex-col">
          <img
            src={scholarship}
            alt="dipfam"
            className="sm:w-1/3"
            data-aos="fade-in"
          />
          <div className="sm:w-2/3 font-Montserrat px-3 pt-3 sm:pt-0 sm:px-10">
            <p>
              <b>DE IMPERIAL PHILANTHROPIC FAMILY</b> announces a groundbreaking
              initiative aimed at empowering Nigerian youths through education.
              We are launching a <b>₦50 Million (Fifty Million Naira)</b> DIPF
              Scholarship Program for the 2025 Best Performing Joint Admissions
              and Matriculation Board (JAMB) Students across all 36 states in
              Nigeria and the Federal Capital Territory, Abuja.
            </p>
            <br />
            <p>
              This initiative is part of our broader mission to uplift education
              standards and provide equitable access to quality learning
              experiences for all Nigerian students. This initiative will:
            </p>
            <ul className="ml-5 list-disc mt-3">
              <li>
                <b>Encourage academic excellence</b> by rewarding and motivating
                students to strive for higher academic achievements.
              </li>
              <li>
                <b>Enhance accessibility to education</b> by providing financial
                support to students who may lack the resources to pursue higher
                education.
              </li>
              <li>
                <b>Empower future leaders</b> by investing in the next
                generation of leaders via the facilitation of their educational
                journey.
              </li>
            </ul>
            <br />
            <p>
              For more information, check{" "}
              <a
                href="/initiatives/de-imperial-philanthropic-family-scholarship-for-2025-top-jamb-performers"
                className="text-blue-600 hover:underline font-medium"
              >
                this page
              </a>
              . To register for the scholarship program, click the button below;
            </p>
            <br />
            <button className="px-6 py-3 bg-red-600 text-white hover:bg-black hover:font-medium transition-all cursor-pointer">
              <a href="/initiatives/de-imperial-philanthropic-family-scholarship-for-2025-top-jamb-performers/register">
                Register Now
              </a>
            </button>
          </div>
        </div>
      </main>

      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          <div
            className="bg-white rounded-lg max-w-5xl w-full relative shadow-lg overflow-hidden animate-fadeUp"
            ref={modalRef}
          >
            {/* Close Icon */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              <X className="w-10 h-10 rounded-full bg-white p-2 text-black cursor-pointer hover:bg-gray-400" />
            </button>

            {/* Modal Content */}
            <img
              src={scholarship}
              alt="DIPF Scholarship Promo"
              className="w-full h-48 object-cover"
            />
            <div className="p-5 font-Montserrat text-sm sm:text-base">
              <h2 className="text-xl font-bold mb-2">
                ₦50M DIPF Scholarship Grant for Top Performers of JAMB 2025
              </h2>
              <p>
                The <b>De Imperial Philanthropic Family (DIPF)</b> is proud to
                announce the launch of the DIPF <b>₦50M Scholarship Grants</b>{" "}
                aimed at rewarding the top JAMB performers in Nigeria. This
                initiative is designed to encourage academic excellence among
                the youth in Igbo land in particular and Nigeria in general,
                inspiring prospective candidates to strive for exceptional
                performance in the upcoming 2025 JAMB examinations.
              </p>
              <br />
              <button
                className="px-6 py-3 bg-red-600 text-white hover:bg-black hover:font-medium transition-all cursor-pointer block mx-auto"
                onClick={() =>
                  localStorage.setItem("hasSeenScholarshipModal", "true")
                }
              >
                <a href="/initiatives/de-imperial-philanthropic-family-scholarship-for-2025-top-jamb-performers/register">
                  Register Now
                </a>
              </button>
            </div>
          </div>
        </div>
      )}
    </PageWrapper>
  );
};

export default Home;
