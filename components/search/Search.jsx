import SearchIcon from "@mui/icons-material/Search";
import OutlinedInput from "@mui/material/OutlinedInput";

const Search = () => {
  return (
    <div>
      <OutlinedInput
        placeholder="Search..."
        type="text"
        endAdornment={<SearchIcon sx={{ color: "#777E90" }} />}
        sx={{
          width: 256,
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
    </div>
  );
};

export default Search;
