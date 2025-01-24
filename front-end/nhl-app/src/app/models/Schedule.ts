export interface Schedule {
  nextStartDate: string;
  previousStartDate: string;
  gameWeek: GameWeek[];
  oddsPartners: OddsPartner[];
  preSeasonStartDate: string;
  regularSeasonStartDate: string;
  regularSeasonEndDate: string;
  playoffEndDate: string;
  numberOfGames: number;
}

export interface GameWeek {
  date: string;
  dayAbbrev: string;
  numberOfGames: number;
  games: Game[];
}

export interface Game {
  id: number;
  season: number;
  gameType: number;
  venue: Venue;
  neutralSite: boolean;
  startTimeUTC: string;
  easternUTCOffset: string;
  venueUTCOffset: string;
  venueTimezone: string;
  gameState: string;
  gameScheduleState: string;
  tvBroadcasts: TvBroadcast[];
  awayTeam: Team;
  homeTeam: Team;
  gameOutcome: GameOutcome;
  winningGoalie?: Player;
  winningGoalScorer?: Player;
  specialEvent?: string;
  gameCenterLink: string;
}

export interface Venue {
  default: string;
  es?: string;
  fr?: string;
}

export interface TvBroadcast {
  id: number;
  market: string;
  countryCode: string;
  network: string;
}

export interface Team {
  id: number;
  commonName: {
    default: string;
  };
  placeName: {
    default: string;
  };
  placeNameWithPreposition: {
    default: string;
    fr?: string;
  };
  abbrev: string;
  logo: string;
  darkLogo: string;
  radioLink: string;
  awaySplitSquad?: boolean;
  homeSplitSquad?: boolean;
}

export interface GameOutcome {
  lastPeriodType: string;
}

export interface Player {
  playerId: number;
  firstInitial: string;
  lastName: string;
}

export interface OddsPartner {
  partnerId: number;
  country: string;
  name: string;
  imageUrl: string;
  siteUrl?: string;
  bgColor: string;
  textColor: string;
  accentColor: string;
}
