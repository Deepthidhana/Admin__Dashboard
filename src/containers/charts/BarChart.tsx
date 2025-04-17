import { Box } from "@mui/material";
import { Header } from "../../common/Header";
import { BarChart as Bar } from "@mui/x-charts";
import { BarChart_XLabels, mockBarChartData } from "../../utils/data/mockChartData";


const BarChart = () => {
  return (
    <Box m={"20px"}>
      <Header title={"Bar Chart"} subtitle={"Simple Bar Chart"} />
      <Box m={"40px 0 0 "}>
        <Bar
        height={500}
        // width={500}
          series={[
            {
              data: mockBarChartData,
              label: "users",
              id: "usersId",
              stack: "stack1",
            },
            {
              data: mockBarChartData,
              label: "managers",
              id: "managersId",
              stack: "stack1",
            },
            {
              data:mockBarChartData,
              label:"Admin",
              id:"adminId",
              stack:"stack1"
            }
          ]}

          xAxis={[{
            data: BarChart_XLabels,
            scaleType:"band",
            categoryGapRatio: 0.4,
            barGapRatio:0.7,
            // tickPlacement:"start"
            }]}
        />
      </Box>
    </Box>
  );
};

export default BarChart;



