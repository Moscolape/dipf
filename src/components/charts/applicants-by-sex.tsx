import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

interface ChartData {
  sex: string;
  count: number;
}

const COLORS = ["#b58825", "#000000"];

const ApplicantsBySexPieChart = () => {
  const [data, setData] = useState<ChartData[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchSexData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
        //   `http://localhost:8080/api/v1/analytics/sex-count/`
          `https://dipf-backend.onrender.com/api/v1/analytics/sex-count/`
        );
        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.message || "Failed to fetch sex chart data");
        }

        setData(result.data);
      } catch (error) {
        console.error("Sex chart fetch error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSexData();
  }, []);

  return isLoading ? (
    <div className="flex items-center justify-center h-[30vh]">
      <div className="w-8 h-8 border-4 border-[#b58825] border-t-transparent rounded-full animate-spin"></div>
    </div>
  ) : (
    <ResponsiveContainer width="100%" height={350}>
      <PieChart>
        <Pie
          data={data}
          dataKey="count"
          nameKey="sex"
          cx="50%"
          cy="50%"
          innerRadius={40}
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

export default ApplicantsBySexPieChart;
