import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import AdressForm from "./AddressForm";
import React from "react";

const Shipping = ({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  setFieldValue,
}) => {
  return (
    <Box m="30px auto">
      <Box>
        <Typography sx={{ mb: "15px" }} fontSize="30px">
          Billing Information
        </Typography>
        <AdressForm
          type="billingAdress"
          values={values.billingAdress}
          errors={errors}
          touched={touched}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
      </Box>
      <Box mb="20px" fontSize="30px">
        <FormControlLabel
          label="Same for Shipping Address"
          control={
            <Checkbox
              defaultChecked
              value={values.shippingAdress?.isSameAddress || false}
              onChange={() =>
                setFieldValue(
                  "shippingAdress.isSameAddress",
                  !(values.shippingAdress?.isSameAddress || false)
                )
              }
            />
          }
        />
      </Box>
      {values.shippingAdress?.isSameAddress === false && (
        <Box>
          <Typography sx={{ mb: "15px" }} fontSize="30px">
            Shipping Information
          </Typography>
          <AdressForm
            type="shippingAdress"
            values={values.shippingAdress}
            errors={errors}
            touched={touched}
            handleBlur={handleBlur}
            handleChange={handleChange}
          />
        </Box>
      )}
    </Box>
  );
};

export default Shipping;
