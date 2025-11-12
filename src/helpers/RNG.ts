import * as crypto from "crypto";

export class RNG {
  public static generateSecureInteger(min: number, max: number): number {
    if (min >= max) {
      throw new Error("Invalid range: min must be less than max");
    }

    const range = max - min;
    const maxValid = Math.floor(0xffffffff / range) * range;

    let randomValue: number;
    do {
      const randomBytes = crypto.randomBytes(4);
      randomValue = randomBytes.readUInt32BE(0);
    } while (randomValue >= maxValid);

    return min + (randomValue % range);
  }

  public static generateReelPosition(reelLength: number): number {
    return RNG.generateSecureInteger(0, reelLength);
  }
}
