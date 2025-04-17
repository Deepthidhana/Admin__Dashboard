import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ReactElement } from "react";
import { Link } from "react-router-dom";

const MenuList = ({ source, title }: any): ReactElement => {
  return (
    <Box>
      <List>
        <ListItemText primary={title} />
        {source.map((item: any, index: number) => (
          <Link
            to={item.path}
            // underline="none"
            key={`${item.label}-${index}`}
          >
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </Link>
        ))}
      </List>
    </Box>
  );
};

export default MenuList;
