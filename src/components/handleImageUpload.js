import extractHSV from "./extractHSV";
import {
  processHSVFrequencyData,
  generateHueLabelsAndData,
  generateSaturationLabelsAndData,
  generateValueLabelsAndData,
} from "./data-processor";
import { ClipStudio } from "clipstudio";

export default async function handleImageUpload(event, setter) {
  const file = event.target.files[0];
  if (!file) {
    return;
  }

  const img = new Image();
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const reader = new FileReader();

  console.log(event.target.files[0]);

  //inputタグで入れたファイル名に即して、ファイルの画像データをここでimgにセットする関数をreader.onloadに代入
  reader.onload = async function (e) {
    //event.target.files[0]のファイル名の末尾が.clipなら、ClipStudioのAPIを使って画像を開く
    // if (file.name.endsWith(".clip")) {
    //   const clipStudio = await ClipStudio.load(file);
    //   img.src = URL.createObjectURL(clipStudio.getThumbnail());
    // } else {
    img.src = e.target.result;
    // }
  };

  //imgに画像がセットされたら行う処理を関数としてimg.onloadに代入
  img.onload = function () {
    const originalWidth = img.width;
    const originalHeight = img.height;
    let newWidth = originalWidth;
    let newHeight = originalHeight;
    let aspectRatio;
    //幅と高さのどちらかが500PX以上の場合は長辺を500PXにする
    if (originalHeight > 500 || originalWidth > 500) {
      if (originalWidth > originalHeight) {
        newWidth = 500; // 縮小後の幅
        aspectRatio = originalHeight / originalWidth;
        newHeight = newWidth * aspectRatio; // アスペクト比を維持した高さ
      } else {
        newHeight = 500;
        aspectRatio = originalWidth / originalHeight;
        newWidth = newHeight * aspectRatio;
      }
    }
    // Canvasのサイズを更新
    canvas.width = newWidth;
    canvas.height = newHeight;

    // 画像を縮小して描画
    ctx.drawImage(img, 0, 0, newWidth, newHeight);

    //imgData(チャート用データ)オブジェクトを設定
    const imgData = extractHSV(ctx, newWidth, newHeight);
    imgData.hsvFrequency = processHSVFrequencyData(
      imgData.hsvData,
      imgData.allPixelAmount,
    );
    setter(imgData);
  };

  reader.readAsDataURL(file);
}
