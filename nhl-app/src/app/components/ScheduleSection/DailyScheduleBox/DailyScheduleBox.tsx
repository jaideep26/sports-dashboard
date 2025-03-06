import { ToggleButton, Typography } from "@mui/material";

export type DailyScheduleBoxProps = {
  date: string;
  numberOfGames: number;
};

export const DailyScheduleBox = ({
  date,
  numberOfGames,
}: DailyScheduleBoxProps) => {
  return (
    <ToggleButton
      id="daily-schedule-button"
      value={date}
      sx={{ display: "flex", flexDirection: "column", width: "100%" }}
    >
      <Typography id="date" variant="subtitle1">
        {date}
      </Typography>
      <Typography id="number-of-games" variant="subtitle2">
        {numberOfGames} games
      </Typography>
    </ToggleButton>
  );
};
