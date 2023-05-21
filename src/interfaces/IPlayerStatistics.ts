import IPlayer from './IPlayer';

export default interface IPlayerStatistics {
  player: IPlayer;
  statistics: [
    {
      team: {
        id: number;
        name: string;
        logo: string;
      };
      league: {
        id: number;
        name: string;
        country: string;
        logo: string;
        flag: string;
        season: number;
      };
      games: {
        appearences: number;
        lineups: number;
        minutes: number;
        number: number | null;
        position: string;
        rating: string;
        captain: boolean;
      };
      substitutes: {
        in: number;
        out: number;
        bench: number;
      };
      shots: {
        total: number;
        on: number;
      };
      goals: {
        total: number;
        conceded: number | null;
        assists: number;
        saves: number | null;
      };
      passes: {
        total: number;
        key: number;
        accuracy: number;
      };
      tackles: {
        total: number | null;
        blocks: number | null;
        interceptions: number;
      };
      duels: {
        total: number;
        won: number;
      };
      dribbles: {
        attempts: number;
        success: number;
        past: number | null;
      };
      fouls: {
        drawn: number;
        committed: number;
      };
      cards: {
        yellow: number;
        yellowred: number;
        red: number;
      };
      penalty: {
        won: number | null;
        commited: number | null;
        scored: number;
        missed: number;
        saved: number | null;
      };
    }
  ];
}
