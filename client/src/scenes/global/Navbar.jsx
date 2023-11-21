// @ts-nocheck
import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton } from "@mui/material";
import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { shades } from "../../theme";
import { setIsCartOpen } from "../../state";
import React from "react";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      height="80px"
      backgroundColor="rgba(128, 0, 32, 0.5)"
      color="black"
      border="2px solid #FFD700"
      position="fixed"
      top="0"
      left="0"
      zIndex="1"
    >
      <Box
        width="60%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          onClick={() => navigate("/")}
          sx={{
            fontFamily: "Dancing Script",
            cursor: "pointer",
            fontSize: "3.5rem",
            color: shades.secondary[800],
            mb: "10px",
          }}
        >
          GlamPet
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          columnGap="40px"
          zIndex="2"
        >
          <IconButton>
            <SearchOutlined sx={{ fontSize: "1.5rem", color: "#FFD700" }} />
          </IconButton>
          <IconButton>
            <PersonOutline sx={{ fontSize: "1.5rem", color: "#FFD700" }} />
          </IconButton>
          <Badge
            badgeContent={cart.length}
            color="secondary"
            invisible={cart.length === 0}
            sx={{
              "& .MuiBadge-badge": {
                right: 5,
                top: 5,
                padding: "0 4px",
                height: "16px",
                minWidth: "13px",
              },
            }}
          >
            <IconButton onClick={() => dispatch(setIsCartOpen({}))}>
              <ShoppingBagOutlined
                sx={{ fontSize: "1.5rem", color: "#FFD700" }}
              />
            </IconButton>
          </Badge>
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
