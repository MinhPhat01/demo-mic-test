import { Box } from "@mui/material";

type Props = {
  children: React.ReactNode,
  value: number,
  index: number,
};

export default function TabPanel({ children, value, index }: Props) {
  return <>{value === index && <Box sx={{ p: 3 }}>{children}</Box>}</>;
}
