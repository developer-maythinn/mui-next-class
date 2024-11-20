"use client";
import React, { useEffect } from "react";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Image from "next/image";
import { Chip, Typography } from "@mui/material";
import CustomCheckBox from "../CustomCheckBox";
import CustomSelectCount from "../CustomSelectCount";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import { lightGreen, grey } from "@mui/material/colors";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { useDispatch, useSelector } from "react-redux";
import {
  clearProductDetail,
  fetchProductDetail,
} from "@/redux/features/products/productDetailSlice";

function ProductDetail({ params }) {
  const productState = useSelector((state) => state.productDetail);
  const { product, status, error } = productState;
  const detailId = parseInt(params.detail);
  const dispatch = useDispatch();
  console.log("product>>", product, params);
  const handleLoveClick = () => {
    alert("Loved!");
  };

  const handleShuffleClick = () => {
    alert("Shuffled!");
  };

  console.log("White " + detailId);

  useEffect(() => {
    if (detailId) {
      dispatch(fetchProductDetail(detailId));
    }

    return () => {
      dispatch(clearProductDetail()); // Clear previous product detail when component unmounts
    };
  }, [detailId, dispatch]);
  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  if (product)
    return (
      <Box sx={{ width: "100%", p: 4 }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ border: "1px solid lightgray" }}>
              <Image
                src={product.thumbnail}
                alt={product.title}
                width={500}
                height={500}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Box>
              <Chip label="Out of Stock" sx={{ textAlign: "left" }} />
              <Typography
                variant="h4"
                gutterBottom
                sx={{ fontWeight: 400, color: "darkgreen", fontWeight: "bold" }}
              >
                {product.title}
              </Typography>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontWeight: 400,
                  color: lightGreen[500],
                  fontWeight: "bold",
                }}
              >
                {`$ ${product.price}`}
              </Typography>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 400 }}>
                Color
              </Typography>

              <CustomCheckBox></CustomCheckBox>

              <CustomSelectCount params={params}></CustomSelectCount>

              <br></br>

              <IconButton onClick={handleLoveClick} sx={{ color: "red" }}>
                <ShuffleIcon />
                <Typography sx={{ pl: 1 }}>Compare</Typography>
              </IconButton>

              <IconButton onClick={handleShuffleClick}>
                <FavoriteIcon />
                <Typography sx={{ pl: 1 }}>Add to Wish List</Typography>
              </IconButton>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mt: 2,
                  padding: 1,
                  border: "1px solid gray",
                  borderRadius: "8px",
                  background: grey[500],
                }}
              >
                <IconButton sx={{ color: "white" }}>
                  <SentimentVeryDissatisfiedIcon />
                </IconButton>
                <Typography style={{ fontWeight: "bold", color: "white" }}>
                  Out of Stock
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    );
}

export default ProductDetail;
