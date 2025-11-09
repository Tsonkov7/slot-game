import { ILinePayout } from './interfaces/ILinePayout';

export class LinePayout implements ILinePayout {
  constructor(
    public readonly lineIndex: number,
    public readonly symbol: number,
    public readonly count: number,
    public readonly payout: number
  ) {}

  public toString(): string {
    return `Line ${this.lineIndex + 1}: ${this.count}x Symbol ${this.symbol} = ${this.payout}`;
  }
}

