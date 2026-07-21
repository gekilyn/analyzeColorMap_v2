import handleImageUpload from "./components/handleImageUpload";
import "./ImageBox.css";
export default function ImageBox(props) {
  return (
    <>
      <canvas id="canvas"></canvas>
      <input
        type="file"
        onChange={() => handleImageUpload(event, props.setImgData)}
      />
    </>
  );
}
