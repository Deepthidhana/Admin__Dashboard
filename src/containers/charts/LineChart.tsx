import { Box } from "@mui/material";
import { Header } from "../../common/Header";
import { LineChart as Line } from "@mui/x-charts";
import {
  keyToLabel,
  mockLineChartDataset,
} from "../../utils/data/mockChartData";

const LineChart = () => {
  return (
    <Box m={"20px"}>
      <Header title={"Line Chart"} subtitle={"Simple Line Chart"} />
      <Box m={"40px 0 0 "}>
        <Line
          dataset={mockLineChartDataset}
          height={500}
          series={Object.keys(keyToLabel).map((key) => ({
            dataKey: key,
            label: keyToLabel[key],
          }))}
          xAxis={[
            {
              scaleType: "time",
              dataKey: "year",
              valueFormatter: (value) => value?.toString(),
              // data:[2018,2019,2020,2021,2022,2023,2024,2025]
              min: 2018,
              max: 2025,
            },
          ]}
          grid={{ vertical: true, horizontal: true }}
          legend={{ hidden: true }}
        />
      </Box>
    </Box>
  );
};

export default LineChart;
