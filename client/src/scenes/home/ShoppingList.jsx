import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tabs, Box, Typography, Tab, useMediaQuery } from "@mui/material";
import Item from "../../components/Item";
import { setItems } from "../../state";

const ShoppingList = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // @ts-ignore
  const items = useSelector((state) => state.cart.items);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function getItems() {
    try {
      const response = await fetch(
        "http://localhost:1337/api/items?populate=image",
        { method: "GET" }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const itemsJson = await response.json();
      dispatch(setItems(itemsJson.data));
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    getItems();
  }, []);

  const catItems = items.filter((item) => item.attributes.category === "cat");
  const dogItems = items.filter((item) => item.attributes.category === "dog");

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <Box width="80%" margin="auto" mt="50px">
      <Typography
        variant="h3"
        textAlign="center"
        mt="30px"
        fontSize="30px"
        mb="15px"
      >
        Our Featured <b>Products</b>
      </Typography>
      <Tabs
        textColor="primary"
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{ sx: { display: isNonMobile ? "block" : "none" } }}
        sx={{
          m: "15px",
          "& .MuiTab-flexContainer": {
            flexWrap: "wrap",
          },
        }}
      >
        <Tab label="ALL" value="all" sx={{ fontSize: "25px" }} />
        <Tab label="DOG" value="dog" sx={{ fontSize: "25px" }} />
        <Tab label="CAT" value="cat" sx={{ fontSize: "25px" }} />
      </Tabs>
      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="1.33%"
        fontSize="5px"
      >
        {value === "all" &&
          items.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} width={200} />
          ))}
        {value === "dog" &&
          dogItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} width={0} />
          ))}
        {value === "cat" &&
          catItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} width={0} />
          ))}
      </Box>
    </Box>
  );
};

export default ShoppingList;
