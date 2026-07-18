import { hsvToRgb, rgbToHsv } from "./convertHSVandRGBA";

export default function extractHSV(ctx, width, height) {
  const imageData = ctx.getImageData(0, 0, width, height);

  //画像データはピクセル数*4（RSVA）の一次元配列に変換される
  const hsvData = [];

  //画像のhsvデータの出現回数を保存するhsvData配列の作成
  for (let i = 0; i < imageData.data.length; i += 4) {
    const r = imageData.data[i] / 255;
    const g = imageData.data[i + 1] / 255;
    const b = imageData.data[i + 2] / 255;

    //rgb値をHSVに変換（この時にHは１２０段階、SとVは２０段階で振り分けられる）
    const hsv = rgbToHsv(r, g, b);

    //hsvdata配列の中で、HSV全て同一のモノがあればそれのamountを＋１する。なければpush
    let flag = false;
    for (let i = 0; i < hsvData.length; i++) {
      if (
        hsvData[i].h === hsv.h &&
        hsvData[i].s === hsv.s &&
        hsvData[i].v === hsv.v
      ) {
        hsvData[i].amount += 1;
        flag = true;
        break;
      }
    }
    if (!flag) {
      hsvData.push(hsv);
    }
  }
  //hsvDataをamount多い順でソート
  hsvData.sort((b, a) => a.amount - b.amount);
  //ピクセル数を算出
  const allPixelAmount = imageData.data.length / 4;
  return { hsvData, allPixelAmount };
}
