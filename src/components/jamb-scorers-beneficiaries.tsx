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
          Support Funds for 2025 Top JAMB Scorers from the S'East and Nigeria in General.
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
          at rewarding the top JAMB scorers in Nigeria. This initiative is
          designed to encourage academic excellence among the youth in Igbo land
          in particular and Nigeria in general, inspiring prospective candidates
          to strive for exceptional performance in the upcoming 2025 JAMB
          examinations.
        </p>
        <br />
        <div data-aos="fade-up">
          <p>The DIPF JAMB SCHOLARSHIP GRANTS will be of two categories;</p>
          <ol className="list-decimal ml-5">
            <li>
              <b>₦20 Million</b> for 37 Top JAMB Scorers: Each of the 36 States,
              along with the Federal Capital Territory (Abuja), will be Awarded
              a DIPF Scholarship of <b>₦500,000</b> (Five Hundred Thousand
              Naira).
            </li>
            <li>
              <b>₦30 Million</b> for Southeast Nigeria: An additional DIPF
              Scholarship fund will be awarded to 25 Top JAMB Scorers from the
              Southeast Region, providing <b>₦1 Million</b> each to Five
              Outstanding Candidates from each of the Five States: ABIA,
              ANAMBRA, EBONYI, ENUGU, and IMO.
            </li>
          </ol>
        </div>
        <br />
        <div data-aos="fade-up">
          <p>
            The DIPF Scholarship Examination is open for 2025 JAMBites who met
            the following requirements:
          </p>
          <ul className="list-disc ml-5">
            <li>Must be an Igbo indigene.</li>
            <li>
              Must have schooled and written 2025 JAMB in a Southeastern state.
            </li>
            <li>Must have competed Secondary Education and received a certificate (WAEC, NECO or equivalent).</li>
            <li>
              Must have selected Southeastern Universities as First and Second
              choice of institution.
            </li>
            <li>
              Must have scored 250 and above in 2025 JAMB UTME Examination.
            </li>
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
      </div>
    </PageWrapper>
  );
};

export default TopJambScorersBeneficiaries;
