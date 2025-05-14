import { useState } from "react";
import {
  dipf1,
  dipf10,
  dipf11,
  dipf12,
  dipf13,
  dipf14,
  dipf2,
  dipf3,
  dipf4,
  dipf5,
  dipf6,
  dipf7,
  dipf8,
  dipf9,
  presido,
} from "../../constants/assets";
import PageWrapper from "../pageWrapper";

const Personality = () => {
  const dipfImages = [
    dipf1,
    dipf5,
    dipf6,
    presido,
    dipf11,
    dipf12,
    dipf13,
    dipf14,
    dipf2,
    dipf3,
    dipf4,
    dipf10,
    dipf7,
    dipf8,
    dipf9,
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
        <img src={dipf6} alt="no-data" className="w-full h-full object-cover" />
      </main>

      <section className="sm:py-10 py-5 font-Montserrat">
        <h2
          className="text-xl sm:text-3xl font-bold text-center sm:mb-5 sm:w-4xl mx-auto"
          data-aos="fade-down"
        >
          High Chief Dr. Sir Darlington Nwabunike wins The Sun Humanitarian
          Service Personality of the Year 2024 Award.
        </h2>

        <div className="max-w-4xl mx-auto sm:p-0 p-3" data-aos="fade-up">
          <div
            className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8"
            data-aos="fade-up"
          >
            {dipfImages.map((imgSrc, index) => (
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
          <p className="text-center text-lg font-bold mt-10">
            GOODWILL MESSAGE FROM DE IMPERIAL PHILANTHROPIC FAMILY
          </p>
          <br />
          <p>
            With hearts full of joy and gratitude, we, the De Imperial
            Philanthropic Family, extend our warmest congratulations to our
            esteemed President, High Chief Dr. Sir Darlington Nwabunike (Ichie
            Eze Nwakaibeya Ogbabalu Aku N’ Anwu Ojoto), (Ikemba 1 of Nibo), on
            being honored with The Sun Humanitarian Service Personality of the
            Year 2024 Award.
          </p><br />
          <p>
            This prestigious recognition is a testament to your unwavering
            dedication to humanity, your relentless commitment to uplifting the
            less privileged, and your selfless service to society. Your
            philanthropic endeavors have touched countless lives, bringing hope,
            empowerment, and positive transformation to many communities.
          </p><br />
          <p>
            As an inspiration to us all, this award further reinforces the
            values that define your leadership—compassion, generosity, and an
            unyielding drive to make the world a better place. We are immensely
            proud of you and celebrate this well-deserved honor with gratitude
            to God for His continued guidance upon your life.
          </p><br />
          <p>
            May this recognition fuel even greater impact in your humanitarian
            journey. We stand with you in service to humanity!
          </p><br />
          <p>
            Congratulations once again, our President and Pillar of
            Philanthropy!
          </p><br />
          <p><i>Signed</i><br /><b>De Imperial Philanthropic Family</b></p>
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

export default Personality;
