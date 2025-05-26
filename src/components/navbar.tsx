import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { logo } from "../constants/assets";

const links = [
  { name: "About", href: "/about" },
  { name: "Impact", href: "/impact" },
  { name: "Members", href: "/members" },
  { name: "Pillars", href: "/pillars" },
  { name: "Events", href: "/events" },
  {
    name: "Scholarships",
    href: "/initiatives",
    dropdown: [
      {
        name: "DIPF Southeast JS1 Scholarships",
        href: "/initiatives/de-imperial-philanthropic-family-grants-scholarship-to-250-southeast-students",
        subDropdown: [
          {
            name: "2023 Beneficiaries",
            href: "/initiatives/de-imperial-philanthropic-family-grants-scholarship-to-250-southeast-students/2023-beneficiaries",
          },
          {
            name: "2024 Beneficiaries",
            href: "/initiatives/de-imperial-philanthropic-family-grants-scholarship-to-250-southeast-students/2024-beneficiaries",
          },
          {
            name: "2025 Beneficiaries",
            href: "/initiatives/de-imperial-philanthropic-family-grants-scholarship-to-250-southeast-students/2025-beneficiaries",
          },
        ],
      },
      {
        name: "2025 Top JAMB Performers",
        href: "/initiatives/de-imperial-philanthropic-family-scholarship-for-2025-top-jamb-performers",
      },
    ],
  },
  { name: "Contact Us", href: "/contact" },
];

export default function NavLinks() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [currentPath, setCurrentPath] = useState<string>(
    window.location.pathname
  );
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);

  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleRouteChange = () => setCurrentPath(window.location.pathname);
    window.addEventListener("popstate", handleRouteChange);
    return () => window.removeEventListener("popstate", handleRouteChange);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [currentPath]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const logoSize = windowWidth < 640 ? 60 : 50;

  return (
    <nav
      className="flex justify-between items-center sm:px-4 pl-2 py-2 fixed w-full top-0 z-40 shadow"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        backdropFilter: "blur(30px)",
      }}
    >
      <a href="/" className="logo">
        <img
          src={logo}
          alt="My Logo"
          width={logoSize}
          height={logoSize}
          className="sm:scale-200 pl-2 pt-2 pb-2"
        />
      </a>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-4 font-Montserrat relative">
        {links.map((link) => (
          <div key={link.name} className="relative group">
            <a
              href={link.href}
              className={`px-4 py-2 text-h6 hover:text-[#b58825] hover:scale-110 rounded-md inline-block ${
                currentPath.includes(link.href)
                  ? "text-[#b58825] font-bold"
                  : "font-medium"
              }`}
            >
              {link.name}
            </a>

            {/* First level dropdown */}
            {link.dropdown && (
              <div className="absolute top-full left-0 mt-2 w-70 bg-[#b58825] text-white shadow-2xl rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 transform translate-y-2 z-40">
                {link.dropdown.map((item) => (
                  <div key={item.name} className="relative group/submenu">
                    <a
                      href={item.href}
                      className="block px-4 py-2 hover:bg-gray-100 hover:text-black text-sm"
                    >
                      {item.name}
                    </a>

                    {/* Second level dropdown */}
                    {item.subDropdown && (
                      <div className="absolute left-full top-0 ml-1 w-48 bg-white text-[#b58825] shadow-xl rounded-lg opacity-0 group-hover/submenu:opacity-100 group-hover/submenu:translate-x-0 transition-all duration-300 transform translate-x-2 z-50">
                        {item.subDropdown.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 hover:bg-gray-200 hover:text-black  text-sm"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <a
        href="/login"
        className="text-white bg-[#b58825] hover:bg-[#926014] py-2 px-4 rounded-md hidden sm:block"
      >
        Login
      </a>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(true)}
        className="md:hidden p-2 rounded focus:outline-none bg-white mr-2"
      >
        <Menu size={32} />
      </button>

      {/* Mobile Sliding Menu */}
      <motion.div
        ref={menuRef}
        initial={{ x: "100%" }}
        animate={{ x: isMenuOpen ? 0 : "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed w-screen h-screen inset-0 bg-opacity-90 bg-white z-50 flex flex-col items-center justify-center text-black"
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-3 right-3"
        >
          <X size={40} className="text-black" />
        </button>

        <div className="space-y-6 text-left px-8 font-Montserrat w-full">
          {links.map((link) => {
            const hasDropdown = !!link.dropdown;
            const isOpen = openDropdown === link.name;

            return (
              <div key={link.name}>
                <div
                  className="flex justify-between items-center text-xl font-semibold hover:text-[#be9611] transition cursor-pointer"
                  onClick={() =>
                    hasDropdown
                      ? setOpenDropdown(isOpen ? null : link.name)
                      : setMenuOpen(false)
                  }
                >
                  <a href={link.href}>{link.name}</a>
                  {hasDropdown && (
                    <span className="ml-2">{isOpen ? "▲" : "▼"}</span>
                  )}
                </div>

                {/* Dropdown Items */}
                {hasDropdown && isOpen && (
                  <div className="ml-4 mt-2 space-y-2 text-base">
                    {link.dropdown.map((item) => {
                      const hasSub = !!item.subDropdown;
                      const isSubOpen = openSubDropdown === item.name;

                      return (
                        <div key={item.name}>
                          <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() =>
                              hasSub
                                ? setOpenSubDropdown(
                                    isSubOpen ? null : item.name
                                  )
                                : setMenuOpen(false)
                            }
                          >
                            <a
                              href={item.href}
                              className="block text-[#b58825]"
                            >
                              {item.name}
                            </a>
                            {hasSub && (
                              <span className="ml-2 text-sm">
                                {isSubOpen ? "▲" : "▼"}
                              </span>
                            )}
                          </div>

                          {/* Sub-Dropdown Items */}
                          {hasSub && isSubOpen && (
                            <div className="ml-4 mt-1 space-y-1 text-sm">
                              {item.subDropdown.map((subItem) => (
                                <a
                                  key={subItem.name}
                                  href={subItem.href}
                                  onClick={() => setMenuOpen(false)}
                                  className="block text-[#5b3907]"
                                >
                                  {subItem.name}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </motion.div>
    </nav>
  );
}
