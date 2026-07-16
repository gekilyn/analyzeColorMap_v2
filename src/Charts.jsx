import { useState, useEffect } from "react";

import SaturationChart from "./SaturationChart";

export default function Charts(props) {
  return (
    <>
      <SaturationChart saturationData={props.hsvFrequency.saturationData} />
    </>
  );
}
