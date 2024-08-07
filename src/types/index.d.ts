//Test
type TResultPositionProps = {
  src: string;
  alt: string;
  width: number;
  left: number;
  text?: string;
  description?: string;
  tags?: string;
  ranking?: number;
  ratio?: number;
};

type TQuestionHandlerProps = {
  A1: string;
  A2: string;
  P1: string;
  P2: string;
  Q: string;
};

type TQuestionsProps = {
  params: {
    questionId: string;
  };
};

type TPositionStatisticProps = {
  position: string;
  percentage: string;
};

//Ranking
type TGrapeProps = {
  title: string;
  homeScore: string | number;
  awayScore: strubg | number;
};

type TCustomCSSProperties = CSSProperties & {
  '--width'?: string;
};

type TMatchTeamProps = {
  teamName: string;
  score: string;
};

type TEmblemSrc = {
  [key: string]: string;
};

type TTeamRecord = {
  '경기당 득점': string;
  '경기당 실점': string;
  구분: string;
  상대전적: string;
  '승차/최근': string;
  '원정 성적': string;
  정규시즌전적: string;
  '홈 성적': string;
};

type TPitcherRecord = {
  구분: string;
  '상대 전적(모든시즌)': string;
  선발: string;
  '시즌 성적(정규)': string;
  '최근 30일': string;
  확정: string;
};

type TPitcherData = {
  상대전적: {
    [key: string]: TTeamRecord;
  };
  선발투수: {
    [key: string]: TPitcherRecord;
  };
};

type TGameInfo = {
  broadcast: string;
  displayDate: string;
  gameDate: number;
  gmkey: string;
  gtime: string;
  home: string;
  homeKey: string;
  homeScore: number;
  matchTeamCode: string;
  matchTeamName: string;
  outcome: string;
  stadium: string;
  stadiumKey: string;
  status: string;
  visit: string;
  visitKey: string;
  visitScore: number;
};

type TGameData = {
  list: TGameInfo[];
};

type TGamePredictData = {
  string;
};

type TeamStats = {
  wins: number;
  draws: number;
  losses: number;
  winningPercentage: string;
};

type TotalStats = {
  [team: string]: TeamStats;
};

type RecentStats = {
  [team: string]: TeamStats;
};

type TWinLossData = {
  total: TotalStats;
  recent: RecentStats;
};

// Player
interface IPlayerFront {
  korName: string;
  backNum: string;
  playerFrontImg: string;
}

interface IPlayerBack extends IPlayerFront {
  engName: string;
  playerBackImg: string;
  positionKor: string;
  positionEng: string;
  positionHitType: string;
  positionImg: string;
  playerDOB: string;
  playerHeight: number;
  playerWeight: number;
  debutYear: number;
}

// Player Metric
type TPitcherMetric = {
  ERA: number;
  'K/BB': number;
  WHIP: number;
  QS: number;
  피안타율: number;
  reason: string;
};

type TCatcherMetric = {
  FPCT: number;
  'CS%': number;
  PB: number;
  rSB: number;
  CERA: number;
  reason: string;
};

type TInfielderMetric = {
  BA: number;
  OBP: number;
  SLG: number;
  OPS: number;
  FPCT: number;
  WAR: number;
  reason: string;
};
type TPlayerMetric = TPitcherMetric | TCatcherMetric | TInfielderMetric;

interface TBatterYearRecord {
  ab: number;
  bb: number;
  bra: string;
  cs: number;
  gamenum: number;
  gd: number;
  gyear: string;
  h2: number;
  h3: number;
  hit: number;
  hp: number;
  hr: number;
  hra: string;
  kk: number;
  rbi: number;
  run: number;
  sb: number;
  slg: string;
  teamCode: string;
  teamName: string;
}
[];

interface IBatterGameRecord {
  ab: number;
  bb: number;
  cs: number;
  displayDate: string;
  gd: number;
  h2: number;
  h3: number;
  hit: number;
  hp: number;
  hr: number;
  hra: string;
  kk: number;
  matchTeamCode: string;
  matchTeamName: string;
  rbi: number;
  run: number;
  sb: number;
}
[];

interface IBatterGameRecordFutures extends IBatterGameRecord {
  bra: string;
}
[];

interface IBatterSeasonSummaryFutures {
  ab: number;
  babip: string;
  bb: number;
  bbkk: string;
  bra: string;
  cs: number;
  finalHit: number;
  gamenum: number;
  gd: number;
  gyear: string;
  h2: number;
  h3: number;
  hit: number;
  hp: number;
  hr: number;
  hra: string;
  ib: number;
  kk: number;
  ops: string;
  opsPlus: string;
  pa: number;
  pcode: string;
  rbi: number;
  run: number;
  sb: number;
  sbTryCn: number;
  sba: string;
  sf: number;
  sh: number;
  slg: string;
  spHra: string;
  war: string;
  winShares: string;
  woba: string;
  wrHit: string;
  wraa: string;
  xbhrun: string;
}
interface IBatterSeasonSummary extends IBatterSeasonSummaryFutures {
  babip: string;
  bbkk: string;
  finalHit: number;
  ib: number;
  sbTryCn: number;
  sba: string;
  spHra: string;
  winShares: string;
}
interface TPitcherYearRecord {
  bb: number;
  bf: number;
  er: number;
  era: string;
  gamenum: number;
  gyear: string;
  hit: number;
  hold: number;
  hp: number;
  hr: number;
  inn2: number;
  innDisplay: string;
  kk: number;
  l: number;
  r: number;
  sho: number;
  sv: number;
  teamCode: string;
  teamName: string;
  w: number;
  wCg: number;
  wra: string;
}
[];

