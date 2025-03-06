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
      value={date}
      sx={{ display: "flex", flexDirection: "column", width: "100%" }}
    >
      <Typography variant="subtitle1">{date}</Typography>
      <Typography variant="subtitle2">{numberOfGames} games</Typography>
    </ToggleButton>
  );
};
