import { GameDay } from "@/app/models/Schedule";
import { Box, Typography } from "@mui/material";

export type ScheduleBarProps = {
  gameWeek: GameDay[];
};

export const ScheduleBar = ({ gameWeek }: ScheduleBarProps) => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "space-evenly", width: "100%" }}
    >
      {gameWeek.map((gameDay) => (
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
  );
};
