import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Box display={"flex"}>
      <Sidebar />
      <Box component={"main"} sx={{ ml: "38px", width: "100%" }}>
        <Topbar />
        <Outlet />
      </Box>
    </Box>
  );
}

export default App;

// SRAMB/E/2025/03251

// <Box display={"flex"}>
//         <Sidebar />
//         <Box component={"main"} sx={{ ml: "38px", width: "100%" }}>
//           <Topbar />
//           <RouterProvider router={routes} ></RouterProvider>
//         </Box>
//       </Box>
