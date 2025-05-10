import PageWrapper from "../components/pageWrapper";
import { useEffect } from "react";
import initializeAOS from "../utils/aos-init";
import { logo, mendem } from "../constants/assets";

const Impact = () => {
  useEffect(() => {
    initializeAOS();
  }, []);

  return (
    <PageWrapper>
      <main className="relative w-full h-[60vh]">
        {/* Background Image */}
        <img
          src={mendem}
          alt="no-data"
          className="w-full h-full object-cover"
        />
      </main>
      <section className="py-10 backdrop">
        <h2 className="text-2xl sm:text-5xl font-bold text-center sm:mb-10 font-Montserrat">
          Diaspora Interventions
        </h2>
        <section
          className="max-w-6xl mx-auto font-Montserrat sm:p-0 p-3"
          data-aos="fade-up"
        >
          <p>
            The <b>DE IMPERIAL PHILANTHROPIC FAMILY</b> is consistently
            energized by invaluable intellectual and material interventions of
            worthy icons, of South- East extraction, in the Diaspora.
          </p>
          <br />
          <p>
            Extant statistics indicate, that the involvement of Diaspora
            Investment Coupons, to the Nigerian economy, is to the tune of over
            twenty-two percent (22%) of our National Gross Domestic Product
            (GDP). It is, therefore, of profound wisdom, to recognize the
            immensely valuable, relevant and selfless contributions of iconic
            Igbo sons, in the Diaspora, to South East projected growth and
            development.
          </p>{" "}
          <br />
          <p>
            The <b>DE IMPERIAL PHILANTHROPIC FAMILY</b>, as a body, is persuaded
            to align with laudable efforts and compassionate dispositions, which
            its Diaspora membership has, so far, been demonstrating. The onerous
            duty of engendering a burst of fresh air, into indigent, hapless,
            lives in <b>“ALA IGBO”</b> will remain a mirage, without the sure –
            footedness of our Diaspora kith and kin.
          </p>
        </section>
      </section>
      <section className="py-10">
        <section className="max-w-6xl mx-auto font-Montserrat relative">
          <img
            src={logo}
            alt="watermark"
            className="absolute sm:top-[0%] top-[20%] right-[0%] sm:right-[30%] w-128 opacity-10 pointer-events-none z-30"
          />
          <h2
            className="text-2xl sm:text-5xl font-bold text-center sm:mb-10 font-Montserrat"
            data-aos="fade-down"
          >
            Corporate Social Responsibility: An Obligation Imperative
          </h2>
          <div data-aos="fade-up" className="sm:p-0 p-3">
            <p>
              Globally, Corporate Bodies, and, sundry private sector operators,
              willfully, commit a part of their pre-tax earnings, to executing
              citizen – friendly social initiatives, with a view to identifying
              with their immediate operating environments.
            </p>
            <br />
            <p>
              The <b>DE IMPERIAL PHILANTHROPIC FAMILY</b>, upon its inception,
              as a largely humanitarian body, set out to, consistently, match
              its core mandates, with visible, social engagements, as touching,
              Education, Health, (especially, checkmating Pre-natal, Maternal
              and infant mortality rates across the entire South East Region)
              Sports, Skills Acquisition, Creativity and Entertainment.
            </p>{" "}
            <br />
            <p>
              To this end, the <b>DE IMPERIAL PHILANTHROPIC FAMILY</b>, has,
              already, embarked on tangible visitations to orphanages, in
              various parts of South- East Nigeria, as well as Lagos, being a
              Cosmopolitan demographic, with a large <b>“Ndi Igbo”</b> presence
              and, also, it functional, official location.
            </p>
            <br />
            <p>
              As a body, the <b>DE IMPERIAL PHILANTHROPIC FAMILY</b>, projects
              to establish cottage hospitals, rebuild/renovate dilapidated
              schools, establish a scholarship scheme for indigent sons and
              daughters of the South-East desirous of academic pursuits up to
              tertiary level, provide start – up funds for potential young
              entrepreneurs, support local sporting activities across the five
              states of South-East, <b>REALITY TV SHOW</b>, for the enthronement
              , celebration and sustenance of key Igbo culture, values and world
              view.
            </p>
          </div>
        </section>
      </section>
    </PageWrapper>
  );
};

export default Impact;
