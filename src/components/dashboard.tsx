import { useEffect } from "react";
import initializeAOS from "../utils/aos-init";
import DashboardWrapper from "./dashboardWrapper";
import ApplicantsBySexPieChart from "./charts/applicants-by-sex";
import ApplicantsByGeopoliticalZones from "./charts/applicants-by-geopolitical-zone";
import ApplicantsByJambScoreRangeBarChart from "./charts/applicants-by-jamb-score-range";
import ApplicantsByJambStateZones from "./charts/applicants-by-jamb-state-zones";

const Dashboard = () => {
  useEffect(() => {
    initializeAOS();
  }, []);

  return (
    <DashboardWrapper>
      <div className="p-5 bg-gray-50 font-Montserrat">
        <div className="w-full bg-white p-4 rounded-xl shadow" data-aos="fade-up">
          <span className="font-semibold text-2xl inline-block mb-5">
            Applicants' State of Origin Distribution by Geopolitical Zones
          </span>
          <div className="">
            <ApplicantsByGeopoliticalZones />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-4 rounded-xl shadow" data-aos="fade-up">
            <span className="font-semibold text-2xl inline-block mb-5">
              Sex Distribution of Applicants
            </span>
            <div className="">
              <ApplicantsBySexPieChart />
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow" data-aos="fade-up">
            <span className="font-semibold text-2xl inline-block mb-5">
              Score Distribution of Applicants
            </span>
            <div className="">
              <ApplicantsByJambScoreRangeBarChart />
            </div>
          </div>
        </div>
        <div className="w-full bg-white p-4 rounded-xl shadow mt-6" data-aos="fade-up">
          <span className="font-semibold text-2xl inline-block mb-5">
            Applicants' Jamb State Distribution by Geopolitical Zones
          </span>
          <div className="">
            <ApplicantsByJambStateZones />
          </div>
        </div>
      </div>
    </DashboardWrapper>
  );
};

export default Dashboard;
