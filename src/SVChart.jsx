import { ScatterChart } from "@mui/x-charts";
export default function SVChart(props) {
  return (
    <>
      <ScatterChart
        height={200}
        series={[{ data: props.svData, sizeAxisId: "size" }]}
        zAxis={[
          {
            id: "size",
            sizeMap: { type: "continuous", min: 0, max: 25, size: [0, 23] },
          },
        ]}
      />
    </>
  );
}
