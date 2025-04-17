import {
  AccountCircle,
  LightMode,
  NotificationsNone,
  Search,
  Settings,
} from "@mui/icons-material";
import { Box, IconButton, InputBase, Stack } from "@mui/material";
import { ReactElement } from "react";

const Topbar = (): ReactElement => {
  return (
    <>
      <Box display={"flex"} justifyContent={"space-between"}>
        {/* search section */}
        <Box>
          <InputBase placeholder="Search" aria-label="search here" />
          <IconButton>
            <Search />
          </IconButton>
        </Box>

        {/* icons section */}
        <Stack direction={"row"}>
          <IconButton>
            <LightMode />
          </IconButton>
          <IconButton>
            <NotificationsNone />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
          <IconButton>
            <AccountCircle />
          </IconButton>
        </Stack>
      </Box>
    </>
  );
};

export default Topbar;
