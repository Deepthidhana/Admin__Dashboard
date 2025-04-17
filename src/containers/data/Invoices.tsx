import { Box } from "@mui/material"
import { Header } from "../../common/Header";
import { DataGrid } from "@mui/x-data-grid"
import { mockDataInvoices } from "../../utils/data/mockData"

export const Invoices = ()=>{
    const columnns = [{
        field:"id",
        headerName:"ID"
    },
    {
        field: "name",
        headerName:"Name",
        flex:1

    },
    {
        field:'email',
        headerName:"Email",
        flex:1
    },
    {
        field:"cost",
        headerName:"Cost",
        flex:1
    },
    {
        field:"date",
        headerName: "Date",
        flex:1
    }

]
    return(
        <Box>
            <Header title="INVOICES" subtitle={"List of invoices"} />
            <Box m={"40px 0 0"} height={"75vh"}>
                <DataGrid rows={mockDataInvoices} columns={columnns}/>
            </Box>
        </Box>
    )
}

export default Invoices;