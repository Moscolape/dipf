import { agbalanze } from "../../constants/assets";
import PageWrapper from "../pageWrapper";

const Agbalanze = () => {
  return (
    <PageWrapper>
      <main className="relative w-full sm:h-[60vh] h-[50vh]">
        <img
          src={agbalanze}
          alt="no-data"
          className="w-full h-full object-cover"
        />
      </main>

      <section className="sm:py-10 py-5 font-Montserrat">
        <h2
          className="text-xl sm:text-3xl font-bold text-center sm:mb-5 sm:w-4xl mx-auto"
          data-aos="fade-down"
        >
          AGBALANZE ONYEKACHUKWU AND MIGHTY MIGHTY NA UMUCHU SUPPORTED CHICO
          EZEANI WITH N10MILLION EACH
        </h2>

        <div className="max-w-4xl mx-auto sm:p-0 p-3" data-aos="fade-up">
          <p>
            AGBALANZE ONYEKACHUKWU SUPPORTED CHICO EZEANI WITH N10MILLION AND
            APPRECIATED DE IMPERIAL FAMILY WITH $500. MIGHTY MIGHTY NA UMUCHU
            SUPPORTED CHICO EZEANI WITH N10MILLION.
          </p>
          <iframe
            className="w-full h-96 rounded-lg shadow-md mt-10"
            src="https://www.youtube.com/embed/5_A_fV5hb0Q"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Agbalanze;
