import { Game } from "@/app/models/Schedule";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import dayjs from "dayjs";

export type GameCardProps = {
  game: Game;
};

export const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card key={game.id} sx={{ minWidth: "15%" }}>
      <CardActionArea>
        <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>
            {game.awayTeam.abbrev} @ {game.homeTeam.abbrev}
          </Typography>
          <Typography>{dayjs(game.startTimeUTC).format("h:mm A")}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
