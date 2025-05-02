import PageWrapper from "../components/pageWrapper";
import { useEffect } from "react";
import initializeAOS from "../utils/aos-init";
import { presido } from "../constants/assets";

const TopJambScorersBeneficiaries = () => {
  useEffect(() => {
    initializeAOS();
  }, []);

  return (
    <PageWrapper>
      <div className="pt-12 px-6 max-w-6xl mx-auto font-Montserrat">
        <h1
          className="text-2xl sm:text-4xl font-bold mb-10"
          data-aos="fade-down"
        >
          De Imperial Philanthropic Family plans to provide Tertiary Education
          Support Funds for Top 10 JAMBites from the S'East.
        </h1>
        <img
          src={presido}
          alt="DIPF-National President"
          className="h-[50vh] w-full object-cover sm:h-[90vh]"
        />
        <p data-aos="fade-up" className="mt-10">
          The <b>De Imperial Philanthropic Family (DIPF)</b> is proud to
          announce the launch of the DIPF <b>₦35M Scholarship Grants</b> aimed
          at rewarding the top JAMB scorers in Nigeria. This initiative is
          designed to encourage academic excellence among the youth in Igbo land
          in particular and Nigeria in general, inspiring prospective candidates
          to strive for exceptional performance in the upcoming 2025 JAMB
          examinations.
        </p>
        <br />
        <div>
          <p>
            The DIPF JAMB SCHOLARSHIP GRANTS will be of two categories namely;
          </p>
          <ol className="list-decimal ml-5">
            <li>
              ₦10M Scholarship Grant for Top Ten Jamb Scorers in Nigeria
              irrespective of tribes and schools.
            </li>
            <li>
              ₦25M Scholarship Grant for Top Ten Winners of DIPF Scholarship
              Examination.
            </li>
          </ol>
        </div>
        <br />
        <p>
          The DIPF Scholarship Examination is open for 2025 JAMBites who met the
          following requirements:
        </p>
        <ul className="list-disc ml-5">
          <li>Must be an Igbo indigene.</li>
          <li>
            Must have schooled and written 2025 JAMB in a Southeastern state.
          </li>
          <li>
            Must have selected Southeastern Universities as First and Second
            choice of institution.
          </li>
          <li>Must have scored 250 and above in 2025 JAMB UTME Examination.</li>
        </ul>
        <br />
        <p>
          If you meet the above requirements, kindly proceed to fill this{" "}
          <a
            href="/initiatives/de-imperial-philanthropic-family-grants-scholarship-to-top-10-jamb-scorers-in-southeast-2025/register"
            className="text-blue-600 hover:underline font-medium"
          >
            registration form
          </a>
        </p>
      </div>
    </PageWrapper>
  );
};

export default TopJambScorersBeneficiaries;
