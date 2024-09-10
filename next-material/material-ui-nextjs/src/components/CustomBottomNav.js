"use client";
import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BottomDrawer from "./BottomDrawer";

export default function CustomBottomNav() {
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 9999 }}
      elevation={3}
    >
      {console.log("setOpen(true)", open)}
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          console.log(newValue);
          newValue === 2 ? setOpen(true) : setOpen(false);
        }}
      >
        <BottomNavigationAction label="Shop" icon={<StorefrontIcon />} />
        <BottomNavigationAction label="My Account" icon={<PersonIcon />} />
        <BottomNavigationAction label="Search" icon={<SearchIcon />} />

        <BottomNavigationAction label="Wishlist" icon={<FavoriteIcon />} />
      </BottomNavigation>
      {open && (
        <BottomDrawer
          drawerOpen={toggleDrawer(open)}
          drawerClose={toggleDrawer(close)}
          open={open}
        />
      )}
    </Paper>
  );
}
