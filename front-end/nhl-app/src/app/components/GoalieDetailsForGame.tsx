import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { GoalieStatsDetails } from "../models/GameDetail";

interface PlayerDetailsForGameProps {
  goalies: GoalieStatsDetails[];
}

export const GoalieDetailsForGame = ({
  goalies,
}: PlayerDetailsForGameProps) => {
  const goalieStats = ["Goalie", "GA", "SA", "SV", "SV%", "TOI"];
  return (
    <TableContainer component={Paper} sx={{ maxHeight: 300 }}>
      <Table size="small">
        <TableHead>
          <TableRow>
            {goalieStats.map((stat) => (
              <TableCell key={stat}>{stat}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {goalies.map((goalie) => (
            <TableRow key={goalie.playerId}>
              <TableCell>
                #{goalie.sweaterNumber} {goalie.name.default}
              </TableCell>
              <TableCell>{goalie.goalsAgainst}</TableCell>
              <TableCell>{goalie.shotsAgainst}</TableCell>
              <TableCell>{goalie.saves}</TableCell>
              <TableCell>{goalie.savePctg}</TableCell>
              <TableCell>{goalie.toi}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
