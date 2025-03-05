import { Box, Typography } from "@mui/material";

export type DailyScheduleBoxProps = {
  date: string;
  numberOfGames: number;
};

export const DailyScheduleBox = ({
  date,
  numberOfGames,
}: DailyScheduleBoxProps) => {
  return (
    <Box key={date} sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="subtitle1">{date}</Typography>
      <Typography variant="subtitle2">{numberOfGames} games</Typography>
    </Box>
  );
};
