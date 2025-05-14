import { useEffect } from "react";
import PageWrapper from "../components/pageWrapper";
import initializeAOS from "../utils/aos-init";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  useEffect(() => {
    initializeAOS();
  }, []);

  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto px-4 py-10 font-Montserrat">
        <h2
          className="text-2xl sm:text-5xl font-bold text-center mb-10 font-Montserrat text-bounce"
          data-aos="fade-down"
        >
          Contact Us
        </h2>

        <div className="">
          {/* Contact Info */}
          <div
            className="flex sm:flex-row flex-col gap-6 justify-between"
            data-aos="fade-up"
          >
            <div className="flex items-start gap-4">
              <MapPin className="text-red-500 mt-1" size={24} />
              <div>
                <h4 className="font-semibold">Our Location</h4>
                <p>4 Oladimeji Alo Street, Lekki Phase 1, Lagos</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-green-500 mt-1" size={24} />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p>+234 809 914 9968</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-blue-500 mt-1" size={24} />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p>deimperialphilanthropic@yahoo.com</p>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="w-full h-[300px] md:h-[500px] mt-16" data-aos="fade-up" data-aos-delay={500}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6813848419583!2d3.4731289747524645!3d6.434954993556213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf5b46974e60d%3A0x296f5bf4bb45c96e!2s4%20Oladimeji%20Alo%20St%2C%20Lekki%20Phase%20I%2C%20Lekki%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1746799969940!5m2!1sen!2sng"
              className="w-full h-full rounded-md"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Contact;
