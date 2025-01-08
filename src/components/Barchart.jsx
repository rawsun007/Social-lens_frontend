import React, { useState, useEffect } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import Papa from "papaparse";

export default function Baerchart() {
  const [chartData, setChartData] = useState({
    xAxis: [],
    series: [],
  });

  useEffect(() => {
    // Load and parse the CSV file
    Papa.parse("app/data/final_social_media_data_generated.csv", {
      download: true,
      header: true,
      complete: (result) => {
        const rows = result.data;

        // Extract X-axis labels and series data
        const xAxis = rows.map((row) => row.Group);
        const series = [
          { data: rows.map((row) => parseFloat(row.Series1)) },
          { data: rows.map((row) => parseFloat(row.Series2)) },
          { data: rows.map((row) => parseFloat(row.Series3)) },
        ];

        setChartData({ xAxis, series });
      },
    });
  }, []);

  return (
    <BarChart
      xAxis={[{ scaleType: "band", data: chartData.xAxis }]}
      series={chartData.series}
      width={500}
      height={300}
    />
  );
}
