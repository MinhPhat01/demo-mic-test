import Image from "next/image";
import { Box } from "@mui/material";
import { useShow } from "hooks/useShow";

const ChangeLanguage = () => {
  const { show, handleShow } = useShow()
  return (
    <Box
      sx={{
        cursor: "pointer",
      }}
      onClick={handleShow}
    >
      {show ? (
        <Image alt="en" src="/en1.png" width={24} height={16}></Image>
      ) : (
        <Image alt="vi" src="/vi1.png" width={24} height={16}></Image>
      )}
    </Box>
  );
};

export default ChangeLanguage;
