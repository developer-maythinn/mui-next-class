import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import NextLink from "next/link";
import ProTip from "@/components/ProTip";
import Copyright from "@/components/Copyright";
import CustomAppBar from "@/components/CustomAppBar";
import Head from "next/head";
import CoverImg from "@/components/CoverImg";
import CustomBottomNav from "@/components/CustomBottomNav";
import BottomDrawer from "@/components/BottomDrawer";
import Carousel from "@/components/Carousel";

export default function Home() {
  return (
    <>
      <Container maxWidth="lg">
        <CustomAppBar />
        <CoverImg />
        <Box sx={{ p: 3, mb: 5 }}>
          <Carousel />
        </Box>

        <BottomDrawer />
        <CustomBottomNav />
      </Container>
    </>
  );
}
