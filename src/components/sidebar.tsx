import { NavLink, useLocation } from "react-router-dom";
import { apply1, apply2, dash1, dash2, logo2 } from "../constants/assets";
import { useCallback, useEffect, useState } from "react";

type SidebarLink = {
  text: string;
  icon: string;
  activeIcon: string;
  urls: string[];
};

const Sidebar = () => {
  const location = useLocation();
  const [links, setLinks] = useState<SidebarLink[]>([]);

  useEffect(() => {
    const username = localStorage.getItem("username");

    if (!username) return;

    const newLinks: SidebarLink[] =
      username === "deimperial"
        ? [
            {
              text: "2023 Beneficiaries",
              icon: apply1,
              activeIcon: apply2,
              urls: ["/2023-southeast-dipf-scholarships-for-js1-students"],
            },
            {
              text: "2024 Beneficiaries",
              icon: apply1,
              activeIcon: apply2,
              urls: ["/2024-southeast-dipf-scholarships-for-js1-students"],
            },
            {
              text: "2025 Beneficiaries",
              icon: apply1,
              activeIcon: apply2,
              urls: ["/2025-southeast-dipf-scholarships-for-js1-students"],
            },
            {
              text: "2026 Beneficiaries",
              icon: apply1,
              activeIcon: apply2,
              urls: ["/2026-southeast-dipf-scholarships-for-js1-students"],
            },
            {
              text: "2027 Beneficiaries",
              icon: apply1,
              activeIcon: apply2,
              urls: ["/2027-southeast-dipf-scholarships-for-js1-students"],
            },
          ]
        : [
            {
              text: "Dashboard",
              icon: dash1,
              activeIcon: dash2,
              urls: ["/dashboard"],
            },
            {
              text: "Applicants",
              icon: apply1,
              activeIcon: apply2,
              urls: ["/applicants"],
            },
          ];

    setLinks(newLinks);
  }, []);

  const isActive = useCallback(
    (...to: string[]) => {
      return to.some((url) => location.pathname.startsWith(url));
    },
    [location.pathname]
  );

  return (
    <div className="fixed z-40 h-full sidebar font-Montserrat w-1/5 bg-gray-900 text-white">
      <div className="p-5">
        <img
          src={logo2}
          alt="logo"
          className="absolute -top-7 left-0 scale-75"
        />
        <div className="mt-20 mb-10">
          <p className="text-lg font-semibold">DIPF - ADMIN MANAGER</p>
        </div>
        <ul className="space-y-2">
          {links.map((link) => {
            return (
              <li key={link.text}>
                <NavLink
                  to={link.urls[0]}
                  className={`flex items-center space-x-3 p-2 rounded-lg transition duration-200 ${
                    isActive(...link.urls)
                      ? "bg-white text-gray-900 font-semibold"
                      : "hover:bg-[#b58825]"
                  }`}
                >
                  <img
                    src={isActive(...link.urls) ? link.activeIcon : link.icon}
                    alt={`${link.text} icon`}
                    className="w-5 h-5"
                  />
                  <span>{link.text}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <button></button>
    </div>
  );
};

export default Sidebar;
