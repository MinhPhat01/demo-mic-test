import SearchIcon from "@mui/icons-material/Search";
import { Box, OutlinedInput, useTheme, styled } from "@mui/material";
import { Control, Controller } from "react-hook-form";

type SearchProps = {
  name: "search"
  control: Control<{
    search: any
  }>
}

const Search = ({ control, name }: SearchProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => {
        return (
          <Box
            sx={{
              "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#00a859 !important",
              },
            }}
          >
            <StyledInput
              onChange={onChange}
              value={value}
              placeholder="Search..."
              endAdornment={
                <SearchIcon sx={{ color: "#777E90", cursor: "pointer" }} />
              }
            />
          </Box>
        );
      }}
    />
  );
};

export default Search;

const StyledInput = styled(OutlinedInput)(({ theme }) => {
  return {
    borderRadius: "8px",
    padding: "0 10px",
    width: 256,
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    "& .MuiInputBase-input": {
      color: "#777E91",
      fontSize: "12px",
      lineHeight: "20px",
      fontWeight: "400",
      padding: "12px 10px",
    }
  }
})
