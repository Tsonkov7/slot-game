export interface ISlotConfig {
    reelsCount: number;
    rowsCount: number;
    symbols: Record<number, number[]>;
    lines: number[][];
    reels: number[][];
}