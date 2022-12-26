import React, { useState } from "react";
import { Box } from "@mui/material";
import Image from "next/image";

const ChangeLanguage = () => {
  const [show, setShow] = useState<boolean>(true);
  const handleChangeLang = () => {
    setShow(!show);
  };
  return (
    <Box
      sx={{
        cursor: "pointer",
      }}
      onClick={handleChangeLang}
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
