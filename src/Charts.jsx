import { useState, useEffect } from "react";

import SaturationChart from "./SaturationChart";
import ValueChart from "./ValueChart";
import SVChart from "./SVChart";
import HueChart from "./HueChart";

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
