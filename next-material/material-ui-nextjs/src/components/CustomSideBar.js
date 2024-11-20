"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style.css";
// import { products } from "@/dummy/data";
import CustomCarouselItem from "./CustomCarouselItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/redux/features/products/productsSlice";

const CustomSideBar = (props) => {
  const products = useSelector((state) => state.products.items.products);
  
  const productsFilter = products?.length > 0 && products.filter((product, index) => product.id < 4 );
  console.log("PPP,", productsFilter);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);
  const dispatch = useDispatch();
  const handleMouseEnter = (index) => {
    setHoverIndex(index);
    setDrawerOpen(true);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
    setDrawerOpen(false);
  };

  const settings = props.settings;
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Slider {...settings}>
      {productsFilter &&
        productsFilter.length > 0 &&
        productsFilter.map((product, index) => {
          return (
            <React.Fragment key={index}>
              <CustomCarouselItem product={product}></CustomCarouselItem>
            </React.Fragment>
          );
        })}
    </Slider>
  );
};

export default CustomSideBar;
