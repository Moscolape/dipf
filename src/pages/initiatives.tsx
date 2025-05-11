import PageWrapper from "../components/pageWrapper";
import { useEffect } from "react";
import initializeAOS from "../utils/aos-init";
import { jambite, js1 } from "../constants/assets";

const EducationalSupport = () => {
  useEffect(() => {
    initializeAOS();
  }, []);

  const events = [
    {
      id: 1,
      image: js1,
      title:
        "Scholarship Initiative by De Imperial Philanthropic Family for SouthEastern JS1 Students",
      description:
        "In a groundbreaking initiative, De Imperial Philanthropic Family, a prominent NGO comprising eminent individuals from Nigeria’s southeastern states – Anambra, Imo, Enugu, Abia, and Ebonyi – has provided a comprehensive program to award scholarships...",
      link: "/initiatives/de-imperial-philanthropic-family-grants-scholarship-to-250-southeast-students",
    },
    {
      id: 2,
      image: jambite,
      title:
        "Scholarship Grant for 2025 Top JAMB Scorers from SouthEast and Nigeria at large",
      description:
        "This initiative is designed to encourage academic excellence among the youth in Igbo land in particular and Nigeria in general, inspiring prospective candidates to strive for exceptional performance in the upcoming 2025 JAMB examinations...",
      link: "/initiatives/de-imperial-philanthropic-family-grants-scholarship-to-top-10-jamb-scorers-in-southeast-2025",
    },
  ];

  return (
    <PageWrapper>
      <div className="pt-12 px-6 max-w-6xl mx-auto font-Montserrat">
        <h1
          className="text-3xl sm:text-5xl font-Montserrat font-bold mb-10 text-center"
          data-aos="fade-down"
        >
          Educational Supports
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="group rounded-lg shadow transform transition-transform duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src={event.image}
                  alt="div-image"
                  className="sm:h-80 h-50 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h2 className="font-bold text-lg mb-2">{event.title}</h2>
                <p className="text-sm text-gray-700 mb-4">
                  {event.description}
                </p>
                <a
                  href={event.link}
                  className="text-blue-600 hover:underline font-medium text-sm"
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default EducationalSupport;
