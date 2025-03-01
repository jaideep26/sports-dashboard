import { Schedule } from "@/app/models/Schedule";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Paper,
  Typography,
} from "@mui/material";
import GameCard from "../GameCard/GameCard";

export interface ScheduleViewProps {
  schedule: Schedule;
}

export const ScheduleView = ({ schedule }: ScheduleViewProps) => {
  return (
    <Paper elevation={8}>
      {schedule.gameWeek.map((gw) => (
        <Accordion key={gw.dayAbbrev}>
          <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
            <Box justifyContent={"space-between"}>
              <Typography>{gw.date}</Typography>
              <Typography variant="subtitle2">
                {gw.numberOfGames} games
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Box
              display={"grid"}
              gridTemplateColumns={"repeat(2, 1fr)"}
              gap={2}
            >
              {gw.games.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </Paper>
  );
};
