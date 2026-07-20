import ImageBox from "./ImageBox";
import Charts from "./Charts";
import Table from "./Table";
import { useState } from "react";

export default function App() {
  const [imgData, setImgData] = useState({});
  return (
    <>
      <h1>画像の色相・彩度・明度分析</h1>
      <div className="app-layout">
        <div className="image-panel">
          <ImageBox setImgData={setImgData} />
        </div>
        {imgData.hsvFrequency && (
          <div className="charts-panel">
            <Charts hsvFrequency={imgData.hsvFrequency} />
          </div>
        )}
      </div>
    </>
  );
}
