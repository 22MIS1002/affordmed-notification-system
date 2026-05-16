"use client";

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

export default function FilterBar({
  type,
  setType,
}: {
  type: string;
  setType: (value: string) => void;
}) {
  return (
    <FormControl fullWidth sx={{ marginBottom: 3 }}>
      <InputLabel>Type</InputLabel>

      <Select
        value={type}
        label="Type"
        onChange={(e) => setType(e.target.value)}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="Event">Event</MenuItem>
        <MenuItem value="Result">Result</MenuItem>
        <MenuItem value="Placement">Placement</MenuItem>
      </Select>
    </FormControl>
  );
}