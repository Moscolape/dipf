import PageWrapper from "../components/pageWrapper";
import { useEffect } from "react";
import initializeAOS from "../utils/aos-init";
import { maiden14 } from "../constants/assets";


const ScholarshipBeneficiaries = () => {
  useEffect(() => {
    initializeAOS();
  }, []);

  return (
    <PageWrapper>
      <div className="pt-12 px-3 max-w-6xl mx-auto font-Montserrat">
        <h1
          className="text-xl sm:text-4xl font-bold sm:mb-10 mb-3 underline sm:no-underline"
          data-aos="fade-down"
        >
          De Imperial Philanthropic Family plans to grant full scholarships to
          250 JS1 students in the S’East every year from 2023.
        </h1>
        <img
          src={maiden14}
          alt="Southeast Flagoff"
          className="h-[50vh] w-full object-cover sm:h-[90vh]"
          data-aos="fade-in"
        /><br/>
        <p data-aos="fade-up">
          In a groundbreaking initiative,{" "}
          <b>De Imperial Philanthropic Family</b>, a prominent NGO comprising
          eminent individuals from Nigeria’s southeastern states –{" "}
          <b>Anambra, Imo, Enugu, Abia, and Ebonyi</b> – has provided a
          comprehensive program to award scholarships to <b>over 1000 students</b> in the next few years. The initiative,
          spearheaded by De Imperial Philanthropic Family’s President,{" "}
          <b>High Chief Dr. Darlington Nwabunike</b> (Eze Nwakaibeya Ogbabalu
          Aku N’ Anwu Ojoto), and <b>Mr Chikezie Okonkwo</b> (Akunaetigbuilo na
          Nawfia) Education Committee Chairman.
        </p>
      </div>
    </PageWrapper>
  );
};

export default ScholarshipBeneficiaries;
