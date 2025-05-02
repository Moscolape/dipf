import PageWrapper from "../components/pageWrapper";
import { useEffect } from "react";
import initializeAOS from "../utils/aos-init";

const Events = () => {
  useEffect(() => {
    initializeAOS();
  }, []);

  const events = [
    {
      id: 1,
      title:
        "Scholarship Initiative by De Imperial Philanthropic Family & Best Brain Contest",
      description:
        "In a groundbreaking initiative, De Imperial Philanthropic Family, a prominent NGO comprising eminent individuals from Nigeria’s southeastern states – Anambra, Imo, Enugu, Abia, and Ebonyi – has joined forces with Best Brain Contest, an esteemed educational NGO, to award scholarships through a comprehensive program...",
      link: "/events/de-imperial-philanthropic-family-grants-scholarship-to-250-southeast-students",
    },
  ];

  return (
    <PageWrapper>
      <div className="pt-12 px-6 max-w-6xl mx-auto font-Montserrat">
        <h1
          className="text-3xl sm:text-5xl font-Script font-bold mb-10 text-center"
          data-aos="fade-down"
        >
          Our Events & Engagements
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="border rounded-lg p-4 shadow hover:shadow-md transition duration-300"
              data-aos="fade-up"
            >
              <h2 className="font-bold text-lg mb-2">{event.title}</h2>
              <p className="text-sm text-gray-700 mb-4">{event.description}</p>
              <a
                href={event.link}
                className="text-blue-600 hover:underline font-medium text-sm"
              >
                Read more
              </a>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Events;
