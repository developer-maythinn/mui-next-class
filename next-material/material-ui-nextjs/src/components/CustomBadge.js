"use client";
import * as React from "react";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import Icon from "@mui/material/Icon";
import { IconButton } from "@mui/material";
import { pink, purple, green, orange } from "@mui/material/colors";
import styled from "@emotion/styled";

const ColorButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: pink[50],
  "&:hover": {
    backgroundColor: green[600],
    color: theme.palette.getContrastText(pink[500]),
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    top: 8,
    background: orange[400],
  },
}));

export default function CustomBadge() {
  return (
    <StyledBadge badgeContent={1}>
      <ColorButton>
        <Icon>shopping_basket</Icon>
      </ColorButton>
    </StyledBadge>
  );
}
