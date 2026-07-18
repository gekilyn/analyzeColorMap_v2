import { useEffect, useState } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
export default function ValueChart(props) {
  return (
    <>
      {props.valueData?.data && (
        <BarChart
          height={100}
          series={[{ data: props.valueData.data }]}
          xAxis={[{ data: props.valueData.labels }]}
        />
      )}
    </>
  );
}
