import { useLocation } from "react-router-dom";
import { LogOutIcon } from "lucide-react";
import { useState } from "react";
import Logout from "./logout";

export default function TopNavbar() {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);

  const formatTitle = (path: string) => {
    const segments = path.split("/").filter(Boolean);
    return segments.length
      ? segments[segments.length - 1]
          .replace(/-/g, " ")
          .replace(/\b\w/g, (l) => l.toUpperCase())
      : "Dashboard";
  };

  const title = formatTitle(location.pathname);

  return (
    <>
      <div className="flex items-center justify-between w-full p-4 shadow">
        <h1 className="text-2xl font-bold font-Montserrat">{title}</h1>

        <div
          className="rounded-full bg-[#b58825] hover:bg-[#926014] p-2 cursor-pointer hover:rotate-[180deg] transition-transform"
          title="Log out"
          onClick={() => setShowModal(true)}
        >
          <LogOutIcon className="text-white w-5 h-5" />
        </div>
      </div>

      {showModal && <Logout close={() => setShowModal(false)} />}
    </>
  );
}
