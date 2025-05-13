import { useState } from "react";
import {
  hospital1,
  hospital10,
  hospital11,
  hospital12,
  hospital13,
  hospital2,
  hospital3,
  hospital4,
  hospital5,
  hospital6,
  hospital7,
  hospital8,
  hospital9,
} from "../../constants/assets";
import PageWrapper from "../pageWrapper";

const Hospital = () => {
  const hospitalImages = [
    hospital1,
    hospital13,
    hospital2,
    hospital5,
    hospital9,
    hospital10,
    hospital11,
    hospital12,
    hospital3,
    hospital6,
    hospital7,
    hospital8,
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
        <img
          src={hospital4}
          alt="no-data"
          className="w-full h-full object-cover"
        />
      </main>

      <section className="sm:py-10 py-5 font-Montserrat">
        <h2
          className="text-xl sm:text-3xl font-bold text-center sm:mb-5"
          data-aos="fade-down"
        >
          Highlights from one of Anambra’s most remarkable hospital launches!
        </h2>

        <div className="max-w-4xl mx-auto sm:p-0 p-3" data-aos="fade-up">
          <p>
            High Chief Dr. Darlington, representing the Deimperial Philanthropic
            Family, made a generous ₦42 million donation and was honored with a
            special award from the Great Pillar Brothers — celebrated as a true
            advocate for positive change!
          </p>

          <div
            className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8"
            data-aos="fade-up"
          >
            {hospitalImages.map((imgSrc, index) => (
              <div
                key={index}
                className="w-full h-48 overflow-hidden rounded-lg shadow-md"
              >
                <img
                  src={imgSrc}
                  loading="lazy"
                  alt={`Tribute image ${index + 1}`}
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

export default Hospital;
