import { TvBroadcast, Venue } from "./Schedule";

export interface GameDetail {
  id: number;
  season: number;
  gameType: number;
  limitedScoring: boolean;
  gameDate: string;
  venue: Venue;
  venueLocation: VenueLocation;
  startTimeUTC: string;
  easternUTCOffset: string;
  venueUTCOffset: string;
  tvBroadcasts: TvBroadcast[];
  gameState: string;
  gameScheduleState: string;
  periodDescriptor: PeriodDescriptor;
  regPeriods: number;
  awayTeam: TeamStats;
  homeTeam: TeamStats;
  clock: GameClock;
  playerByGameStats: PlayerStats;
}

export interface VenueLocation {
  default: string;
}

export interface PeriodDescriptor {
  number: number;
  periodType: string;
  maxRegulationPeriods: number;
}

export interface TeamStats {
  id: number;
  commonName: { default: string };
  abbrev: string;
  score: number;
  sog: number;
  logo: string;
  darkLogo: string;
  radioLink: string;
  placeName: { default: string };
  placeNameWithPreposition: { default: string; fr: string };
}

export interface GameClock {
  timeRemaining: string;
  secondsRemaining: number;
  running: boolean;
  inIntermission: boolean;
}

export interface PlayerStats {
  awayTeam: PlayerTeamStats;
  homeTeam: PlayerTeamStats;
}

export interface PlayerTeamStats {
  forwards: PlayerStatsDetails[];
  defense: PlayerStatsDetails[];
  goalies: GoalieStatsDetails[];
}

export interface PlayerStatsDetails {
  playerId: number;
  sweaterNumber: number;
  name: { default: string };
  position: string;
  goals: number;
  assists: number;
  points: number;
  plusMinus: number;
  pim: number;
  hits: number;
  powerPlayGoals: number;
  sog: number;
  faceoffWinningPctg: number;
  toi: string;
  blockedShots: number;
  shifts: number;
  giveaways: number;
  takeaways: number;
}

export interface GoalieStatsDetails {
  playerId: number;
  sweaterNumber: number;
  name: { default: string };
  position: string;
  evenStrengthShotsAgainst: string;
  powerPlayShotsAgainst: string;
  shorthandedShotsAgainst: string;
  saveShotsAgainst: string;
  savePctg: number;
  evenStrengthGoalsAgainst: number;
  powerPlayGoalsAgainst: number;
  shorthandedGoalsAgainst: number;
  goalsAgainst: number;
  toi: string;
  shotsAgainst: number;
  saves: number;
}
