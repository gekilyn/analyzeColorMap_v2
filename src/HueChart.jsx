import { RadarChart } from "@mui/x-charts";
import { BarChart } from "@mui/x-charts";
import Typography from "@mui/material/Typography";
export default function HueChart(props) {
  return (
    <div className="chart-block">
      <RadarChart
        height={300}
        series={[{ data: props.hueData.data }]}
        radar={{
          max: Math.max(...props.hueData.data) * 1.1,
          metrics: props.hueData.labels.map((element) => String(element)),
        }}
      />
      <h2>色相</h2>
    </div>
  );
}
