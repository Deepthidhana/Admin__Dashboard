import { Menu } from "@mui/icons-material";
import { Avatar, Box, Drawer, IconButton, Typography } from "@mui/material";
import { ReactElement, useState } from "react";
import {
  charts,
  dashboard,
  data,
  pages,
} from "../../utils/data/sidebarConstants";
import MenuList from "./MenuList";

const Sidebar = (): ReactElement => {
  const [open, setOpen] = useState<boolean>(true);
  return (
    <>
      <Box display={"flex"} ml={4} width={open ? "260px" : "50px"}>
        {/* Admin */}
        <Drawer
          variant="persistent"
          anchor="left"
          open={open}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              paddingLeft: 2,
            },
          }}
        >
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={5}
            p={2}
          >
            <Typography component={"h1"} fontWeight={500}>
              Admin
            </Typography>
            <IconButton onClick={() => setOpen(false)}>
              <Menu />
            </IconButton>
          </Box>

          {/* profile */}
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
          >
            <Avatar
            
              alt="Deepthi Lokam"
              sx={{ width: 56, height: 56 }}
              src="https://mui.com/static/images/avatar/3.jpg"
              slotProps={{
                img:{
                  loading:"lazy"
                }
              }}
            />
            <Typography variant="body2" fontWeight={700}>
              Deepthi Lokam
            </Typography>
            <Typography variant="body2" fontWeight={400} fontSize={10}>
              Admin
            </Typography>
          </Box>

          {/* dashboard title */}
          <MenuList source={dashboard} />
          {/* <List>
            <ListItemButton>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </List> */}
          {/* data */}
          <MenuList source={data} title="Data" />
          {/* pages */}

          <MenuList source={pages} title="Pages" />

          {/* chats */}
          <MenuList source={charts} title="Charts" />
        </Drawer>
        {!open && (
          <IconButton
            onClick={() => setOpen(!open)}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              marginTop: "20px",
              height: "fit-content",
            }}
          >
            <Menu />
          </IconButton>
        )}
      </Box>
    </>
  );
};

export default Sidebar;
