"use client";

import {
  Card,
  CardContent,
  Typography,
  Chip,
  Box,
} from "@mui/material";

import NotificationsIcon from "@mui/icons-material/Notifications";

interface Notification {
  id?: number;
  Type?: string;
  Message?: string;
  Timestamp?: string;
}

export default function NotificationCard({
  notification,
}: {
  notification: Notification;
}) {
  return (
    <Card
      sx={{
        marginBottom: 3,
        borderRadius: 4,
        backdropFilter: "blur(10px)",
        background:
          "rgba(255,255,255,0.9)",
        boxShadow: 4,
        transition: "0.3s",

        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: 8,
        },
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            marginBottom: 2,
          }}
        >
          <NotificationsIcon color="primary" />

          <Chip
            label={notification.Type}
            color="primary"
            sx={{
              fontWeight: "bold",
            }}
          />
        </Box>

        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            marginBottom: 1,
          }}
        >
          {notification.Message}
        </Typography>

        <Typography
          sx={{
            color: "gray",
            fontSize: 14,
          }}
        >
          {notification.Timestamp}
        </Typography>
      </CardContent>
    </Card>
  );
}