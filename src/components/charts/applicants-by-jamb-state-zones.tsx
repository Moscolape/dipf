import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface ChartData {
  zone: string;
  count: number;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: { value: number }[] | null;
  label?: string;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-white px-5 py-3 z-40 relative rounded-lg shadow-lg font-Urbanist">
        <p className="label text-h11 font-medium">{`${label}`}</p>
        <p className="uv font-semibold text-h8">{`${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

const ApplicantsByJambStateZones = () => {
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getChartData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
            `https://dipf-backend.onrender.com/api/v1/analytics/jamb-state-zones/`
        //   `http://localhost:8080/api/v1/analytics/jamb-state-zones/`
        );

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.message || "Failed to fetch chart data");
        }

        setChartData(result.data);
      } catch (err) {
        console.error("Fetch Error:", err);
      } finally {
        setIsLoading(false);
      }
    };

    getChartData();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center h-[30vh]">
          <div className="w-8 h-8 border-4 border-[#b58825] border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div style={{ width: "100%" }}>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="zone"
                tick={{ fontSize: 16 }}
                textAnchor="middle"
              />
              <YAxis allowDecimals={false} />
              <Tooltip content={<CustomTooltip />} cursor={false} />
              <Bar dataKey="count" fill="#b58825" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </>
  );
};

export default ApplicantsByJambStateZones;
