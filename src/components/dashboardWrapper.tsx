import { ReactNode } from "react";
import Sidebar from "./sidebar";

type DashboardWrapperProps = {
  children: ReactNode;
};

const DashboardWrapper: React.FC<DashboardWrapperProps> = ({ children }) => {
  return (
    <>
      <Sidebar />
      <div className="ml-[20%] w-4/5 p-5">{children}</div>
    </>
  );
};

export default DashboardWrapper;
