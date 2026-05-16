"use client";

import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";

import {
  Container,
  Typography,
  CircularProgress,
  Pagination,
  Box,
} from "@mui/material";

import NotificationCard from "../components/NotificationCard";

import FilterBar from "../components/FilterBar";

import { fetchNotifications } from "../services/notificationService";

export default function HomePage() {
  const [notifications, setNotifications] =
    useState<any[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [page, setPage] = useState(1);

  const [type, setType] = useState("");

  useEffect(() => {
    loadNotifications();
  }, [page, type]);

  const loadNotifications = async () => {
    setLoading(true);

    const data =
      await fetchNotifications(
        page,
        10,
        type
      );

    setNotifications(data);

    setLoading(false);
  };

    return (
    <>
      <Navbar />

      <Box
        sx={{
          minHeight: "100vh",
          background:
            "linear-gradient(to right,#e0eafc,#cfdef3)",
          paddingBottom: 5,
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              paddingTop: 5,
              marginBottom: 3,
              color: "#0f172a",
            }}
          >
            Notifications
          </Typography>

          <FilterBar
            type={type}
            setType={setType}
          />

          {loading ? (
            <CircularProgress
              sx={{ marginTop: 4 }}
            />
          ) : (
            <>
              {notifications.map(
                (notification, index) => (
                  <NotificationCard
                    key={index}
                    notification={notification}
                  />
                )
              )}

              <Pagination
                count={10}
                page={page}
                onChange={(_, value) =>
                  setPage(value)
                }
                sx={{
                  marginTop: 4,
                  display: "flex",
                  justifyContent: "center",
                }}
              />
            </>
          )}
        </Container>
      </Box>
    </>
  );
}