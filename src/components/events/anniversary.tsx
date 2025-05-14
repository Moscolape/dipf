import { elevation } from "../../constants/assets";
import PageWrapper from "../pageWrapper";

const Anniversary = () => {
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
          className="text-xl sm:text-3xl font-bold text-center sm:mb-5 w-4xl mx-auto"
          data-aos="fade-down"
        >
          De Imperial Philanthropic Family, showing love to Chief Emeka Ike’s @
          his 20th WEDDING ANNIVERSARY
        </h2>

        <div className="max-w-4xl mx-auto sm:p-0 p-3" data-aos="fade-up">
          <p>
            De Imperial Philanthropic Family, led by their president High Chief
            Darlington Nwakaibeya Ojoto displayed “Act of love” to Chief Emeka
            Ike on his 20th WEDDING ANNIVERSARY. An event that shutdown Amuwo
            Odofin on Sunday, October 22, 2023.
          </p>
        </div>
      </section>

    </PageWrapper>
  );
};

export default Anniversary;