import { Box, Typography } from "@mui/material";
import { PeriodDescriptor } from "../models/GameDetail";

interface GameStatusProps {
  gameState: string;
  timeRemaining?: string;
  periodDescriptor?: PeriodDescriptor;
}

export const GameStatus = ({
  gameState,
  timeRemaining,
  periodDescriptor,
}: GameStatusProps) => {
  return (
    <>
      {gameState === "PRE" ? <Typography>Pre-Game</Typography> : undefined}
      {gameState === "FUT" ? <Typography>Upcoming</Typography> : undefined}
      {gameState === "LIVE" || gameState === "CRIT" ? (
        <Box>
          <Typography>Live</Typography>
          {periodDescriptor && (
            <Typography>Period: {periodDescriptor.number}</Typography>
          )}
          {timeRemaining && <Typography>{timeRemaining}</Typography>}
        </Box>
      ) : undefined}
      {gameState === "OFF" || gameState === "FINAL" ? (
        <Typography>Final</Typography>
      ) : undefined}
    </>
  );
};
