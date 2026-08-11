import { handleImageUpload, handlePaste } from "./components/handleImageUpload";
import "./ImageBox.css";
import Box from "@mui/material/Box";
export default function ImageBox(props) {
  return (
    <>
      <canvas id="canvas"></canvas>
      <input
        type="file"
        onChange={() => handleImageUpload(event, props.setImgData)}
      />
      <Box
        component="section"
        tabIndex={0}
        onPaste={(event) => handlePaste(event, props.setImgData)}
        sx={{ p: 10, border: "1px dashed grey" }}
      >
        ここに画像をペーストしてね
      </Box>
    </>
  );
}
