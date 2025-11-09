import { ISlotConfig } from './interfaces/ISlotConfig';
import { IReelPositionGenerator } from './interfaces/IReelPositionGenerator';
import { IScreenBuilder } from './interfaces/IScreenBuilder';
import { IPaylineEvaluator } from './interfaces/IPaylineEvaluator';
import { IGameResult } from './interfaces/IGameResult';

import { GameResult } from './GameResult';

import { ReelPositionGenerator } from './services/ReelPositionGenerator';
import { ScreenBuilder } from './services/ScreenBuilder';
import { PayoutCalculator } from './services/PayoutCalculator';
import { PaylineEvaluator } from './services/PaylineEvaluator';

import { ConfigValidator } from './helpers/ConfigValidator';

export class Slot {
  private readonly positionGenerator: IReelPositionGenerator;
  private readonly screenBuilder: IScreenBuilder;
  private readonly paylineEvaluator: IPaylineEvaluator;

  constructor(
    private readonly config: ISlotConfig
  ) {
    ConfigValidator.validate(config);

    this.positionGenerator = new ReelPositionGenerator(config);
    this.screenBuilder = new ScreenBuilder(config);
    const payoutCalculator = new PayoutCalculator(this.config);
    this.paylineEvaluator = new PaylineEvaluator(this.config, payoutCalculator);
  }

  public spin(): IGameResult {
    const reelPositions = this.positionGenerator.generatePositions();
    const screen = this.screenBuilder.buildScreen(reelPositions);
    const paylines = this.paylineEvaluator.evaluatePaylines(screen);

    return new GameResult(screen, paylines);
  }
}

