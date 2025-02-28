"use client";
import { Game } from "@/app/models/Schedule";
import { Box, Card, CardContent, Typography } from "@mui/material";
import Link from "next/link";
import { GameStatus } from "./GameStatus";
import { LocalizedTime } from "./LocalizedTime";
import { TeamLogoWithLabel } from "./TeamLogoWithLabel";

export type GameCardProps = {
  game: Game;
};
const GameCard = ({ game }: GameCardProps) => {
  return (
    <Link href={`/game/${game.id}`} passHref style={{ textDecoration: "none" }}>
      <Card
        sx={{
          cursor: "pointer",
          boxShadow: 3
        }}
      >
        <CardContent>
          <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <TeamLogoWithLabel
              darkLogo={game.homeTeam.darkLogo}
              label={game.homeTeam.abbrev}
              logo={game.homeTeam.logo}
            />
            <Box>
              <Typography>vs</Typography>
            </Box>
            <TeamLogoWithLabel
              label={game.awayTeam.abbrev}
              darkLogo={game.awayTeam.darkLogo}
              logo={game.awayTeam.logo}
            />
          </Box>
          <Box textAlign={"center"}>
            <GameStatus gameState={game.gameState} />
            <LocalizedTime date={game.startTimeUTC} />
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
};

export default GameCard;
