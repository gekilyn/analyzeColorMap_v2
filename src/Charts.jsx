import { useState, useEffect, lazy } from "react";

const HueChart = lazy(() => import("./HueChart"));
const SVChart = lazy(() => import("./SVChart"));
const SaturationChart = lazy(() => import("./SaturationChart"));
const ValueChart = lazy(() => import("./ValueChart"));

export default function Charts(props) {
  return (
    <div className="chart-stack">
      <div className="top-charts">
        <HueChart hueData={props.hsvFrequency.hueData} />
        <SVChart svData={props.hsvFrequency.svCounts} />
      </div>
      <div className="bottom-charts">
        <SaturationChart saturationData={props.hsvFrequency.saturationData} />
        <ValueChart valueData={props.hsvFrequency.valueData} />
      </div>
    </div>
  );
}
