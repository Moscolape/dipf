import PageWrapper from "../components/pageWrapper";
import { useEffect } from "react";
import initializeAOS from "../utils/aos-init";
import { jamb2, maiden12 } from "../constants/assets";

const EducationalSupport = () => {
  useEffect(() => {
    initializeAOS();
  }, []);

  const initiatives = [
    {
      id: 1,
      image: maiden12,
      title:
        "Scholarship Initiative by De Imperial Philanthropic Family for SouthEastern JS1 Students",
      description:
        "In a groundbreaking initiative, De Imperial Philanthropic Family, a prominent NGO comprising eminent individuals from Nigeria’s southeastern states – Anambra, Imo, Enugu, Abia, and Ebonyi – has provided a comprehensive program to award scholarships...",
      link: "/initiatives/de-imperial-philanthropic-family-grants-scholarship-to-250-southeast-students",
    },
    {
      id: 2,
      image: jamb2,
      title:
        "Scholarship Grant for 2025 Top JAMB Scorers from SouthEast and Nigeria at large",
      description:
        "This initiative is designed to encourage academic excellence among the youth in Igbo land in particular and Nigeria in general, inspiring prospective candidates to strive for exceptional performance in the upcoming 2025 JAMB examinations...",
      link: "/initiatives/de-imperial-philanthropic-family-scholarship-for-2025-top-jamb-performers",
    },
  ];

  return (
    <PageWrapper>
      <div className="pt-12 px-6 max-w-6xl mx-auto font-Montserrat">
        <h1
          className="text-2xl sm:text-5xl font-Montserrat font-bold mb-10 text-center text-bounce"
          data-aos="fade-down"
        >
          Educational Supports
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {initiatives.map((initiative, index) => (
            <div
              key={index}
              className="group rounded-lg shadow transform transition-transform duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src={initiative.image}
                  alt="div-image"
                  className="sm:h-80 h-50 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h2 className="font-bold text-lg mb-2">{initiative.title}</h2>
                <p className="text-sm text-gray-700 mb-4">
                  {initiative.description}
                </p>
                <a
                  href={initiative.link}
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
