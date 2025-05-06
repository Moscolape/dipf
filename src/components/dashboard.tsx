import ApplicantsByStateOfOrigin from "./charts/applicants-by-state-of-origin";
import DashboardWrapper from "./dashboardWrapper";

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <div className="p-5 bg-gray-50 font-Montserrat">
        <div className="w-full bg-white p-4 rounded-xl animate-fadeUp">
          <span className="font-semibold text-2xl inline-block mb-5">
            Applicant Distribution by State of Origin
          </span>
          <div className=""><ApplicantsByStateOfOrigin /></div>
        </div>
      </div>
    </DashboardWrapper>
  );
};

export default Dashboard;
