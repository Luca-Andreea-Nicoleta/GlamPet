// @ts-nocheck
import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";
// @ts-ignore

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { shades } from "../../theme";
import React from "react";

const importAll = (r) =>
  r.keys().reduce((acc, item) => {
    acc[item.replace("./", "")] = r(item);
    return acc;
  }, {});

export const heroTextureImports = importAll(
  require.context("../../assets", false, /\.(png|jpe?g|svg)$/)
);

const MainCarousel = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  return (
    <Carousel
      infiniteLoop={true}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      renderArrowPrev={(onClickHandler, hasPrev, label) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            left: "0",
            color: "white",
            padding: "5px",
            zIndex: "10",
          }}
        >
          <NavigateBeforeIcon sx={{ fontSize: 80 }} />
        </IconButton>
      )}
      renderArrowNext={(onClickHandler, hasNext, label) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            right: "0",
            color: "white",
            padding: "5px",
            zIndex: "10",
          }}
        >
          <NavigateNextIcon sx={{ fontSize: 80 }} />
        </IconButton>
      )}
    >
      {Object.values(heroTextureImports).map((texture, index) => (
        <Box key={`carousel-image-${index}`}>
          <img
            src={texture}
            alt={`carousel-${index}`}
            style={{
              width: "100%",
              height: "800px",
              objectFit: "cover",

              backgroundAttachment: "fixed",
            }}
          />

          <Box
            className="navbar-box"
            color="white"
            padding="20px"
            borderRadius="1px"
            textAlign="left"
            backgroundColor="rgba(0, 0, 0, 0.6)"
            position="absolute"
            top="46%"
            left={isNonMobile ? "10%" : "0"}
            right={isNonMobile ? undefined : "0px"}
            margin={isNonMobile ? undefined : "0 auto"}
            maxWidth={isNonMobile ? undefined : "240px"}
          >
            {/* <Typography color={shades.secondary[400]} fontSize="25px">
              
            </Typography> */}
            <Typography variant="h2" fontSize="60px" mb="10px">
              Sparkling jewelry for your beloved pets.
            </Typography>
            {/* <Typography
              fontWeight="bold"
              color={shades.secondary[400]}
              fontSize="25px"
              mt="10px"
            >
              -- DISCOVER MORE
            </Typography> */}
          </Box>
        </Box>
      ))}
    </Carousel>
  );
};

export default MainCarousel;
