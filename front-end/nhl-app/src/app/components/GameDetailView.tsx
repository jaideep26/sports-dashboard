"use client";
import { Box, Typography } from "@mui/material";
import { GameDetail } from "../models/GameDetail";
import { GameStatus } from "./GameStatus";
import { TeamDetailsForGame } from "./TeamDetailsForGame";

export interface GameDetailViewProps {
  gameData: GameDetail;
}

export const GameDetailView = ({ gameData }: GameDetailViewProps) => {
  return (
    <Box display={"flex"} justifyContent={"center"}>
      <TeamDetailsForGame
        teamData={gameData.homeTeam}
        playerData={gameData.playerByGameStats?.homeTeam}
      />
      <Box textAlign={"center"}>
        <Typography variant={"h4"}>
          {gameData.homeTeam.score} - {gameData.awayTeam.score}
        </Typography>
        <GameStatus
          gameState={gameData.gameState}
          timeRemaining={gameData.clock.timeRemaining}
          periodDescriptor={gameData.periodDescriptor}
        />
      </Box>
      <TeamDetailsForGame
        teamData={gameData.awayTeam}
        playerData={gameData.playerByGameStats?.awayTeam}
      />
    </Box>
  );
};
