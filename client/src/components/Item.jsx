// @ts-nocheck
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { IconButton, Box, Typography, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../theme";
import { addToCart } from "../state";
import { useNavigate } from "react-router-dom";

const Item = ({ item, width }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  let category = "";
  let price = "";
  let name = "";
  let url = "";

  if (item && item.attributes) {
    const { attributes } = item;
    category = attributes.category || "";
    price = attributes.price || "";
    name = attributes.name || "";

    if (
      attributes.image &&
      attributes.image.data &&
      attributes.image.data.attributes &&
      attributes.image.data.attributes.formats &&
      attributes.image.data.attributes.formats.medium
    ) {
      url = attributes.image.data.attributes.formats.medium.url || "";
    }
  }

  return (
    <Box width={width}>
      <Box
        position="relative"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <img
          alt={item.name}
          width="300px"
          height="400px"
          src={`http://localhost:1337${url}`}
          onClick={() => navigate(`/item/${item.id}`)}
          style={{ cursor: "pointer" }}
        />
        <Box
          display={isHovered ? "block" : "none"}
          position="absolute"
          bottom="10%"
          left="0"
          width="100%"
          padding="0 5%"
        >
          <Box display="flex" justifyContent="space-between">
            <Box
              display="flex"
              alignItems="center"
              backgroundColor={shades.neutral[100]}
              borderRadius="3px"
            >
              <IconButton
                onClick={() =>
                  setCount((prevCount) => Math.max(prevCount - 1, 1))
                }
              >
                <RemoveIcon />
              </IconButton>
              <Typography color={shades.primary[300]}>{count}</Typography>
              <IconButton
                onClick={() => setCount((prevCount) => prevCount + 1)}
              >
                <AddIcon />
              </IconButton>
            </Box>
            <Button
              onClick={() => {
                dispatch(addToCart({ item: { ...item, count } }));
              }}
              sx={{ backgroundColor: shades.primary[300], color: "white" }}
            >
              Add to Cart
            </Button>
          </Box>
        </Box>
      </Box>

      <Box mt="3px">
        <Typography variant="subtitle2" color={shades.neutral.dark}>
          {category
            ? category
                .replace(/([A-Z])/g, "$1")
                .replace(/^./, (str) => str.toUpperCase())
            : ""}
        </Typography>
        <Typography>{name}</Typography>
        <Typography fontWeight="bold">${price}</Typography>
      </Box>
    </Box>
  );
};

export default Item;
