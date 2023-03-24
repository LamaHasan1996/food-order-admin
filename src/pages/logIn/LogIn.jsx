import {
  Box,
  Button,
  InputAdornment,
  InputLabel,
  Typography,
  IconButton,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import { Formik, Field } from "formik";
import { useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import * as Yup from "yup";
import { CustomTextField, Spinner } from "../../components";
import useStyles from "../../styles/pages/login";
import { users } from "../../utils/data";

export default function LogIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [response, setResponse] = useState(false);
  const logInClasses = useStyles();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  let initialValues = {
    email: "",
    password: "",
    type: "user",
  };
  let validationSchema = Yup.object({
    email: Yup.string().required("required").email("Invalid Email Format"),
    password: Yup.string().required("required"),
  });

  useEffect(() => {
    setResponse(false);
  }, [open]);

  useEffect(() => {
    if (response) {
      setSpinner(false);
    }
    if (response?.success) {
      setTimeout(() => {
        sessionStorage?.setItem("user", response?.email);
        const newEvent = new Event("login");
        window.dispatchEvent(newEvent);
        handleClose();
      }, 1000);
    }
  }, [response]);

  const onSubmit = (values) => {
    setSpinner(true);
    const myPromise = new Promise((resolve) => {
      setTimeout(() => {
        const user = users.find(
          (u) =>
            u.email === values?.email &&
            u.password === values?.password &&
            u.type === values?.type
        );
        if (user) {
          resolve({ success: true, email: values?.email });
          localStorage?.setItem("user", JSON.stringify(user));
          window.location.href = "/restaurants";
        } else {
          resolve({ success: false });
        }
      }, 3000);
    });
    myPromise
      .then((response) => {
        setResponse(response);
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        setSpinner(false);
      });
  };

  return (
    <Box className={logInClasses.root}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize={true}
      >
        {(formik) => (
          <Box className={logInClasses.form}>
            <Typography
              className={
                response?.success ? logInClasses.green : logInClasses.red
              }
            >
              {response?.success
                ? "* Log in Successfully"
                : response?.success === false
                ? "* Check Your Email and Password and Log in again"
                : null}
            </Typography>
            <Box mb={2} mt={2}>
              <InputLabel
                htmlFor="email"
                required
                className={logInClasses.label}
              >
                Email
              </InputLabel>
              <CustomTextField
                name="email"
                type="email"
                id="email"
                variant="outlined"
                className={logInClasses.input}
                onChange={(e) =>
                  formik?.setFieldValue("email", e?.target?.value)
                }
              />
              {formik?.touched?.email && formik?.errors?.email ? (
                <span className={logInClasses.error}>
                  {formik?.errors?.email}
                </span>
              ) : null}
            </Box>
            <Box mb={2} mt={2}>
              <InputLabel
                htmlFor="password"
                required
                className={logInClasses.label}
              >
                Password
              </InputLabel>
              <CustomTextField
                name="password"
                type={showPassword ? "text" : "password"}
                id="password"
                variant="outlined"
                className={logInClasses.input}
                onChange={(e) =>
                  formik?.setFieldValue("password", e?.target?.value)
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                      >
                        {showPassword ? (
                          <AiOutlineEyeInvisible />
                        ) : (
                          <AiOutlineEye />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              {formik?.touched?.password && formik?.errors?.password ? (
                <span className={logInClasses.error}>
                  {formik?.errors?.password}
                </span>
              ) : null}
            </Box>
            <Box mb={2} mt={2}>
              <Field
                component={RadioGroup}
                name="type"
                value={formik?.values?.type}
                row
                className={logInClasses.radioGroup}
                onChange={(e) =>
                  formik?.setFieldValue("type", e?.target?.value)
                }
              >
                <FormControlLabel
                  value="user"
                  control={<Radio />}
                  label="User"
                />
                <FormControlLabel
                  value="admin"
                  control={<Radio />}
                  label="Admin"
                />
              </Field>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Button
                onClick={(e) => formik?.submitForm()}
                className={logInClasses.btn}
              >
                Submit{spinner ? <Spinner /> : null}
              </Button>
            </Box>
          </Box>
        )}
      </Formik>
    </Box>
  );
}
