import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

interface ChartData {
  range: string;
  count: number;
}

const COLORS = ["#b58825", "#000000", "#8c8989"];

const ApplicantsByJambScoreRangeBarChart = () => {
  const [data, setData] = useState<ChartData[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchScoreData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
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
    <div className="flex items-center justify-center h-[30vh]">
      <div className="w-8 h-8 border-4 border-[#b58825] border-t-transparent rounded-full animate-spin"></div>
    </div>
  ) : (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart
        data={data}
        layout="vertical"
        margin={{ top: 20, right: 30, left: 40, bottom: 20 }}
      >
        <XAxis type="number" allowDecimals={false} />
        <YAxis type="category" dataKey="range" />
        <Tooltip />
        <Bar dataKey="count" fill="#b58825">
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ApplicantsByJambScoreRangeBarChart;