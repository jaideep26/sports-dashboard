//TODO - design model for schedule based on API response

export interface Schedule {
  gameWeek: GameDay[];
}

export interface GameDay {
  date: string;
  dayAbbrev: string;
  numberOfGames: number;
  games: Game[];
}

export interface Game {
  id: number;
  gameType: number;
  startTimeUTC: string;
  gameState: string;
  gameScheduleState: string;
  awayTeam: Team;
  homeTeam: Team;
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
}

export interface Player {
  playerId: number;
  firstInitial: string;
  lastName: string;
}
