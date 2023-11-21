// @ts-nocheck
import { Box, InputBase, Divider, Typography, IconButton } from "@mui/material";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import { useState } from "react";
import React from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  return (
    <Box width="80%" margin="80px auto" textAlign="center">
      <IconButton>
        <MarkEmailReadOutlinedIcon fontSize="large" />
      </IconButton>
      <Typography variant="h4" fontSize="35px">
        Subscribe To Our Newsletter
      </Typography>
      <Typography fontSize="20px">
        and always be up to date with the latest collections
      </Typography>
      <Box
        padding="2px 4px"
        m="15px auto"
        display="flex"
        alignItems="center"
        width="75%"
        backgroundColor="#F2F2F2"
      >
        <InputBase
          sx={{ ml: 1, flex: 1, fontSize: "20px" }}
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <Typography
          sx={{ p: "10px", fontSize: "25px", ":hover": { cursor: "pointer" } }}
        >
          Subscribe
        </Typography>
      </Box>
    </Box>
  );
};

export default Subscribe;
