import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Shirt, UtensilsCrossed, House } from "lucide-react"; // Import icons

interface Metric {
  label: string;
  value: number;
  suffix?: string;
  icon: React.ReactNode;
}

const metrics: Metric[] = [
  {
    label: "Pieces of clothing distributed",
    value: 109522,
    suffix: " +",
    icon: (
      <Shirt className="w-15 h-15 text-white bg-black p-3 rounded-full mb-2" />
    ),
  },
  {
    label: "Meals served since 2020",
    value: 404186,
    suffix: " +",
    icon: (
      <UtensilsCrossed className="w-15 h-15 text-white bg-black p-3 rounded-full mb-2" />
    ),
  },
  {
    label: "Shelters provided",
    value: 1236,
    suffix: " +",
    icon: (
      <House className="w-15 h-15 text-white bg-black p-3 rounded-full mb-2" />
    ),
  },
];

const Metrics = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <div ref={ref} className="w-full py-12 font-Montserrat backdrop" data-aos="zoom-in">
      <h2 className="text-center text-2xl sm:text-4xl font-bold font-Montserrat">
        Numbers don't lie
      </h2>
      <p className="sm:w-3/5 mx-auto mb-10 mt-3 px-3 sm:text-center sm:text-xl">"Thanks to the patriotic, responsible, responsive and dutiful members of De Imperial Philanthropic Family, there has been a burst of fresh air, into indigent, hapless, lives in <b>ALA IGBO</b>."</p>
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {metrics.map((metric, index) => (
          <div key={index} className={`flex flex-col items-center ${index === 1 && 'sm:mt-30'}`}>
            {metric.icon}
            {inView && (
              <CountUp
                start={0}
                end={metric.value}
                duration={2.5}
                separator=","
                suffix={metric.suffix}
                className="text-4xl font-bold my-2"
              />
            )}
            <p className="mt-2">{metric.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Metrics;
