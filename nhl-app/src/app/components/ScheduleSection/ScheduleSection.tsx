"use client";

import { Schedule } from "@/app/models/Schedule";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Paper, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";
import { DailyScheduleBox } from "./DailyScheduleBox/DailyScheduleBox";
import { GameCard } from "./GameCard/GameCard";

export type ScheduleSectionProps = {
  schedule: Schedule;
};

export const ScheduleSection = ({ schedule }: ScheduleSectionProps) => {
  const [selectedDate, setSelectedDate] = useState<string>(
    schedule.gameWeek[0].date
  );

  const games = schedule.gameWeek.find(
    (gameDay) => gameDay.date === selectedDate
  )?.games;

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: 2, width: "100%" }}
    >
      <Paper elevation={0} sx={{ flexGrow: 1, display: "flex", gap: 1 }}>
        <Button
          onClick={() => {
            //TODO - implement back button
            console.log("Back");
          }}
        >
          <ArrowBackIcon />
        </Button>

        <ToggleButtonGroup
          id="schedule-dates-group"
          value={selectedDate}
          exclusive
          onChange={(event, newDate) => setSelectedDate(newDate)}
          sx={{ width: "100%" }}
        >
          {schedule.gameWeek.map((gameDay) => (
            <DailyScheduleBox
              key={gameDay.date}
              date={gameDay.date}
              numberOfGames={gameDay.games.length}
            />
          ))}
        </ToggleButtonGroup>
        <Button
          onClick={() => {
            //TODO - implement forward button
            console.log("Forward");
          }}
        >
          <ArrowForwardIcon />
        </Button>
      </Paper>
      <Box
        id="game-cards-list"
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 1,
          width: "auto",
        }}
      >
        {games?.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </Box>
    </Box>
  );
};
