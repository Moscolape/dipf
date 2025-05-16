import { useState } from "react";
import {
  agm1,
  agm10,
  agm11,
  agm12,
  agm13,
  agm14,
  agm15,
  agm16,
  agm17,
  agm18,
  agm19,
  agm2,
  agm20,
  agm21,
  agm22,
  agm23,
  agm24,
  agm25,
  agm3,
  agm4,
  agm5,
  agm6,
  agm7,
  agm8,
  agm9,
} from "../../constants/assets";
import PageWrapper from "../pageWrapper";

const Agm2023 = () => {
  const agmImages = [
    agm24,
    agm1,
    agm10,
    agm11,
    agm12,
    agm13,
    agm15,
    agm16,
    agm17,
    agm18,
    agm2,
    agm19,
    agm22,
    agm23,
    agm25,
    agm3,
    agm4,
    agm20,
    agm5,
    agm6,
    agm21,
    agm8,
    agm7,
    agm9,
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
        <img src={agm14} alt="no-data" className="w-full h-full object-cover" />
      </main>

      <section className="sm:py-10 py-5 font-Montserrat">
        <div className="max-w-4xl mx-auto sm:p-0 p-3" data-aos="fade-up">
          <div
            className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8"
            data-aos="fade-up"
          >
            {agmImages.map((imgSrc, index) => (
              <div
                key={index}
                className="w-full h-48 overflow-hidden rounded-lg shadow-md"
              >
                <img
                  src={imgSrc}
                  loading="lazy"
                  alt={`Agm image ${index + 1}`}
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

export default Agm2023;
