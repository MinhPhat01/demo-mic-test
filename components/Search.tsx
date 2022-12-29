import SearchIcon from "@mui/icons-material/Search";
import { OutlinedInput, useTheme, styled } from "@mui/material";
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
          <StyledInput
            onChange={onChange}
            value={value}
            placeholder="Search..."
            endAdornment={
              <SearchIcon sx={{ color: "#777E90", cursor: "pointer" }} />
            }
          />
        );
      }}
    />
  );
};

export default Search;

const StyledInput = styled(OutlinedInput)(({ theme }) => {
  return {
    borderRadius: "8px",
    width: 256,
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  }
})
