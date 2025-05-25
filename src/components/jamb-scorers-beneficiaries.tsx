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
          className="text-xl sm:text-4xl font-bold sm:mb-10 mb-3 underline sm:no-underline"
          data-aos="fade-down"
        >
          De Imperial Philanthropic Family plans to provide Tertiary Education
          Support Funds for 2025 Top JAMB Performers from the S'East and Nigeria in
          General.
        </h1>
        <img
          src={presido}
          alt="DIPF-National President"
          className="h-[50vh] w-full object-cover sm:h-[90vh]"
          data-aos="fade-in"
        />
        <p data-aos="fade-up" className="mt-10">
          The <b>De Imperial Philanthropic Family (DIPF)</b> is proud to
          announce the launch of the DIPF <b>₦50M Scholarship Grants</b> aimed
          at rewarding the top JAMB performers in Nigeria. This initiative is
          designed to encourage academic excellence among the youth in Igbo land
          in particular and Nigeria in general, inspiring prospective candidates
          to strive for exceptional performance in the upcoming 2025 JAMB
          examinations.
        </p>
        <br />
        <div data-aos="fade-up">
          <p>The <b>DIPF JAMB SCHOLARSHIP GRANTS</b> will be of two categories;</p>
          <ol className="list-decimal ml-5 mt-2">
            <li className="mb-5">
              <b>₦20 Million</b> for 37 Top JAMB Performers: Each of the 36
              States, along with the Federal Capital Territory (Abuja), will be
              awarded a DIPF Scholarship of <b>₦500,000</b> (Five Hundred
              Thousand Naira).
              <p className="my-2">To Qualify, Candidates must meet the following criteria:</p>
              <ul className="list-disc ml-5">
                <li>Be among top performers in the 2025 JAMB Examinations.</li>
                <li>Be a Nigerian Citizen.</li>
              </ul>
            </li>
            <li>
              <b>₦30 Million</b> for Southeast Nigeria: An additional DIPF Scholarship
              fund will be awarded to 25 Top JAMB Scorers from the Southeast
              Region, providing <b>₦1 Million</b> each to Five Outstanding Candidates
              from each of the Five States: ABIA, ANAMBRA, EBONYI, ENUGU, and
              IMO.
              <p className="my-2">To Qualify, Candidates must meet the following criteria:</p>
              <ul className="list-disc ml-5">
                <li>Score above 250 in the 2025 JAMB Examinations.</li>
                <li>Register and Write the Jamb Exam in any state within the Southeast.</li>
                <li>Be an indigene of any of the Southeast states.</li>
                <li>Have First and Second Choices of institutions within the Southeast.</li>
              </ul>
            </li>
          </ol>
        </div>
        <br />
        <div data-aos="fade-up">
          <p>
            If you meet the requirements in any of the categories above, kindly proceed to fill this{" "}
            <a
              href="/initiatives/de-imperial-philanthropic-family-scholarship-for-2025-top-jamb-performers/register"
              className="text-blue-600 hover:underline font-medium"
            >
              registration form
            </a>
          </p>
        </div>
      </div>
    </PageWrapper>
  );
};

export default TopJambScorersBeneficiaries;
