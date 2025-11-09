Slot Game Backend

A TypeScript implementation of a slot game backend logic. Generates random reel positions, builds the game screen, evaluates paylines, and calculates payouts.

Requirements

- Node.js 18 or higher
- npm

Installation

- Run: npm install

Building

- Compile TypeScript: npm run build
- Output goes to the dist/ directory

Running

- Development mode: npm run dev
- Production mode: npm run build then npm start

Console Interaction

The program runs automatically when started. It performs one spin and displays the result.

The output shows:
- Symbols displayed on the screen grid
- Winning paylines with symbol matches and payouts
- Total payout amount

Example output format:

========== SLOT GAME RESULT ==========

--- Symbols on Screen ---
   Reel1  Reel2  Reel3  Reel4  Reel5
R1   1     2     3     4     5
R2   6     7     8     9     1
R3   2     3     4     5     6

--- Line Payouts ---
Line 1: 3x Symbol 1 = 10
Line 2: 4x Symbol 2 = 20

--- Total Payout: 30 ---

Configuration

Game configuration is defined in src/config.ts. Modify this file to change:
- Number of reels and rows
- Symbol definitions and payout tables
- Payline patterns
- Reel symbol sequences

Project Structure

- src/Slot.ts - Main Slot class with spin method
- src/services/ - Core game logic services
- src/interfaces/ - Type definitions
- src/helpers/ - Utility classes
- src/config.ts - Game configuration

