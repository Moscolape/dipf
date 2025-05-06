import { useEffect } from "react";
import initializeAOS from "../utils/aos-init";
import ApplicantsByStateOfOrigin from "./charts/applicants-by-state-of-origin";
import DashboardWrapper from "./dashboardWrapper";
import ApplicantsBySexPieChart from "./charts/applicants-by-sex";
import ApplicantsByJambScoreRangePieChart from "./charts/applicants-by-jamb-score-range";

const Dashboard = () => {
  useEffect(() => {
    initializeAOS();
  }, []);

  return (
    <DashboardWrapper>
      <div className="p-5 bg-gray-50 font-Montserrat">
        <div className="w-full bg-white p-4 rounded-xl" data-aos="fade-up">
          <span className="font-semibold text-2xl inline-block mb-5">
            Applicants Distribution by State of Origin
          </span>
          <div className="">
            <ApplicantsByStateOfOrigin />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-4 rounded-xl" data-aos="fade-up">
            <span className="font-semibold text-2xl inline-block mb-5">
              Sex Distribution of Applicants
            </span>
            <div className="">
              <ApplicantsBySexPieChart />
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl" data-aos="fade-up">
            <span className="font-semibold text-2xl inline-block mb-5">
              Score Distribution of Applicants
            </span>
            <div className="">
              <ApplicantsByJambScoreRangePieChart />
            </div>
          </div>
        </div>
      </div>
    </DashboardWrapper>
  );
};

export default Dashboard;
