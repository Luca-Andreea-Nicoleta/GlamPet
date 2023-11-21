import { useMediaQuery, TextField, Box } from "@mui/material";
import { getIn } from "formik";
import React from "react";

const AddressForm = ({
  type,
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
}) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const formattedName = (field) => `${type}.${field}`;
  const formattedError = (field) =>
    Boolean(
      getIn(touched, formattedName(field)) &&
        getIn(errors, formattedName(field))
    );

  const formattedHelper = (field) =>
    getIn(touched, formattedName(field)) && getIn(errors, formattedName(field));

  return (
    <Box
      display="grid"
      gap="15px"
      gridTemplateColumns="repeat(4, minmax(0, 1fr))"
      sx={{
        "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
      }}
    >
      <TextField
        fullWidth
        type="number"
        label="Phone number"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values?.phoneNumber || ""}
        name={formattedName("phoneNumber")}
        error={formattedError("phoneNumber")}
        helperText={formattedHelper("phoneNumber")}
        sx={{ gridColumn: "span 2" }}
      />
      <TextField
        fullWidth
        type="text"
        label="First Name"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values?.firstName || ""}
        name={formattedName("firstName")}
        error={formattedError("firstName")}
        helperText={formattedHelper("firstName")}
        sx={{ gridColumn: "span 2" }}
      />

      <TextField
        fullWidth
        type="text"
        label="Last Name"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values?.lastName || ""}
        name={formattedName("lastName")}
        error={formattedError("lastName")}
        helperText={formattedHelper("lastName")}
        sx={{ gridColumn: "span 2" }}
      />
      <TextField
        fullWidth
        type="text"
        label="Country"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values?.country || ""}
        name={formattedName("country")}
        error={formattedError("country")}
        helperText={formattedHelper("country")}
        sx={{ gridColumn: "span 4" }}
      />
      <TextField
        fullWidth
        type="text"
        label="City"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values?.city || ""}
        name={formattedName("city")}
        error={formattedError("city")}
        helperText={formattedHelper("city")}
        sx={{ gridColumn: "span 2" }}
      />
      <TextField
        fullWidth
        type="number"
        label="Zip Code"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values?.zipCode || ""}
        name={formattedName("zipCode")}
        error={formattedError("zipCode")}
        helperText={formattedHelper("zipCode")}
        sx={{ gridColumn: "span 2" }}
      />
      <TextField
        fullWidth
        type="text"
        label="Street Address"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values?.streetAddress || ""}
        name={formattedName("streetAddress")}
        error={formattedError("streetAddress")}
        helperText={formattedHelper("streetAddress")}
        sx={{ gridColumn: "span 2" }}
      />
    </Box>
  );
};

export default AddressForm;
