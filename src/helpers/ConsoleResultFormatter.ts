import { IGameResult } from '../interfaces/IGameResult';

export class ConsoleResultFormatter {
  public static format(result: IGameResult): string {
    const totalPayout = result.paylines.reduce((total, payout) => total + payout.payout, 0);

    let output = '\n========== SLOT GAME RESULT ==========\n';

    output += '\n--- Symbols on Screen ---\n';
    output += '   Reel1  Reel2  Reel3  Reel4  Reel5\n';
    result.screen.forEach((row, rowIndex) => {
      const rowDisplay = row.map(symbol => `   ${symbol}  `).join('');
      output += `R${rowIndex + 1}${rowDisplay}\n`;
    });

    output += '\n--- Line Payouts ---\n';
    if (result.paylines.length === 0) {
      output += 'No winning lines\n';
    } else {
      result.paylines.forEach(payout => {
        output += payout.toString() + '\n';
      });
    }

    output += `\n--- Total Payout: ${totalPayout} ---\n`;
    output += '=======================================\n';

    return output;
  }
}
