import { ISlotConfig } from '../interfaces/ISlotConfig';
import { IPayoutCalculator } from '../interfaces/IPayoutCalculator';
import { IPaylineEvaluator } from '../interfaces/IPaylineEvaluator';
import { LinePayout } from '../LinePayout';
import { MIN_MATCH_COUNT } from '../constants';

export class PaylineEvaluator implements IPaylineEvaluator {
  constructor(
    private readonly config: ISlotConfig,
    private readonly payoutCalculator: IPayoutCalculator
  ) {}

  private getPaylineSymbols(screen: number[][], line: number[]): number[] {
    return line.map((row, reelIndex) => screen[row][reelIndex]);
  }

  private countMatchingSymbols(symbols: number[]): { symbol: number; count: number } | null {
    if (symbols.length === 0) {
      return null;
    }

    const firstSymbol = symbols[0];
    let count = 1;

    for (let i = 1; i < symbols.length && symbols[i] === firstSymbol; i++) {
      count++;
    }

    return { symbol: firstSymbol, count };
  }

  public evaluatePaylines(screen: number[][]): LinePayout[] {
    if (!screen || screen.length === 0) {
      throw new Error('Screen cannot be empty');
    }

    const linePayouts: LinePayout[] = [];

    this.config.lines.forEach((line, lineIndex) => {
      const paylineSymbols = this.getPaylineSymbols(screen, line);
      const match = this.countMatchingSymbols(paylineSymbols);

      if (match && match.count >= MIN_MATCH_COUNT) {
        const payout = this.payoutCalculator.calculatePayout(match.symbol, match.count);
        if (payout > 0) {
          linePayouts.push(new LinePayout(lineIndex, match.symbol, match.count, payout));
        }
      }
    });

    return linePayouts;
  }
}

