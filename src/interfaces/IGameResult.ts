import { LinePayout } from '../LinePayout';

export interface IGameResult {
  readonly screen: number[][];
  readonly paylines: LinePayout[];
}

