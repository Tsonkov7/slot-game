export interface IPayoutCalculator {
  calculatePayout(symbol: number, count: number): number;
}

