import { ISlotConfig } from '../interfaces/ISlotConfig';
import { IScreenBuilder } from '../interfaces/IScreenBuilder';

export class ScreenBuilder implements IScreenBuilder {
  constructor(private readonly config: ISlotConfig) {}

  public buildScreen(reelPositions: number[]): number[][] {
    if (!reelPositions || reelPositions.length !== this.config.reelsCount) {
      throw new Error(
        `Reel positions array must have length ${this.config.reelsCount}, but got ${reelPositions?.length ?? 0}`
      );
    }

    const screen: number[][] = [];

    for (let row = 0; row < this.config.rowsCount; row++) {
      const screenRow: number[] = [];
      for (let reelIndex = 0; reelIndex < this.config.reelsCount; reelIndex++) {
        const reel = this.config.reels[reelIndex];
        if (reelPositions[reelIndex] < 0 || reelPositions[reelIndex] >= reel.length) {
          throw new Error(
            `Reel ${reelIndex + 1} position ${reelPositions[reelIndex]} is out of bounds [0, ${reel.length - 1}]`
          );
        }
        const position = (reelPositions[reelIndex] + row) % reel.length;
        screenRow.push(reel[position]);
      }
      screen.push(screenRow);
    }

    return screen;
  }
}

