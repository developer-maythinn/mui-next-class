import * as React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "next/link";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { useDispatch } from "react-redux";

export default function CustomSelectCount({ params }) {
  // const formattedTitle = params.title.replace(/ /g, '-');
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const maxCount = 100;
  const minCount = 0;
  const id = params.detail;
  const handleCountChange = (event) => {
    setCount(Number(event.target.value));
  };

  const handleAddToCart = () => {
    //Count +1 in add to card bundle
    dispatch(addToCart({ id }));
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 2 }}>
      <TextField
        type="number"
        value={count}
        onChange={handleCountChange}
        inputProps={{
          step: 1, // Increment by 1
          min: minCount,
          max: maxCount,
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "16px", // Rounded corners for count box
          },
          width: "150px", // Custom width for the counter
        }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddToCart}
        sx={{ height: "56px", borderRadius: "16px" }} // Match the height of the text field
      >
       
          Add to Cart
      
      </Button>
    </Box>
  );
}
