import Footer from "./footer";
import NavLinks from "./navbar";
import { useLocation } from "react-router-dom";
import { ReactNode, useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

type PageWrapperProps = {
  children: ReactNode;
};

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full h-full custom-scrollbar-example relative">
      <NavLinks />
      <div className={`mt-15 ${isLoginPage ? "backdrop" : ""}`}>{children}</div>
      <Footer />

      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed z-50 bottom-6 right-6 bg-[#b58825] text-white p-3 rounded-full shadow-lg hover:bg-[#926014] transition-all duration-300 cursor-pointer animate-fadeUp"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default PageWrapper;
