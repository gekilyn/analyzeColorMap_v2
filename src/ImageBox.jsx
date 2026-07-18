import handleImageUpload from "./components/handleImageUpload";
import "./ImageBox.css";
export default function ImageBox(props) {
  return (
    <>
      <input
        type="file"
        onChange={() => handleImageUpload(event, props.setImgData)}
      />
      <canvas id="canvas"></canvas>
    </>
  );
}
