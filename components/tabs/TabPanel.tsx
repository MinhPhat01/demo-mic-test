import { Box } from "@mui/material";

type TabPanelProps = {
  children: React.ReactNode;
  value: number;
  index: number;
};

export default function TabPanel({ children, value, index }: TabPanelProps) {
  return <>{value === index && <Box sx={{ p: 3 }}>{children}</Box>}</>;
}
