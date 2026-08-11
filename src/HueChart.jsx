import { RadarChart } from "@mui/x-charts";
import { BarChart } from "@mui/x-charts";
import Typography from "@mui/material/Typography";
export default function HueChart(props) {
  // Clipstudioでは色相サークルの頂点が60のため、事前にHueChartのデータを60/3=20ずらす
  const hueData = props.hueData.data
    .slice(20)
    .concat(props.hueData.data.slice(0, 20));
  return (
    <div className="chart-block">
      <RadarChart
        height={300}
        series={[{ data: hueData }]}
        radar={{
          max: Math.max(...props.hueData.data) * 1.1,
          metrics: props.hueData.labels.map((element) =>
            String(element + 60 < 360 ? element + 60 : element - 300),
          ),
          labelFormatter: (name, { location }) =>
            location === "tick" && Number(name) % 30 !== 0 ? "" : name,
        }}
      />
      <h2>色相</h2>
    </div>
  );
}
