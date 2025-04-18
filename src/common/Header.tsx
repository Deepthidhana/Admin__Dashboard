import { Box, Typography } from "@mui/material";

interface HeaderProps {
  title?: string;
  subtitle: string;
}

export const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <Box>
      <Typography variant="subtitle1">{title}</Typography>
      <Typography variant="body2">{subtitle}</Typography>
    </Box>
  );
};
