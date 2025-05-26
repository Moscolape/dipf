import BeneficiariesTable2024 from "./2024-scholarship-beneficiaries";
import PageWrapper from "./pageWrapper";

const DIPF2024ScholarshipStudents = () => {
  return (
    <PageWrapper>
      <section className="mt-25 max-w-6xl mx-auto font-Montserrat px-3">
        <h2
          className="text-xl sm:text-4xl font-bold sm:mb-10 mb-3 underline sm:no-underline sm:text-center"
          data-aos="fade-down"
        >
          Second Edition Beneficiaries of the DIPF Southeast Scholarship for 250
          JS1 Students
        </h2>
        <div className="-mt-10">
          <BeneficiariesTable2024 />
        </div>
      </section>
    </PageWrapper>
  );
};

export default DIPF2024ScholarshipStudents;
