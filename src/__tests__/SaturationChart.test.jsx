import { render, screen } from "@testing-library/react";
import SaturationChart from "../SaturationChart";
import { describe } from "vitest";
import { BarChart } from "@mui/x-charts/BarChart";
import html2canvas from "html2canvas";

describe("Bar Chart", () => {
  const case1 = "フェイクデータに応じてBarChartを生成";
  test(case1, async () => {
    //棒グラフのdatasetに入れるフェイクのデータ作成
    const dataset = [1, 2, 4, 6, 3, 4];

    //render
    render(<BarChart series={[{ data: dataset }]} data-testid="chart" />);

    //screenからsvgデータを取得
    const el = screen.getByTestId("chart");
    expect(el).toBeInTheDocument();
    console.log(el);

    //画像書き出し
    // html2canvas(el).then((canvas) => {
    //   // const imgData = canvas.toDataURL("./img/" + case1 + ".png");
    // });
  });
});
