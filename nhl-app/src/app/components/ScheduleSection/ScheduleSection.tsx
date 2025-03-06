"use client";

import { Schedule } from "@/app/models/Schedule";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Typography } from "@mui/material";

export interface ScheduleSectionProps {
  schedule: Schedule;
}

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
      <Box
        sx={{ display: "flex", justifyContent: "space-evenly", width: "100%" }}
      >
        {schedule.gameWeek.map((gameDay) => (
          //TODO - implement game day item as a separate component
          <Box
            key={gameDay.date}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Typography variant="subtitle1">{gameDay.date}</Typography>
            <Typography variant="subtitle2">
              {gameDay.numberOfGames} games
            </Typography>
          </Box>
        ))}
      </Box>
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
