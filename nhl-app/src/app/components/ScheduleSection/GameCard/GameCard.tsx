import { Game } from "@/app/models/Schedule";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";

export type GameCardProps = {
  game: Game;
};

export const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card key={game.id} sx={{ minWidth: "15%" }}>
      <CardActionArea>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              gap: 1,
            }}
          >
            <Box component="img" src={game.awayTeam.logo} sx={{ width: 50 }} />
            {game.awayTeam.abbrev}
          </Box>
          <Typography>@</Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              gap: 1,
            }}
          >
            <Box component="img" src={game.homeTeam.logo} sx={{ width: 50 }} />
            {game.homeTeam.abbrev}
          </Box>
          <Typography>{dayjs(game.startTimeUTC).format("h:mm A")}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
