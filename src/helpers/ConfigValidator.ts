import { ISlotConfig } from "../interfaces/ISlotConfig";

export class ConfigValidator {
  public static validate(config: ISlotConfig): void {
    if (config.reels.length !== config.reelsCount) {
      throw new Error(`Expected ${config.reelsCount} reels, but got ${config.reels.length}`);
    }

    if (config.lines.length === 0) {
      throw new Error('At least one payline must be defined');
    }

    config.reels.forEach((reel, index) => {
      if (reel.length === 0) {
        throw new Error(`Reel ${index + 1} is empty`);
      }
    });

    config.lines.forEach((line, lineIndex) => {
      if (line.length !== config.reelsCount) {
        throw new Error(
          `Payline ${lineIndex + 1} must have ${config.reelsCount} positions, but has ${line.length}`
        );
      }

      line.forEach((row, reelIndex) => {
        if (row < 0 || row >= config.rowsCount) {
          throw new Error(
            `Payline ${lineIndex + 1}, reel ${reelIndex + 1}: row index ${row} is out of bounds [0, ${config.rowsCount - 1}]`
          );
        }
      });
    });

    const symbolIds = new Set(Object.keys(config.symbols).map(Number));
    config.reels.forEach((reel, reelIndex) => {
      reel.forEach((symbol, symbolIndex) => {
        if (!symbolIds.has(symbol)) {
          throw new Error(
            `Reel ${reelIndex + 1}, position ${symbolIndex}: symbol ${symbol} does not exist in symbols configuration`
          );
        }
      });
    });
  }
}
