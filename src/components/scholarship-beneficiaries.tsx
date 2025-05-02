import PageWrapper from "../components/pageWrapper";
import { useEffect } from "react";
import initializeAOS from "../utils/aos-init";
import BeneficiariesTable2023 from "./2023-scholarship-beneficiaries";
import BeneficiariesTable2024 from "./2024-scholarship-beneficiaries";

const ScholarshipBeneficiaries = () => {
  useEffect(() => {
    initializeAOS();
  }, []);

  return (
    <PageWrapper>
      <div className="pt-12 px-6 max-w-6xl mx-auto font-Montserrat">
        <h1
          className="text-xl sm:text-4xl font-bold sm:mb-10 mb-3 underline sm:no-underline"
          data-aos="fade-down"
        >
          De Imperial Philanthropic Family plans to grant full scholarships to
          250 JS1 students in the S’East every year from 2023.
        </h1>
        <p data-aos="fade-up">
          In a groundbreaking initiative,{" "}
          <b>De Imperial Philanthropic Family</b>, a prominent NGO comprising
          eminent individuals from Nigeria’s southeastern states –{" "}
          <b>Anambra, Imo, Enugu, Abia, and Ebonyi</b> – has joined forces with{" "}
          <b>Best Brain Contest</b>, an esteemed educational NGO, to award
          scholarships through a comprehensive program. The initiative,
          spearheaded by De Imperial Philanthropic Family’s President,{" "}
          <b>High Chief Dr. Darlington Nwabunike</b> (Eze Nwakaibeya Ogbabalu
          Aku N’ Anwu Ojoto), and <b>Mr Chikezie Okonkwo</b> (Akunaetigbuilo na
          Nawfia) Education Committee Chairman.
        </p>

        <div>
          <BeneficiariesTable2023 />
          <BeneficiariesTable2024 />
        </div>
      </div>
    </PageWrapper>
  );
};

export default ScholarshipBeneficiaries;
