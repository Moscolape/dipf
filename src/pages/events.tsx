import PageWrapper from "../components/pageWrapper";
import { useEffect } from "react";
import initializeAOS from "../utils/aos-init";
import {
  agbalanze,
  agm10,
  dipf8,
  elevation,
  hospital3,
  mendem,
  ndeli,
  teka1,
  tribute2,
} from "../constants/assets";
import { ChevronsRight } from "lucide-react";

const Events = () => {
  useEffect(() => {
    initializeAOS();
  }, []);

  const events = [
    {
      image: dipf8,
      title:
        "High Chief Dr. Sir Darlington Nwabunike wins The Sun Humanitarian Service Personality of the Year 2024 Award",
      description:
        "GOODWILL MESSAGE FROM DE IMPERIAL PHILANTHROPIC FAMILY With hearts full of joy and gratitude, we, the De Imperial Philanthropic Family, extend our warmest congratulations to...",
      link: "/events/high-chief-dr-sir-darlington-nwabunike-wins-the-sun-humanitarian-service-personality-of-the-year-2024-award",
    },
    {
      image: tribute2,
      title: "A Tribute to a Life of Impact: Chief Anaeliaku Na Ekwulobia",
      description:
        "The Deimperial Philanthropic Family lead by High Chief Dr. Darlington, honored the remarkable life and enduring legacy of Chief Anaeliaku Na Ekwulobia...",
      link: "/events/a-tribute-to-a-life-of-impact-chief-anaeliaku-na-ekwulobia",
    },
    {
      image: hospital3,
      title:
        "Highlights from one of Anambra’s most remarkable hospital launches!",
      description:
        "High Chief Dr. Darlington, representing the Deimperial Philanthropic Family, made a generous ₦42 million donation and was honored with a special award...",
      link: "/events/highlights-from-one-of-anambras-most-remarkable-hospital-launches",
    },
    {
      image: mendem,
      title:
        "De Imperial Philanthropic Family, showing love to Chief Emeka Ike’s @ his 20th WEDDING ANNIVERSARY",
      description:
        "De Imperial Philanthropic Family, led by their president High Chief Darlington Nwakaibeya Ojoto displayed “Act of love” to Chief Emeka Ike on his 20th WEDDING...",
      link: "/events/de-imperial-philanthropic-family-showing-love-to-chief-emeka-ikes-his-20th-wedding-anniversary",
    },
    {
      image: agm10,
      title: "De Imperial Philanthropic Family’s 2023 AGM Event in Pictures",
      description: "",
      link: "/events/de-imperial-philanthropic-familys-2023-agm-event-in-pictures",
    },
    {
      image: teka1,
      title:
        "DON TEKA APPRECIATED DE IMPERIAL FAMILY WITH N30MILLION AT THE AGM 2023",
      description:
        "DON TEKA APPRECIATED DE IMPERIAL FAMILY WITH N30MILLION AT THE AGM 2023. MEGA ABBATTOIR AND NDELI PRESENTED MAGIC BOX TO DON TEKA...",
      link: "/events/don-teka-appreciated-de-imperial-family-with-n30million-at-the-agm-2023",
    },
    {
      image: agbalanze,
      title:
        "AGBALANZE ONYEKACHUKWU AND MIGHTY MIGHTY NA UMUCHU SUPPORTED CHICO EZEANI WITH N10MILLION EACH",
      description:
        "AGBALANZE ONYEKACHUKWU SUPPORTED CHICO EZEANI WITH N10MILLION AND APPRECIATED DE IMPERIAL FAMILY WITH $500. MIGHTY MIGHTY NA UMUCHU SUPPORTED CHICO EZEANI WITH N10MILLION...",
      link: "/events/agbalanze-onyekachukwu-and-mighty-mighty-na-umuchu-supported-chico-ezeani-with-n10million-each",
    },
    {
      image: ndeli,
      title: "NDELI KNIGHTED DE IMPERIAL FAMILY’s PRESIDENT",
      description:
        "NDELI KNIGHTED DE IMPERIAL FAMILY PRESIDENT, HIGH CHIEF DR. SIR DARLINGTON NWABUNIKE (OGBABALU AKU NA ANWU) AS KING OF DORIME!",
      link: "/events/ndeli-knighted-de-imperial-familys-president",
    },
    {
      image: elevation,
      title: "ANNUAL GENERAL MEETING 2023 – Elevation Night 2023",
      description:
        "De Imperial Philanthropic Family’s ANNUAL GENERAL MEETING and Elevation Night 2023...",
      link: "/events/annual-general-meeting-2023-elevation-night-2023",
    },
  ];

  return (
    <PageWrapper>
      <div className="mx-auto sm:px-10 px-4 pt-10 pb-20 font-Montserrat backdrop">
        <h2
          className="text-2xl sm:text-5xl font-bold text-center sm:mb-10 mb-5 font-Montserrat text-bounce"
          data-aos="fade-down"
        >
          Our Events
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {events.map((event, index) => (
            <div
              key={index}
              className="group sm:rounded-lg sm:shadow transform transition-transform duration-300 bg-white"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src={event.image}
                  alt="div-image"
                  className="sm:h-80 h-50 w-full object-cover transition-transform duration-300 group-hover:scale-125"
                />
              </div>
              <div className="sm:p-4 mt-4 sm:mt-0">
                <a href={event.link}>
                  <h2 className="font-bold text-lg mb-2">{event.title}</h2>
                </a>
                <p className="text-sm text-gray-500 mb-4">
                  {event.description}
                </p>
                <a
                  href={event.link}
                  className="text-[#b58825] font-medium hover:font-semibold text-sm flex transition"
                >
                  See more <ChevronsRight className="w-5 h-5 ml-0.5 mt-0.25" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Events;
