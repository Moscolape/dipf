import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface ChartData {
  range: string;
  count: number;
}

const COLORS = ["#b58825", "#000000", "#cccccc"];

const ApplicantsByJambScoreRangePieChart = () => {
  const [data, setData] = useState<ChartData[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchScoreData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
        //   `http://localhost:8080/api/v1/analytics/jamb-score-range/`
          `https://dipf-backend.onrender.com/api/v1/analytics/jamb-score-range/`
        );
        const result = await response.json();

        if (!response.ok) {
          throw new Error(
            result.message || "Failed to fetch JAMB score range data"
          );
        }

        setData(result.data);
      } catch (error) {
        console.error("Score chart fetch error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchScoreData();
  }, []);

  return isLoading ? (
    <div className="flex items-center justify-center h-[20vh]">
      <div className="w-8 h-8 border-4 border-[#b58825] border-t-transparent rounded-full animate-spin"></div>
    </div>
  ) : (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          dataKey="count"
          nameKey="range"
          cx="50%"
          cy="50%"
          outerRadius={100}
          label
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default ApplicantsByJambScoreRangePieChart;
