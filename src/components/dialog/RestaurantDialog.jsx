import {
  Box,
  Button,
  IconButton,
  InputLabel,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { Field, Formik } from "formik";
import moment from "moment";
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import * as Yup from "yup";
import {
  CustomMap,
  CustomTextAutoSize,
  CustomTextField,
  CustomTimePicker,
  Spinner,
} from "..";
import useStyles from "../../styles/components/dialog/dialog";

export default function RestaurantDialog(props) {
  let {
    open,
    setOpen,
    addNewRestaurant,
    updatedItem,
    updateRestaurant,
    spinner,
  } = props;
  const dialogClasses = useStyles();
  const handleClose = () => {
    setOpen(false);
  };

  let initialValues = {
    title: updatedItem?.title ? updatedItem?.title : "",
    description: updatedItem?.description ? updatedItem?.description : "",
    openAt: updatedItem?.openAt ? moment(new Date(updatedItem?.openAt)) : null,
    lat: updatedItem?.lat ? updatedItem?.lat : 34.8854913,
    lng: updatedItem?.lng ? updatedItem?.lng : 35.8785918,
  };
  let validationSchema = Yup.object({
    title: Yup.string().required("required"),
    description: Yup.string().required("required"),
    openAt: Yup.date().typeError("required").required("required"),
  });

  const onSubmit = (values) => {
    if (updatedItem && updatedItem?.id) updateRestaurant(values);
    else addNewRestaurant(values);
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      {updatedItem ? (
        <DialogTitle>Update Restaurant</DialogTitle>
      ) : (
        <DialogTitle>New Restaurant</DialogTitle>
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
          To {updatedItem ? "Update" : "Add New "} Restaurant, please enter all
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
                      margin: "3px 14px 0px",
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
                      margin: "3px 14px 0px",
                      fontSize: "0.75rem",
                    }}
                  >
                    {formik?.errors?.description}
                  </span>
                ) : null}
              </Box>
              <Box mb={2} mt={2}>
                <InputLabel
                  htmlFor="openAt"
                  required
                  className={dialogClasses.label}
                >
                  Open At
                </InputLabel>
                <Field
                  component={CustomTimePicker}
                  name="openAt"
                  variant="outlined"
                  formik={formik}
                  value={formik?.values?.openAt}
                  onChange={(e) => {
                    formik?.setFieldValue("openAt", e);
                  }}
                  inputFormat={"HH:mm"}
                  className={dialogClasses.input}
                />
                {formik?.touched?.openAt && formik?.errors?.openAt ? (
                  <span
                    style={{
                      color: "#d32f2f",
                      margin: "3px 14px 0px",
                      fontSize: "0.75rem",
                    }}
                  >
                    {formik?.errors?.openAt}
                  </span>
                ) : null}
              </Box>
              <Box mb={2} mt={2}>
                <CustomMap
                  onClick={(t, map, coord) => {
                    const { latLng } = coord;
                    const lat = latLng.lat();
                    const lng = latLng.lng();
                    formik.setFieldValue("lat", lat);
                    formik.setFieldValue("lng", lng);
                  }}
                  lat={formik?.values?.lat}
                  lng={formik?.values?.lng}
                />
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
