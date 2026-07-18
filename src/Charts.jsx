import { useState, useEffect } from "react";

import SaturationChart from "./SaturationChart";
import ValueChart from "./ValueChart";
import SVChart from "./SVChart";

export default function Charts(props) {
  return (
    <>
      <SVChart svData={props.hsvFrequency.svCounts} />
      <SaturationChart saturationData={props.hsvFrequency.saturationData} />
      <ValueChart valueData={props.hsvFrequency.valueData} />
    </>
  );
}
