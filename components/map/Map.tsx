import React from "react";
import { Box } from "@mui/material";
import { useMeasure } from "react-use";

export default function Map() {
  const [ref, { width }] = useMeasure();
  return (
    <Box ref={ref} sx={{ border: "12px solid #E6E8EC", borderRadius: "16px" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.483233861418!2d106.67258331462244!3d10.774252692322952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ed8cbafd0d7%3A0xab984a095c52189c!2zMTgxIMSQLiBDYW8gVGjhuq9uZywgUGjGsOG7nW5nIDEyLCBRdeG6rW4gMTAsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCA3MDAwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1670574245701!5m2!1svi!2s"
        width={width}
        height={width / (520 / 376)}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </Box>
  );
}
