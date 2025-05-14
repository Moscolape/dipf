import { elevation } from "../../constants/assets";
import PageWrapper from "../pageWrapper";

const Elevation = () => {
  return (
    <PageWrapper>
      <main className="relative w-full sm:h-[60vh] h-[50vh]">
        <img
          src={elevation}
          alt="no-data"
          className="w-full h-full object-cover"
        />
      </main>

      <section className="sm:py-10 py-5 font-Montserrat">
        <h2
          className="text-xl sm:text-3xl font-bold text-center sm:mb-5 sm:w-4xl mx-auto"
          data-aos="fade-down"
        >
          ANNUAL GENERAL MEETING 2023 – Elevation Night 2023
        </h2>

        <div className="max-w-4xl mx-auto sm:p-0 p-3" data-aos="fade-up">
          <p>
            De Imperial Philanthropic Family’s ANNUAL GENERAL MEETING and
            Elevation Night 2023.
          </p>
          <iframe
            className="w-full h-96 rounded-lg shadow-md mt-10"
            src="https://www.youtube.com/embed/GBEe7nw0Eak"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Elevation;
