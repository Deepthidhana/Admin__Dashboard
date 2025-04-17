import { Box, Button, TextField } from "@mui/material";
import { Header } from "../../common/Header";
import { Formik } from "formik";
import * as Yup from "yup";

const initialValues = {
  firstName: "",
  lastName: "",
  email:"",
  contactNumber: "",
  address1: "",
  address2: "",
};

const validateSchema = Yup.object({
  firstName: Yup.string()
    .required("Required")
    .min(3, "FirstName should contain atleast 3 letters"),
  lastName: Yup.string()
    .required("Required")
    .min(3, "LastName should contain atleast 3 letters"),
  contactNumber: Yup.number().required("Required"),
  email: Yup.string().required("Required").email("Invalid email address"),
  address1: Yup.string().required("Required"),
  address2: Yup.string().required("Required"),
});

export const ProfileForm = () => {
  const handleSubmit = () => {};

  return (
    <Box m={"20px"}>
      <Header title={"CREATE USER"} subtitle={"Create a New User Profile"} />
      <Box m={"40px 0 0"}>
        <Formik
          initialValues={initialValues}
          validationSchema={validateSchema}
          onSubmit={handleSubmit}
        >
          {({
            values,
            handleSubmit,
            handleBlur,
            handleChange,
            errors,
            touched,
          }: any) => (
            <form onSubmit={handleSubmit}>
              <Box
                sx={{
                  display: "grid",
                  gap: "30px",
                  margin: "10px",
                  gridTemplateColumns: "repeat(4, minmax(0,1fr))",
                }}
              >
                <TextField
                  label="First Name"
                  name="firstName"
                  value={values.firstName}
                  variant="filled"
                  error={!!touched.firstName && !!errors.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  sx={{ gridColumn: "span 2" }}
                  helperText={touched.firstName && errors.firstName}
                />
                <TextField
                  label="Last Name"
                  name="lastName"
                  value={values.lastName}
                  variant="filled"
                  error={!!touched.lastName && !!errors.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  sx={{ gridColumn: "span 2" }}
                  helperText={touched.lastName && errors.lastName}
                />
                <TextField
                  variant="filled"
                  fullWidth
                  label={"Email"}
                  name="email"
                  value={values.email}
                  error={!!touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  sx={{gridColumn:"span 4"}}
                />
                <TextField
                  label="Contact"
                  name="contactNumber"
                  value={values.contactNumber}
                  variant="filled"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  fullWidth
                  sx={{ gridColumn: "span 4" }}
                  error={!!touched.contactNumber && !!errors.contactNumber}
                  helperText={touched.contactNumber && errors.contactNumber}
                />
                <TextField
                  label="Address 1"
                  name="address1"
                  value={values.address1}
                  variant="filled"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  fullWidth
                  sx={{ gridColumn: "span 4" }}
                  helperText={touched.address1 && errors.address1}
                  error={!!touched.address1 && !!errors.address1}
                />
                <TextField
                  label="Address 2"
                  name="address2"
                  value={values.address2}
                  variant="filled"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  fullWidth
                  sx={{ gridColumn: "span 4" }}
                  helperText={touched.address2 && errors.address2}
                  error={!!touched.address2 && !!errors.address2}
                />
              </Box>
              <Button
                type="submit"
                variant="contained"
                sx={{ position: "absolute", right: "30px", marginTop: "10px" }}
                color="primary"
              >
                Create New User
              </Button>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default ProfileForm;