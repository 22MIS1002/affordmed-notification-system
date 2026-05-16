import axios from "axios";

const API_URL =
  "http://4.224.186.213/evaluation-service/notifications";

const mockNotifications = [
  {
    ID: "1",
    Type: "Placement",
    Message: "Microsoft hiring drive",
    Timestamp: "2026-04-22 17:51:18",
  },
  {
    ID: "2",
    Type: "Result",
    Message: "Mid sem results published",
    Timestamp: "2026-04-22 17:50:54",
  },
  {
    ID: "3",
    Type: "Event",
    Message: "Tech Fest starts tomorrow",
    Timestamp: "2026-04-22 17:49:42",
  },
];

export const fetchNotifications = async (
  page = 1,
  limit = 10,
  type = ""
) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        page,
        limit,
        notification_type: type || undefined,
      },
    });

    return response.data.notifications || [];
  } catch (error) {
    console.log(
      "Using mock data because API failed"
    );

    if (type) {
      return mockNotifications.filter(
        (item) => item.Type === type
      );
    }

    return mockNotifications;
  }
};