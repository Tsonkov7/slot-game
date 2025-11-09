import { LinePayout } from '../LinePayout';

export interface IPaylineEvaluator {
  evaluatePaylines(screen: number[][]): LinePayout[];
}

