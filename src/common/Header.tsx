import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

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
