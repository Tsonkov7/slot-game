import { IGameResult } from './interfaces/IGameResult';
import { LinePayout } from './LinePayout';

export class GameResult implements IGameResult {
  constructor(
    public readonly screen: number[][],
    public readonly paylines: LinePayout[]
  ) {}
}

