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
  { name: "Initiatives", href: "/initiatives" },
  { name: "Contact Us", href: "/contact" },
];

export default function NavLinks() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [currentPath, setCurrentPath] = useState<string>(
    window.location.pathname
  );
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
      <div className="hidden md:flex items-center space-x-4 font-Montserrat">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`px-4 py-2 text-h6 hover:text-[#b58825] hover:scale-110 rounded-md ${
              currentPath.includes(link.href)
                ? "text-[#b58825] font-bold"
                : "font-medium"
            } ${link.name === "Donate" ? "hidden" : "inline-block"}`}
          >
            {link.name}
          </a>
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

        <div className="space-y-6 text-center flex flex-col justify-center font-Urbanist">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xl font-semibold hover:text-[#be9611] transition"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}
