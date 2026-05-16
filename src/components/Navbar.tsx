"use client";

import Link from "next/link";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from "@mui/material";

import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

export default function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{
        background:
          "linear-gradient(90deg,#0f172a,#1e3a8a)",
        boxShadow: 4,
      }}
    >
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            flexGrow: 1,
          }}
        >
          <NotificationsActiveIcon />

          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              letterSpacing: 1,
            }}
          >
            Notification System
          </Typography>
        </Box>

        <Button color="inherit">
          <Link
            href="/"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            HOME
          </Link>
        </Button>

        <Button color="inherit">
          <Link
            href="/priority"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            PRIORITY
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
}