interface IPitcherGameRecordFutures {
  bb: number;
  displayDate: string;
  er: number;
  hit: number;
  hp: number;
  hr: number;
  inn2: number;
  innDisplay: string;
  kk: number;
  matchTeamCode: string;
  matchTeamName: string;
  pa: number;
  r: number;
  sv: number;
  wl: string;
  wls: string;
}
[];

interface IPitcherGameRecord extends IPitcherGameRecordFutures {
  oavg: string;
}
[];

type TPitcherSeasonSummary = {
  babip: string;
  bb: number;
  bf: number;
  bk: number;
  bs: number;
  er: number;
  era: string;
  err: number;
  fip: string;
  fo: number;
  gamenum: number;
  go: number;
  gyear: string;
  havg: string;
  hit: number;
  hold: number;
  hp: number;
  hr: number;
  ib: number;
  inn2: number;
  innDisplay: string;
  kbb: string;
  kk: number;
  l: number;
  oavg: string;
  pcode: string;
  playerName: string;
  qs: number;
  qsPlus: number;
  r: number;
  ravg: string;
  sf: number;
  sh: number;
  sho: number;
  start: number;
  sv: number;
  svo: number;
  tugucount: number;
  turfSave: number;
  w: number;
  wCg: number;
  war: string;
  whip: string;
  winShares: string;
  wl: string;
  wp: number;
  wra: string;
};

type TPitcherSeasonSummaryFutures = {
  bb: number;
  er: number;
  era: string;
  err: number;
  gamenum: number;
  gyear: string;
  hit: number;
  hold: number;
  hp: number;
  hr: number;
  inn2: number;
  innDisplay: string;
  kk: number;
  l: number;
  pcode: string;
  playerName: string;
  r: number;
  sv: number;
  w: number;
  wl: string;
  wra: string;
};
interface IPitcherPlayerData {
  data: {
    recentgamerecordlist: IPitcherGameRecord[];
    recentgamerecordlistfutures: IPitcherGameRecordFutures[];
    seasonsummary: TPitcherSeasonSummary;
    yearrecordlist: TPitcherYearRecord[] | null;
    seasonsummaryfutures: TPitcherSeasonSummaryFutures;
    gameplayer: IPlayerBack;
    metric2023?: TPitcherMetric | null;
  };
}
interface IBatterPlayerData {
  data: {
    recentgamerecordlist: IBatterGameRecord[];
    recentgamerecordlistfutures: IBatterGameRecordFutures[];
    seasonsummary: IBatterSeasonSummary;
    yearrecordlist: TBatterYearRecord[];
    seasonsummaryfutures: IBatterSeasonSummaryFutures;
    gameplayer: IPlayerBack;
    metric2023?: TCatcherMetric | TInfielderMetric | null;
  };
}
type TRanking = {
  rank: number;
  team: string;
};

type TYearData = {
  year: number;
  data: TRanking[];
};

type TDailyData = {
  day: number;
  data: TRanking[];
};

type TLeagueYearData = TYearData[];

type TLeagueDailyData = TDailyData[];

type TBaseSeries = {
  name: string;
  data: (number | null)[];
  visible: boolean;
};

// Wiznews

type TNewsContent = {
  artcContents: string;
  artcTitle: string;
  artcSeq: number;
  regDttm: number;
  imgFilePath?: string;
  [key: string]: any;
} | null;

type TNewsList = TNewsContent[];

export {
  TResultPositionProps,
  TQuestionHandlerProps,
  TQuestionsProps,
  TPositionStatisticProps,
  TGrapeProps,
  TCustomCSSProperties,
  TMatchTeamProps,
  TEmblemSrc,
  TPitcherData,
  TGameData,
  TGamePredictData,
  TPitcherRecord,
  TTeamRecord,
  TGameInfo,
  TWinLossData,
  IPlayerFront,
  IPlayerBack,
  TCatcherMetric,
  TPitcherMetric,
  TInfielderMetric,
  TPlayerMetric,
  TBatterYearRecord,
  TPitcherYearRecord,
  TBatterYearRecord,
  IBatterGameRecord,
  IBatterGameRecordFutures,
  IBatterSeasonSummaryFutures,
  IBatterSeasonSummary,
  IPitcherGameRecordFutures,
  IPitcherGameRecord,
  TPitcherSeasonSummary,
  TPitcherSeasonSummaryFutures,
  IPitcherPlayerData,
  IBatterPlayerData,
  TRanking,
  TYearData,
  TDailyData,
  TLeagueYearData,
  TLeagueDailyData,
  TBaseSeries,
  TNewsContent,
  TNewsList,
};
