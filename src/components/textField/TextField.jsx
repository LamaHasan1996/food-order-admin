import { Field } from "formik";
import { TextField } from "@mui/material";
import React from "react";

export default function CustomTextField(props) {
  return <Field component={TextField} {...props}/>
}
