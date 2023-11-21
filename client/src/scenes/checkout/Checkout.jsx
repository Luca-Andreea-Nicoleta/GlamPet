// @ts-nocheck
import { Box, Button, Stepper, Step, StepLabel } from "@mui/material";
import { Formik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import { shades } from "../../theme";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import CartMenu from "../global/CartMenu";
import { useSelector } from "react-redux";

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const isFirstStep = activeStep === 0;

  const [isCashOnDelivery, setIsCashOnDelivery] = useState(true);

  const stripePromise = loadStripe(
    "sk_test_51OCl1ELURpkQ2fmGEKXH5YtHQnZbUSIltRMwGdPgUL44QJCKss7QgUPKjQlAZ6Bk4y0zgjo8eHLo5GASjlS1Ygn800EkxSeyFZ"
  );

  const handleFormSubmit = async (values, actions) => {
    setActiveStep(activeStep + 1);

    actions.setTouched({});
    window.alert("Thank you for the order!");
  };

  return (
    <Box width="80%" m="100px auto">
      <CartMenu />
      <Stepper activeStep={activeStep} sx={{ m: "20px 0" }}>
        <Step>
          <StepLabel>Place Order</StepLabel>
        </Step>
      </Stepper>
      <Box display="flex" justifyContent="center">
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={checkoutSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box>
                <Box mb={1}>
                  <input
                    type="number"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={values.phoneNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="larger-input"
                  />
                  {touched.phoneNumber && errors.phoneNumber && (
                    <div>{errors.phoneNumber}</div>
                  )}
                </Box>
                <Box mb={1}>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="larger-input"
                  />
                  {touched.firstName && errors.firstName && (
                    <div>{errors.firstName}</div>
                  )}
                </Box>

                <Box mb={1}>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="larger-input"
                  />
                  {touched.lastName && errors.lastName && (
                    <div>{errors.lastName}</div>
                  )}
                </Box>
                <Box mb={1}>
                  <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={values.country}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="larger-input"
                  />
                  {touched.country && errors.country && (
                    <div>{errors.country}</div>
                  )}
                </Box>
                <Box mb={1}>
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={values.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="larger-input"
                    className="larger-input"
                  />
                  {touched.city && errors.city && <div>{errors.city}</div>}
                </Box>
              </Box>
              <Box mb={1}>
                <input
                  type="text"
                  name="zipCode"
                  placeholder="Zip Code"
                  value={values.zipCode}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="larger-input"
                />
                {touched.zipCode && errors.zipCode && (
                  <div>{errors.zipCode}</div>
                )}
              </Box>
              <Box mb={1}>
                <input
                  type="text"
                  name="street"
                  placeholder="Street"
                  value={values.street}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="larger-input"
                />
                {touched.street && errors.street && <div>{errors.street}</div>}
              </Box>
              <Box mb={1}>
                <label>
                  <input
                    type="checkbox"
                    name="cashOnDelivery"
                    checked={isCashOnDelivery}
                    onChange={(e) => setIsCashOnDelivery(e.target.checked)}
                  />
                  Cash on delivery
                </label>
              </Box>

              <Box display="flex" justifyContent="space-between" gap="50px">
                <Button
                  fullWidth
                  type="submit"
                  color="primary"
                  variant="contained"
                  sx={{
                    backgroundColor: shades.primary[400],
                    boxShadow: "none",
                    color: "white",
                    borderRadius: 0,
                    padding: "15px 40px",
                  }}
                >
                  Place Order
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

const initialValues = {
  phoneNumber: "",
  firstName: "",
  lastName: "",
  country: "",
  zipCode: "",
  city: "",
  street: "",
};

const checkoutSchema = yup.object().shape({
  phoneNumber: yup.string().required("Phone Number is required"),

  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  country: yup.string().required("Country is required"),
  zipCode: yup.string().required("Zip Code is required"),
  city: yup.string().required("City is required"),
  street: yup.string().required("Street is required"),
});

export default Checkout;
