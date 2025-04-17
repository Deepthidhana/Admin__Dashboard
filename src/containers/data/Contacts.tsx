import { Box } from "@mui/material";
import { Header } from "../../common/Header";
import { DataGrid } from "@mui/x-data-grid";
import { MockDataContacts } from "../../utils/data/mockData";

const Contacts = () => {
  const columns = [
    {
      field: "id",
      headerName: "ID",
      textAlign: "left",
    },
    { field: "name", headerName: "Name", textAlign: "left" },
    { field: "email", headerName: "Email", textAlign: "left", flex: 1 },
    {
      field: "phone",
      headerName: "Contact",
      textAlign: "left",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      align: "left",
      flex: 1,
    },
  ];
  return (
    <Box>
      <Header
        title="CONTACTS"
        subtitle={"Managing contacts for Future Reference"}
      />
      <Box m={"40px 0 0"} height={"75vh"}>
        <DataGrid rows={MockDataContacts} columns={columns} />
      </Box>
    </Box>
  );
};
export default Contacts;
