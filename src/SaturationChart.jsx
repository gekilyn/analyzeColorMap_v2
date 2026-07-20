import { useEffect, useState } from "react";
import { generateSaturationLabelsAndData } from "./components/data-processor";
import { BarChart } from "@mui/x-charts/BarChart";

export default function SaturationChart(props) {
  return (
    <div>
      {props.saturationData?.data && (
        <BarChart
          height={100}
          series={[{ data: props.saturationData.data }]}
          xAxis={[{ data: props.saturationData.labels }]}
        />
      )}
      <h2>彩度</h2>
    </div>
  );
}
