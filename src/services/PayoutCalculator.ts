import { ISlotConfig } from "../interfaces/ISlotConfig";
import { IPayoutCalculator } from "../interfaces/IPayoutCalculator";
import { MIN_MATCH_COUNT } from "../constants";

export class PayoutCalculator implements IPayoutCalculator {
  constructor(private readonly config: ISlotConfig) {}

  public calculatePayout(symbol: number, count: number): number {
    if (count < MIN_MATCH_COUNT) {
      return 0;
    }

    const symbolPayouts = this.config.symbols[symbol];
    if (!symbolPayouts || symbolPayouts.length === 0) {
      return 0;
    }

    const payoutIndex = count - 1;
    return symbolPayouts[payoutIndex] ?? 0;
  }
}
