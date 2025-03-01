"use client";
import { Box, Typography } from "@mui/material";
import { PlayerTeamStats, TeamStats } from "../../models/GameDetail";
import { GoalieDetailsForGame } from "../GoalieDetailsForGame/GoalieDetailsForGame";
import { PlayerDetailsForGame } from "../PlayerDetailsForGame/TeamLogoWithLabel/PlayerDetailsForGame";
import { TeamLogoWithLabel } from "../TeamLogoWithLabel/TeamLogoWithLabel";

export interface TeamDetailsForGameProps {
  teamData: TeamStats;
  playerData?: PlayerTeamStats;
}

export const TeamDetailsForGame = ({
  teamData,
  playerData,
}: TeamDetailsForGameProps) => {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={2}>
      <TeamLogoWithLabel
        darkLogo={teamData.darkLogo}
        label={`${teamData.placeName.default} ${teamData.commonName.default}`}
        logo={teamData.logo}
        logoHeight={150}
        logoWidth={150}
      />
      {teamData.sog && (
        <Typography textAlign={"center"} variant="subtitle2">
          Shots on Goal: {teamData.sog}
        </Typography>
      )}
      {playerData && (
        <>
          <PlayerDetailsForGame
            players={[...playerData.forwards, ...playerData.defense].sort(
              (a, b) => b.points - a.points
            )}
          />
          <GoalieDetailsForGame goalies={playerData.goalies} />
        </>
      )}
    </Box>
  );
};
