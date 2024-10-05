import React, { useState } from "react";

export const useMultiInputHook = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    })
  }
  const resetValues = () => {
    setValues(initialValues)
  }
  return{
    values,
    handleChange,
    resetValues
  }
};
