import { Box, Typography } from "@mui/material";

export const Header = ({ title, subtitle }) => {
  return (
    <Box>
      <Typography variant="subtitle1">{title}</Typography>
      <Typography variant="body2">{subtitle}</Typography>
    </Box>
  );
};
