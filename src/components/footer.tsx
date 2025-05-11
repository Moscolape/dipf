import {
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import initializeAOS from "../utils/aos-init";
import { logo2 } from "../constants/assets";
import { ArrowUpRight } from "lucide-react";

const socialMediaLinks = [
  {
    icon: <FaFacebook />,
    href: "https://www.facebook.com/deimperialfamily",
  },
  {
    icon: <FaInstagram />,
    href: "https://www.instagram.com/deimperialfamily/",
  },
  {
    icon: <FaYoutube />,
    href: "https://www.youtube.com/@DeImperialPhilantropicFamily",
  },
  {
    icon: <FaTwitter />,
    href: "https://twitter.com/DeImperialFam",
  },
];

const quickLinks = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About Us",
    href: "/about",
  },
  {
    text: "Impact",
    href: "/impact",
  },
  {
    text: "Members",
    href: "/members",
  },
  {
    text: "Pillars",
    href: "/pillars",
  },
  {
    text: "Events",
    href: "/events",
  },
  {
    text: "Initiatives",
    href: "/initiatives",
  },
  {
    text: "Contact Us",
    href: "/contact",
  },
];

export default function Footer() {
  useEffect(() => {
    initializeAOS();
  }, []);

  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <div
      className={`w-full bg-black text-white ${
        isLoginPage ? "mt-0" : "mt-20"
      } font-Montserrat`}
    >
      <div className="flex sm:flex-row flex-col justify-between items-start sm:p-6 p-3">
        <div className="sm:w-1/3 font-Montserrat" data-aos="fade-up">
          <img src={logo2} alt="logo" className="w-40 sm:mx-0 mx-auto" />
          <div className="flex items-center">
            <p className="mt-5">
              DE IMPERIAL PHILANTHROPIC FAMILY (DIPF) is a group of patriotic,
              responsible, responsive and dutiful persons, drawn from the
              South-Eastern demographic of Nigeria and across global diaspora.
            </p>
          </div>
          <div className="text-h6 flex mt-10">
            {socialMediaLinks.map((link) => (
              <a
                href={link.href}
                // key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4 text-2xl hover:text-[#b58825]"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="sm:w-1/3 sm:mt-0 mt-10" data-aos="fade-up">
          <div className="mx-auto sm:w-1/3">
            <h1 className="text-lg font-bold">QUICK LINKS</h1>
            <br />
            <div className="flex flex-col">
              {quickLinks.map((link) => (
                <a
                  href={link.href}
                //   key={index}
                  className="mb-2 text-[1rem] hover:text-[#b58825] hover:scale-95"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="sm:w-1/3 sm:mt-0 mt-10" data-aos="fade-up">
          <h1 className="text-lg font-bold">CONTACT INFO</h1>
          <br />
          <div className="flex items-start">
            <FaMapMarkerAlt className="text-white text-xl mr-2" />
            <div>
              <p className="mb-2">De Imperial Office National Headquarters:</p>
              <p>NO 4 OLADIMIJI ALO LEKKI PHASE 1, LAGOS STATE</p>
            </div>
          </div>
          <div className="flex items-start mt-3">
            <FaPhoneAlt className="text-white text-xl mr-2" />
            <p>+234 809 914 9968</p>
          </div>
        </div>
        {/* </div> */}
      </div>
      <div className="text-center border-t-2 border-white p-6">
        {/* Footer Text */}
        <div className="">
          <p className="sm:px-0 px-7 my-3">
            &copy; 2025 De Imperial Philanthropic Family. All rights reserved.
          </p>
          <p className="flex sm:flex-row flex-col justify-center items-center">
            Designed and developed by{" "}
            <b>
              <a
                href="https://chukwunenye-moses-portfolio.vercel.app/portfolio"
                target="_blank"
                className="text-[#b58825]"
              >
                <span className="flex items-center ml-2">Chukwunenye Moses <ArrowUpRight className="text-[#b58825] w-5 h-5 border-t border-r ml-2" /></span>
              </a>
            </b>
          </p>
        </div>
      </div>
    </div>
  );
}
