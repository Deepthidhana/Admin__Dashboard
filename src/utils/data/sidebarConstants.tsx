import {
  AreaChart,
  BarChart,
  CalendarMonth,
  Group,
  HelpOutline,
  Home,
  Person,
  Phone,
  PieChart,
  Receipt,
  Timeline,
} from "@mui/icons-material";

export interface DataProps {
  icon: any;
  label: string;
  path: string;
}

export const dashboard = [{ icon: <Home />, label: "Dashboard", path: "/" }];

export const data = [
  { icon: <Group />, label: "Manage Teams", path: "/teams" },
  { icon: <Phone />, label: "Contact Information", path: "/contacts" },
  { icon: <Receipt />, label: "Invoice Balances", path: "/invoice" },
];

export const pages = [
  { icon: <Person />, label: "Profile Form", path: "/profile-form" },
  { icon: <CalendarMonth />, label: "Calender", path: "/calender" },
  { icon: <HelpOutline />, label: "FAQ Page", path: "/faq" },
];

export const charts = [
  { icon: <BarChart />, label: "Bar Chart ", path: "/bar-chart" },
  { icon: <PieChart />, label: "Pie Chart", path: "/pie-chart" },
  { icon: <Timeline />, label: "Line Chart", path: "/line-chart" },
  { icon: <AreaChart />, label: "Geography Chart", path: "/geo-chart" },
];
