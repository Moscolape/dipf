import { useState } from "react";
import {
  maiden1,
  maiden10,
  maiden11,
  maiden12,
  maiden13,
  maiden14,
  maiden15,
  maiden16,
  maiden17,
  maiden2,
  maiden3,
  maiden4,
  maiden5,
  maiden6,
  maiden7,
  maiden8,
  maiden9,
} from "../constants/assets";
import BeneficiariesTable2023 from "./2023-scholarship-beneficiaries";
import PageWrapper from "./pageWrapper";

const DIPF2023ScholarshipStudents = () => {
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

  const flagOffImages = [
    maiden1,
    maiden2,
    maiden10,
    maiden11,
    maiden12,
    maiden13,
    maiden14,
    maiden15,
    maiden16,
    maiden17,
    maiden3,
    maiden4,
    maiden5,
    maiden6,
    maiden7,
    maiden8,
    maiden9,
  ];

  return (
    <PageWrapper>
      <section className="mt-25 max-w-6xl mx-auto font-Montserrat px-3">
        <h2
          className="text-xl sm:text-4xl font-bold sm:mb-10 mb-3 underline sm:no-underline sm:text-center"
          data-aos="fade-down"
        >
          Maiden Edition Beneficiaries of the DIPF Southeast Scholarship for 250
          JS1 Students
        </h2>
        <p>
          In a groundbreaking initiative,{" "}
          <b>De Imperial Philanthropic Family</b>, a prominent NGO comprising
          eminent individuals from Nigeria’s southeastern states –{" "}
          <b>Anambra, Imo, Enugu, Abia, and Ebonyi</b> – has provided a
          comprehensive program to award scholarships to{" "}
          <b>over 1000 students</b> in the next few years. The initiative,
          spearheaded by De Imperial Philanthropic Family’s President,{" "}
          <b>High Chief Dr. Darlington Nwabunike</b> (Eze Nwakaibeya Ogbabalu
          Aku N’ Anwu Ojoto), and <b>Mr Chikezie Okonkwo</b> (Akunaetigbuilo na
          Nawfia) Education Committee Chairman.
        </p>
        <div className="-mt-10">
          <BeneficiariesTable2023 />
        </div>
        <h2
          className="text-xl sm:text-4xl font-bold sm:mb-10 mb-3 underline sm:no-underline sm:text-center"
          data-aos="fade-up"
        >
          Pictures from the Flag-Off
        </h2>
        <div
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8"
          data-aos="fade-up"
        >
          {flagOffImages.map((imgSrc, index) => (
            <div
              key={index}
              className="w-full h-48 overflow-hidden rounded-lg shadow-md"
            >
              <img
                src={imgSrc}
                loading="lazy"
                alt={`Flagoff image ${index + 1}`}
                onClick={() => openModal(imgSrc)}
                className="w-full h-full object-cover hover:scale-125 cursor-pointer transition-transform duration-300"
              />
            </div>
          ))}
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

export default DIPF2023ScholarshipStudents;
