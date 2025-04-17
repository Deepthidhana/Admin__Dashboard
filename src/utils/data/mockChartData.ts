export const BarChart_XLabels = ["2021", "2022", "2023", "2024", "2025"];
export const mockBarChartData = [240, 300, 400, 350, 450];

export const mockLineChartDataset: { [key: string]: string | number }[] = [
  { role: "role", year: 2018, admin: 34, user: 43, manager: 96 },
  { role: "role", year: 2019, admin: 22, user: 33, manager: 44 },
  { role: "role", year: 2020, admin: 46, user: 41, manager: 35 },
  { role: "role", year: 2021, admin: 24, user: 13, manager: 14 },
  { role: "role", year: 2022, admin: 14, user: 23, manager: 54 },
  { role: "role", year: 2023, admin: 34, user: 43, manager: 96 },
  { role: "role", year: 2024, admin: 22, user: 33, manager: 44 },
  { role: "role", year: 2025, admin: 46, user: 41, manager: 35 },
];

export const keyToLabel: { [key: string]: string } = {
  admin: "Admin count",
  user: "User count",
  manager: "Manager count",
};
