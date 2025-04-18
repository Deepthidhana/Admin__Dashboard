import { Box } from "@mui/material";
import { Header } from "../../common/Header";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { MockDataContacts } from "../../utils/data/mockData";
import { ContactProps } from "../../utils/data/types";


const Contacts = () => {
 
  const columns: GridColDef<ContactProps>[] = [
    {
      field: "id",
      headerName: "ID",
      type:"string",
      align: "left",
    },
    { field: "name", headerName: "Name", align: "left" },
    { field: "email", headerName: "Email", align: "left", flex: 1 },
    {
      field: "phone",
      headerName: "Contact",
      align: "left",
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
