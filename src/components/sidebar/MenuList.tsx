import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

const MenuList = ({ source, title }: any): ReactElement => {
  return (
    <Box>
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
    </Box>
  );
};

export default MenuList;
