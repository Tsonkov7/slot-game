export interface ILinePayout {
  readonly lineIndex: number;
  readonly symbol: number;
  readonly count: number;
  readonly payout: number;
  toString(): string;
}

