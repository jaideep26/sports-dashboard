"use client";

import { Schedule } from "@/app/models/Schedule";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button } from "@mui/material";
import { ScheduleBar } from "./ScheduleBar/ScheduleBar";

export type ScheduleSectionProps = {
  schedule: Schedule;
};

export const ScheduleSection = ({ schedule }: ScheduleSectionProps) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Button
        onClick={() => {
          //TODO - implement back button
          console.log("Back");
        }}
      >
        <ArrowBackIcon />
      </Button>

      <ScheduleBar gameWeek={schedule.gameWeek} />

      <Button
        onClick={() => {
          //TODO - implement forward button
          console.log("Forward");
        }}
      >
        <ArrowForwardIcon />
      </Button>
    </Box>
  );
};
