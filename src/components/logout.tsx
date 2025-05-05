import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

type LogoutModalProps = {
  close: () => void;
};

const Logout: React.FC<LogoutModalProps> = ({ close }) => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="w-screen h-screen bg-[#00000080] flex items-center justify-center z-50 fixed top-0 left-0">
      <div className="bg-white w-[30%] m-auto rounded-lg py-10 animate-fadeDownFast font-Montserrat">
        <span className="block text-center text-gray-3 font-bold text-2xl mt-4">
          Logging Out
        </span>

        <span className="block text-center font-normal my-5">
          Are you sure you want to log out?
        </span>

        <div className="flex justify-center mt-6 mb-3">
          <button
            className="hover:bg-gray-300 bg-gray-100 font-medium rounded-lg py-2 px-4 mr-2 cursor-pointer"
            onClick={close}
          >
            No
          </button>
          <button
            className="font-medium hover:bg-[#926014] bg-[#b58825] text-white rounded-lg py-2 px-4 ml-2 cursor-pointer"
            onClick={handleLogout}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
