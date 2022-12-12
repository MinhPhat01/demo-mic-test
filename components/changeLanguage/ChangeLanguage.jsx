import { Box } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

const ChangeLanguage = () => {
  const [show, setShow] = useState(true);
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
