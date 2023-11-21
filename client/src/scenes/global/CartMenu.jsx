// @ts-nocheck
import React from "react";
import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styled from "@emotion/styled";
import { shades } from "../../theme";
import {
  decreaseCount,
  increaseCount,
  removeFromCart,
  setIsCartOpen,
} from "../../state";
import { useNavigate } from "react-router-dom";

const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);

  const totalPrice = cart.reduce((total, item) => {
    return total + item.count * item.attributes.price;
  }, 0);

  const handleCheckout = () => {
    navigate("/checkout");
    dispatch(setIsCartOpen({}));
  };

  return (
    <Box
      display={isCartOpen ? "block" : "none"}
      backgroundColor="rgba(0, 0, 0, 0.4)"
      position="fixed"
      zIndex={10}
      width="100%"
      height="100%"
      left={0}
      top={0}
      overflow="auto"
    >
      <Box
        position="fixed"
        right={0}
        bottom={0}
        width="max(400px, 30%)"
        height="100%"
        backgroundColor="white"
      >
        <Box padding="30px" overflow="auto" height="100%">
          <FlexBox mb="15px">
            <Typography variant="h4" fontSize="30px">
              SHOPPING BAG ({cart.length})
            </Typography>
            <IconButton onClick={() => dispatch(setIsCartOpen({}))}>
              <CloseIcon />
            </IconButton>
          </FlexBox>

          {cart.map((item) => (
            <Box key={`${item.attributes.name}-${item.id}`}>
              <FlexBox p="20px 0">
                <Box flex="1 1 50%">
                  <img
                    alt={item?.name}
                    width="125px"
                    height="165px"
                    src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
                  />
                </Box>
                <Box flex="1 1 80%">
                  <FlexBox mb="5px">
                    <Typography fontWeight="bold">
                      {item.attributes.name}
                    </Typography>
                    <IconButton
                      onClick={() => dispatch(removeFromCart({ id: item.id }))}
                    >
                      <CloseIcon />
                    </IconButton>
                  </FlexBox>
                  <Typography>{item.attributes.shortDescription}</Typography>
                  <FlexBox m="20px 0">
                    <Box
                      display="flex"
                      alignItems="center"
                      border={`1.8px solid ${shades.neutral[500]}`}
                    >
                      <IconButton
                        onClick={() => dispatch(decreaseCount({ id: item.id }))}
                      >
                        <RemoveIcon />
                      </IconButton>
                      <Typography>{item.count}</Typography>
                      <IconButton
                        onClick={() => dispatch(increaseCount({ id: item.id }))}
                      >
                        <AddIcon />
                      </IconButton>
                    </Box>
                    <Typography variant="h4" fontSize="20px" fontWeight="bold">
                      ${item.attributes.price}
                    </Typography>
                  </FlexBox>
                </Box>
              </FlexBox>
              <Divider />
            </Box>
          ))}

          <Box m="25px 0">
            <FlexBox m="20px 0">
              <Typography variant="h4" fontSize="20px" fontWeight="bold">
                SUBTOTAL
              </Typography>
              <Typography variant="h4" fontSize="20px" fontWeight="bold">
                ${totalPrice}
              </Typography>
            </FlexBox>
            <Button
              sx={{
                backgroundColor: shades.primary[600],
                color: "black",
                borderRadius: 0,
                minWidth: "100%",
                padding: "20px 40px",
                m: "25px 0",
              }}
              variant="h4"
              onClick={handleCheckout}
            >
              CHECKOUT
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CartMenu;
