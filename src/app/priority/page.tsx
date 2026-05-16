"use client";

import {
  useEffect,
  useState,
} from "react";

import Navbar from "../../components/Navbar";

import {
  Container,
  Typography,
} from "@mui/material";

import NotificationCard from "../../components/NotificationCard";

import { fetchNotifications } from "../../services/notificationService";

import { getPriorityScore } from "../../utils/priorityCalculator";

export default function PriorityPage() {
  const [notifications, setNotifications] =
    useState<any[]>([]);

  useEffect(() => {
    loadPriorityNotifications();
  }, []);

  const loadPriorityNotifications =
    async () => {
      const data =
        await fetchNotifications();

      const sorted = [...data].sort(
        (a, b) => {
          return (
            getPriorityScore(
              b.Type
            ) -
            getPriorityScore(
              a.Type
            )
          );
        }
      );

      setNotifications(
        sorted.slice(0, 10)
      );
    };

  return (
    <>
      <Navbar />

      <Container sx={{ marginTop: 5 }}>
        <Typography
          variant="h4"
          mb={3}
        >
          Priority Notifications
        </Typography>

        {notifications.map(
          (
            notification,
            index
          ) => (
            <NotificationCard
              key={index}
              notification={
                notification
              }
            />
          )
        )}
      </Container>
    </>
  );
}