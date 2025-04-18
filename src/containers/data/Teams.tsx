import { Box, Typography, useTheme } from "@mui/material";
import { Header } from "../../common/Header";
import { DataGrid, GridRowModel } from "@mui/x-data-grid";
import { mockDataTeams } from "../../utils/data/mockData";
import { useMemo } from "react";
import {
  AdminPanelSettings,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import { colorTokens } from "../../utils/theme/theme";

 const Teams = () => {
    const theme = useTheme();
    const token = colorTokens(theme.palette.mode);

  const columns = useMemo(
    () => [
      { field: "id", headerName: "ID" },
      { field: "name", headerName: "Name", flex: 1 },
      { field: "age", headerName: "Age" },
      { field: "email", headerName: "Email", flex: 1 },
      { field: "phone", headerName: "Phone", flex: 1 },
      {
        field: "access",
        headerName: "Access",
        flex:1,
        renderCell: ({ row: { access } } : GridRowModel ) => (
           <Box bgcolor={access === "Admin" ? token.greenAccent[600] : token.greenAccent[700]}
           width={"60%"}
           display={"flex"}
           alignItems={'center'}
           justifyContent={"center"}
           margin={"0 auto"}
           p={"5px"}
           borderRadius={"4px"}>
            {access === "Manager" && <SecurityOutlined />}
            {access === "Admin" && <AdminPanelSettings />}
            {access === "User" && <LockOpenOutlined />}
            <Typography>{access}</Typography>
          </Box>
        ),
      },
    ],
    []
  );
  return (
    <Box m={2}>
      <Header title={"TEAM"} subtitle={"Managing the Team Members"} />
      <Box m={"40px 0 0"} height={"70vh"}>
        <DataGrid rows={mockDataTeams} columns={columns} />
      </Box>
    </Box>
  );
};

export default Teams;
