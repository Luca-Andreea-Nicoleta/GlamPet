// @ts-nocheck
import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";
import React from "react";

function Footer() {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box
      marginTop="70px"
      padding="40px 0"
      backgroundColor="rgba(128, 0, 32, 0.7)"
      border="2px solid #FFD700"
    >
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h5"
            fontWeight="bold"
            fontFamily="Dancing Script"
            mb="15px"
            sx={{
              fontSize: "3.5rem",
              color: shades.secondary[800],
            }}
          >
            GlamPet
          </Typography>
          <div className="text-description">
            Discover a spectacular collection of elegant and unique jewelry for
            your pets! From sparkling necklaces and exquisite pendants to subtle
            rings and sophisticated accessories.
          </div>
        </Box>

        <Box>
          <Typography
            variant="h4"
            fontWeight="bold"
            // mt="20px"
            // mb="20px"
            fontSize="25px"
          >
            About Us
          </Typography>
          <Typography mb="5px" fontSize="15px">
            Careers
          </Typography>
          <Typography mb="5px" fontSize="15px">
            Our Stores
          </Typography>
          <Typography mb="5x" fontSize="15px">
            Terms & Conditions
          </Typography>
          <Typography mb="5px" fontSize="15px">
            Privacy Policy
          </Typography>
        </Box>

        <Box>
          <Typography
            variant="h4"
            fontWeight="bold"
            // mb="20px"
            // mt="15px"
            fontSize="25px"
          >
            Customer Care
          </Typography>
          <Typography mb="5px" fontSize="15px">
            Help Center
          </Typography>
          <Typography mb="5px" fontSize="15px">
            Track Your Order
          </Typography>
          <Typography mb="5px" fontSize="15px">
            Corporate & Bulk Purchasing
          </Typography>
          <Typography mb="5px" fontSize="15px">
            Returns & Refunds
          </Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            // mb="20px"
            // mt="15px"
            fontSize="25px"
          >
            Contact Us
          </Typography>
          <Typography mb="5px" fontSize="15px">
            Romania
          </Typography>
          <Typography mb="5px" fontSize="15px" sx={{ wordWrap: "break-word" }}>
            Email: glampet@gmail.com
          </Typography>
          <Typography mb="5px" fontSize="15px">
            000-000
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
