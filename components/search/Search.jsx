import SearchIcon from "@mui/icons-material/Search";
import { Box, OutlinedInput, useTheme } from "@mui/material";

const Search = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "#00a859 !important",
        },
      }}
    >
      <OutlinedInput
        placeholder="Search..."
        type="text"
        endAdornment={
          <SearchIcon sx={{ color: "#777E90", cursor: "pointer" }} />
        }
        sx={{
          borderRadius: "8px",
          px: "10px",
          width: 256,
          [theme.breakpoints.down("md")]: {
            width: "100%",
          },
          "& .MuiInputBase-input": {
            color: "#777E91",
            fontSize: "12px",
            lineHeight: "20px",
            fontWeight: "400",
            fontFamily: "Poppins",
            padding: "12px 10px",
          },
        }}
      ></OutlinedInput>
    </Box>
  );
};

export default Search;
