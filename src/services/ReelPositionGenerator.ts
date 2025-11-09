import { ISlotConfig } from '../interfaces/ISlotConfig';
import { IReelPositionGenerator } from '../interfaces/IReelPositionGenerator';
import { RNG } from '../helpers/RNG';

export class ReelPositionGenerator implements IReelPositionGenerator {
  constructor(private readonly config: ISlotConfig) {}

  public generatePositions(): number[] {
    return Array.from({ length: this.config.reelsCount }, (_, i) => 
      RNG.generateReelPosition(this.config.reels[i].length)
    );
  }
}

