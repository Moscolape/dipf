import { useState } from "react";
import {
  jamb1,
  jamb10,
  jamb11,
  jamb12,
  jamb2,
  jamb3,
  jamb4,
  jamb5,
  jamb6,
  jamb7,
  jamb8,
  jamb9,
} from "../../constants/assets";
import PageWrapper from "../pageWrapper";

const Jamb = () => {
  const jambImages = [
    jamb12,
    jamb10,
    jamb11,
    jamb2,
    jamb3,
    jamb4,
    jamb9,
    jamb6,
    jamb8,
    jamb5,
    jamb7,
    jamb1,
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imgSrc: string) => {
    setSelectedImage(imgSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };

  return (
    <PageWrapper>
      <main className="relative w-full sm:h-[60vh] h-[50vh]">
        <img src={jamb1} alt="no-data" className="w-full h-full object-cover" />
      </main>

      <section className="sm:py-10 py-5 font-Montserrat">
        <h2
          className="text-xl sm:text-3xl font-bold text-center sm:mb-5 sm:w-4xl mx-auto"
          data-aos="fade-down"
        >
          De Imperial Philanthropic Family plans to provide Tertiary Education
          Support Funds for 2025 Top JAMB Performers from the S'East and Nigeria
          in General.
        </h2>

        <div className="max-w-4xl mx-auto sm:p-0 p-3" data-aos="fade-up">
          <p>
            This initiative is part of our broader mission to uplift education
            standards and provide equitable access to quality learning
            experiences for all Nigerian students. This initiative will:
          </p>
          <ul className="list-disc ml-5 mt-5">
            <li>
              <b>Encourage Academic Excellence:</b> Reward and Motivate Students
              to strive for higher academic achievements.
            </li>
            <li>
              <b>Enhance Accessibility to Education:</b> Provide Financial
              Support to students who may lack the resources to pursue higher
              education.
            </li>
            <li>
              <b>Empower Future Leaders:</b> Invest in the next generation of
              leaders by facilitating their educational journey.
            </li>
          </ul>
          <br />
          <p>
            This announcement comes on the heels of our successful launch of the{" "}
            <b>
              ₦500 Million DIPF Scholarships for Secondary School Students in
              Southeast Nigeria
            </b>
            , which was initiated in 2023. This ongoing program has already
            begun transforming the lives of countless students, providing them
            with the resources needed to excel academically and pursue their
            aspirations.
          </p>
          <br />
          <p>
            We believe that education is a powerful catalyst for change, and we
            are proud to invest in the future leaders of Nigeria.
          </p>
          <div
            className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8"
            data-aos="fade-up"
          >
            {jambImages.map((imgSrc, index) => (
              <div
                key={index}
                className="w-full h-48 overflow-hidden rounded-lg shadow-md"
              >
                <img
                  src={imgSrc}
                  loading="lazy"
                  alt={`Jamb image ${index + 1}`}
                  onClick={() => openModal(imgSrc)}
                  className="w-full h-full object-cover hover:scale-125 cursor-pointer transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {modalOpen && selectedImage && (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-[#000000da] bg-opacity-70 flex justify-center items-center z-50"
        >
          <div
            className="max-w-4xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold z-10 cursor-pointer"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Selected Tribute"
              className="w-full max-h-[80vh] object-contain rounded-md animate-hop"
            />
          </div>
        </div>
      )}
    </PageWrapper>
  );
};

export default Jamb;
