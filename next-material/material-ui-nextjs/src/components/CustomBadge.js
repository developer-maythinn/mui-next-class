"use client";
import * as React from "react";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import Icon from "@mui/material/Icon";
export default function CustomBadge() {
  return (
    <Badge badgeContent={4} color="primary">
      <Icon>shopping_basket</Icon>
    </Badge>
  );
}
