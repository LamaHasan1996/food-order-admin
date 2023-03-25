import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { Field, Formik } from "formik";
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import * as Yup from "yup";
import { CustomTextAutoSize, CustomTextField, Spinner } from "..";
import useStyles from "../../styles/components/dialog/dialog";

export default function MealDialog(props) {
  let {
    open,
    setOpen,
    addNewMeal,
    updatedItem,
    updateMeal,
    restaurants,
    spinner,
  } = props;
  const dialogClasses = useStyles();
  const handleClose = () => {
    setOpen(false);
  };

  let initialValues = {
    title: updatedItem?.title ? updatedItem?.title : "",
    description: updatedItem?.description ? updatedItem?.description : "",
    cost: updatedItem?.cost ? updatedItem?.cost : null,
    restaurant: updatedItem?.restaurant ? updatedItem?.restaurant : "",
  };

  let validationSchema = Yup.object({
    title: Yup.string().required("required"),
    description: Yup.string().required("required"),
    cost: Yup.number().typeError("required").required("required"),
    restaurant: Yup.string().required("required"),
  });

  const onSubmit = (values) => {
    if (updatedItem && updatedItem?.id) updateMeal(values);
    else addNewMeal(values);
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      {updatedItem ? (
        <DialogTitle>Update Meal</DialogTitle>
      ) : (
        <DialogTitle>New Meal</DialogTitle>
      )}
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <AiOutlineCloseCircle />
      </IconButton>
      <DialogContent>
        <DialogContentText>
          To {updatedItem ? "Update" : "Add New "} Meal, please enter all
          Required Information.
        </DialogContentText>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          enableReinitialize={true}
        >
          {(formik) => (
            <Box>
              <Box mb={2} mt={2}>
                <InputLabel
                  htmlFor="title"
                  required
                  className={dialogClasses.label}
                >
                  title
                </InputLabel>
                <CustomTextField
                  name="title"
                  type="text"
                  id="title"
                  variant="outlined"
                  value={formik?.values?.title}
                  onChange={(e) =>
                    formik?.setFieldValue("title", e.target.value)
                  }
                  className={dialogClasses.input}
                />
                {formik?.touched?.title && formik?.errors?.title ? (
                  <span
                    style={{
                      color: "#d32f2f",
                      margin: "3px 0px",
                      fontSize: "0.75rem",
                    }}
                  >
                    {formik?.errors?.title}
                  </span>
                ) : null}
              </Box>
              <Box mb={2} mt={2}>
                <InputLabel
                  htmlFor="description"
                  required
                  className={dialogClasses.label}
                >
                  description
                </InputLabel>
                <CustomTextAutoSize
                  name="description"
                  value={formik?.values?.description}
                  onChange={(e) => {
                    formik?.setFieldValue("description", e?.target?.value);
                  }}
                  type="text"
                  id="description"
                  variant="outlined"
                  className={dialogClasses.inputAutoSize}
                />
                {formik?.touched?.description && formik?.errors?.description ? (
                  <span
                    style={{
                      color: "#d32f2f",
                      margin: "3px 0px",
                      fontSize: "0.75rem",
                    }}
                  >
                    {formik?.errors?.description}
                  </span>
                ) : null}
              </Box>
              <Box mb={2} mt={2}>
                <InputLabel
                  htmlFor="cost"
                  required
                  className={dialogClasses.label}
                >
                  Cost
                </InputLabel>
                <CustomTextField
                  name="cost"
                  type="number"
                  id="cost"
                  variant="outlined"
                  value={formik?.values?.cost}
                  onChange={(e) =>
                    formik?.setFieldValue("cost", e.target.value)
                  }
                  className={dialogClasses.input}
                />
                {formik?.touched?.cost && formik?.errors?.cost ? (
                  <span
                    style={{
                      color: "#d32f2f",
                      margin: "3px 0px",
                      fontSize: "0.75rem",
                    }}
                  >
                    {formik?.errors?.cost}
                  </span>
                ) : null}
              </Box>
              <Box mb={2} mt={2}>
                <InputLabel
                  htmlFor="restaurant"
                  required
                  className={dialogClasses.label}
                >
                  Restaurant
                </InputLabel>
                <Field
                  component={Select}
                  id="restaurant"
                  name="restaurant"
                  variant="outlined"
                  value={formik.values.restaurant}
                  className={dialogClasses.select}
                  onChange={(e) =>
                    formik?.setFieldValue("restaurant", e?.target?.value)
                  }
                >
                  {restaurants?.map((item) => (
                    <MenuItem value={item?.title}>{item?.title}</MenuItem>
                  ))}
                </Field>
                {formik?.touched?.restaurant && formik?.errors?.restaurant ? (
                  <span
                    style={{
                      color: "#d32f2f",
                      margin: "3px 0px",
                      fontSize: "0.75rem",
                    }}
                  >
                    {formik?.errors?.restaurant}
                  </span>
                ) : null}
              </Box>
              <Button
                onClick={(e) => formik?.submitForm()}
                className={dialogClasses.submitBtn}
              >
                Submit {spinner ? <Spinner /> : null}
              </Button>
            </Box>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
}
