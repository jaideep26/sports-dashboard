import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { PlayerStatsDetails } from "../models/GameDetail";

interface PlayerDetailsForGameProps {
  players: PlayerStatsDetails[];
}

export const PlayerDetailsForGame = ({
  players,
}: PlayerDetailsForGameProps) => {
  const playerStats = ["Player", "Goals", "Assists", "Points", "+/-", "TOI"];
  return (
    <TableContainer component={Paper} sx={{ maxHeight: 300 }}>
      <Table size="small">
        <TableHead>
          <TableRow>
            {playerStats.map((stat) => (
              <TableCell key={stat}>{stat}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {players.map((player) => (
            <TableRow key={player.playerId}>
              <TableCell>
                #{player.sweaterNumber} {player.name.default} ({player.position}
                )
              </TableCell>
              <TableCell>{player.goals}</TableCell>
              <TableCell>{player.assists}</TableCell>
              <TableCell>{player.points}</TableCell>
              <TableCell>{player.plusMinus}</TableCell>
              <TableCell>{player.toi}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
