import SearchIcon from "@mui/icons-material/Search";
import { Box, useTheme } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";

const Search = () => {
  const theme = useTheme();
  return (
    <Box>
      <OutlinedInput
        placeholder="Search..."
        type="text"
        endAdornment={<SearchIcon sx={{ color: "#777E90" }} />}
        sx={{
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
          "& .Mui-focused.MuiOutlinedInput-notchedOutline": {
            // border: "red",
          },
        }}
      ></OutlinedInput>
    </Box>
  );
};

export default Search;
