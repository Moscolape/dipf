import BeneficiariesTable2023 from "./2023-scholarship-beneficiaries";
import DashboardWrapper from "./dashboardWrapper";

const DIPF2023 = () => {
  return (
    <DashboardWrapper>
      <div className="-mt-10">
        <BeneficiariesTable2023 />
      </div>
    </DashboardWrapper>
  );
};

export default DIPF2023;
