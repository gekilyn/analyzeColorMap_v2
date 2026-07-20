import { useEffect, useState } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
export default function ValueChart(props) {
  return (
    <div>
      {props.valueData?.data && (
        <BarChart
          height={100}
          series={[{ data: props.valueData.data }]}
          xAxis={[{ data: props.valueData.labels }]}
        />
      )}
      <h2>明度</h2>
    </div>
  );
}
