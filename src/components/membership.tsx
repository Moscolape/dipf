import PageWrapper from "../components/pageWrapper";
import { useEffect } from "react";
import initializeAOS from "../utils/aos-init";
import { logo } from "../constants/assets";
import VolunteerForm from "./membership-form";

const Membership = () => {
  useEffect(() => {
    initializeAOS();
  }, []);

  const skills = [
    {
      id: "first",
      items: [
        { label: "President", delay: 200, type: "primary" },
        { label: "1st Vice President", delay: 300, type: "outline" },
        {
          label: "2nd Vice President",
          delay: 400,
          type: "secondary",
          disabled: true,
        },
        { label: "3rd Vice President", delay: 500, type: "secondary outline" },
        { label: "Secretary General", delay: 600, type: "primary" },
        {
          label: "Assistant Secretary General",
          delay: 700,
          type: "outline",
          disabled: true,
        },
      ],
    },
    {
      items: [
        { label: "Financial Secretary", delay: 1300, type: "secondary" },
        { label: "Treasurer", delay: 1200, type: "secondary outline" },
        { label: "SSA to the Executive", delay: 1100, type: "primary" },
        {
          label: "SSA to the Executive on Finance",
          delay: 1000,
          type: "outline",
        },
        {
          label: "Diaspora Coordinator",
          delay: 900,
          type: "secondary",
          disabled: true,
        },
        {
          label: "Assistant Diaspora Coordinator",
          delay: 800,
          type: "secondary outline",
        },
      ],
    },
    {
      items: [
        { label: "Director of Socials", delay: 1400, type: "primary" },
        {
          label: "First assistant director of socials",
          delay: 1500,
          type: "outline",
          disabled: true,
        },
        {
          label: "Second assistant director of socials",
          delay: 1600,
          type: "secondary",
        },
        {
          label: "Public Relations Officer (PRO)",
          delay: 1700,
          type: "secondary outline",
        },
        { label: "Provost", delay: 1800, type: "primary" },
      ],
    },
  ];

  type ButtonType = "primary" | "secondary" | "outline" | "secondary outline";

  const isButtonType = (value: string): value is ButtonType => {
    return ["primary", "secondary", "outline", "secondary outline"].includes(
      value
    );
  };

  const buttonClass = (type: ButtonType): string => {
    const base =
      "w-full sm:w-auto rounded-lg mr-2 mb-2 p-4 font-medium transition-colors duration-300";

    const styles: Record<ButtonType, string> = {
      primary: "bg-[#b58825] text-white border-2 border-[#b58825]",
      secondary: "bg-black text-white border-2 border-black",
      outline: "bg-white text-gray-800 border-2 border-gray-400",
      "secondary outline": "bg-[#7f571c] text-white border-2 border-[#7f571c]",
    };

    // const disabledStyle = "opacity-50 cursor-not-allowed";

    return `${base} ${styles[type] ?? styles.outline}`;
  };

  return (
    <PageWrapper>
      <div className="pt-12 sm:px-6 px-2 sm:w-[90%] mx-auto font-Montserrat relative">
        <h1
          className="text-2xl sm:text-5xl font-Montserrat font-bold mb-4 text-center"
          data-aos="fade-down"
        >
          Join Us
        </h1>
        <section className="sm:mt-10 relative" data-aos="zoom-in">
          <img
            src={logo}
            alt="watermark"
            className="absolute sm:-top-[20%] top-[0%] right-[0%] sm:right-[30%] w-128 opacity-10 pointer-events-none z-30"
          />
          <h1 className="text-lg sm:text-2xl font-bold">
            1.) THE GOVERNING BODY AND OFFICES OF THE FAMILY
          </h1>
          <p className="mt-2">
            The Executive Committee is composed of the following duly elected
            and sworn in persons:
          </p>
          <div className="pt-8 font-Poppins">
            {skills.map((group, index) => (
              <div
                key={index}
                id={group.id || undefined}
                className="flex sm:justify-center flex-wrap sm:mb-8"
              >
                {group.items.map((btn, i) => (
                  <button
                    key={i}
                    data-aos="fade-in"
                    data-aos-delay={btn.delay}
                    disabled={btn.disabled}
                    className={buttonClass(
                      isButtonType(btn.type) ? btn.type : "outline"
                    )}
                  >
                    {btn.label}
                  </button>
                ))}
              </div>
            ))}
          </div>
          <p>
            The above listed offices are tenured and subject to the validation
            and ratification of the AGM.
          </p>
        </section>
      </div>
      <section className="py-10 mt-10 backdrop font-Montserrat">
        <div className="sm:w-[90%] sm:px-6 px-2 mx-auto" data-aos="fade-up">
          <h1 className="text-2xl font-bold">2.) MEMBERSHIP PRINCIPLE</h1>
          <div className="mt-5 sm:flex justify-between">
            <div className="sm:w-[48%]">
              <p>
                The <b>DE IMPERIAL PHILANTHROPIC FAMILY</b> is,
                unapologetically, erected on a clearly defined ideological
                construct. At the core of this ideology, is a sacrificial
                disposition to the needy.
              </p>
              <br />
              <p>
                Consequently, those who, upon strenuous, delicate screening
                parameters, are admitted to its membership, are, unambiguously,
                held to the sacrifice of contributing to a common till, managed
                by a leadership (an Executive Committee) popularly appointed/
                elected and ratified by the entire membership.
              </p>
              <br />
              <p>
                Periodically, Audited Accounts are articulated, and presented,
                to the body. This practice of account rendition has been
                expanded to incorporate a holistic package of year- long
                stewardship, crystallizing in this Inaugural Annual General
                Meeting (AGM).
              </p>
            </div>
            <div className="sm:w-[48%] mt-5 sm:mt-0">
              <p>
                To be clear, the <b>DE IMPERIAL PHILANTHROPIC FAMILY</b> is,
                first, not a conventional Social Club, burdened (as is widely
                evident) by “members- first” considerations and activities.
              </p>
              <br />
              <p>
                Second, the <b>DE IMPERIAL PHILANTHROPIC FAMILY</b> is
                ideologically “blind”, to the existence of states and
                prefectures, as its rule of humanitarian engagement is
                <b> “PAN-SOUTHEAST”</b>.
              </p>
              <br />
              <p>
                Third, the <b>DE IMPERIAL PHILANTHROPIC FAMILY</b> is
                intentionally non-political, to the extent of any grain of
                collective, organizational partisan pursuit, support, or
                endorsement.
              </p>
              <br />
              <p>
                Fourth, the <b>DE IMPERIAL PHILANTHROPIC FAMILY</b> is
                patriotically committed to complying with Statutory Laws,
                Conventions, Rules and Regulations, as cited in the document
                registering, and recognizing it, by the government of the
                federation.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-10 font-Montserrat">
        <div className="sm:w-[90%] sm:px-6 px-2 mx-auto" data-aos="fade-down">
          <h1 className="text-2xl font-bold">3.) FILL THE FORM BELOW;</h1>
          <VolunteerForm />
        </div>
      </section>
    </PageWrapper>
  );
};

export default Membership;
