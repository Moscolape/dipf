import { ndeli } from "../../constants/assets";
import PageWrapper from "../pageWrapper";

const Ndeli = () => {
  return (
    <PageWrapper>
      <main className="relative w-full sm:h-[60vh] h-[50vh]">
        <img src={ndeli} alt="no-data" className="w-full h-full object-cover" />
      </main>

      <section className="sm:py-10 py-5 font-Montserrat">
        <h2
          className="text-xl sm:text-3xl font-bold text-center sm:mb-5 sm:w-4xl mx-auto"
          data-aos="fade-down"
        >
          NDELI KNIGHTED DE IMPERIAL FAMILY’s PRESIDENT
        </h2>

        <div className="max-w-4xl mx-auto sm:p-0 p-3" data-aos="fade-up">
          <p>
            NDELI KNIGHTED DE IMPERIAL FAMILY PRESIDENT, HIGH CHIEF DR. SIR
            DARLINGTON NWABUNIKE (OGBABALU AKU NA ANWU) AS KING OF DORIME!
          </p>
          <iframe
            className="w-full h-96 rounded-lg shadow-md mt-10"
            src="https://www.youtube.com/embed/au70BD9F3PY"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Ndeli;
