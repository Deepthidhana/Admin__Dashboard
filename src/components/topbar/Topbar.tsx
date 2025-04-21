import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LightMode from "@mui/icons-material/LightMode";
import NotificationsNone from "@mui/icons-material/NotificationsNone";
import Search from "@mui/icons-material/Search";
import Settings from "@mui/icons-material/Settings";
import { ReactElement } from "react";

const Topbar = (): ReactElement => {
  return (
    <>
      <Box display={"flex"} justifyContent={"space-between"}>
        {/* search section */}
        <Box>
          <InputBase placeholder="Search" aria-label="search here" />
          <IconButton aria-label="search">
            <Search />
          </IconButton>
        </Box>

        {/* icons section */}
        <Stack direction={"row"}>
          <IconButton aria-label="dark theme">
            <LightMode />
          </IconButton>
          <IconButton aria-label="Notifications">
            <NotificationsNone />
          </IconButton>
          <IconButton aria-label="Settings">
            <Settings />
          </IconButton>
          <IconButton aria-label="profile">
            <AccountCircle />
          </IconButton>
        </Stack>
      </Box>
    </>
  );
};

export default Topbar;
