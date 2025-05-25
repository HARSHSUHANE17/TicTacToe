# Tic Tac Toe Game

A modern twist on the classic Tic Tac Toe game where players use emojis instead of X's and O's.

## Tech Stack
- React 19
- JavaScript (ES6+)
- CSS 

## Emoji Categories
Players can choose from three themed categories:
- 🐶 Animals (🐶, 🐱, 🐵, 🐰)
- 🍕 Food (🍕, 🍟, 🍔, 🍩)
- ⚽️ Sports (⚽️, 🏀, 🏈, 🎾)

## Vanishing Feature Implementation
The game implements a unique "vanishing" mechanic:
- Each player can only have 3 emojis on the board at a time
- When placing a 4th emoji, the oldest one automatically disappears
- This is implemented using a First-In-First-Out (FIFO) queue system
- The state is managed using React's useState hooks to track:
  - Current board state
  - Player moves history
  - Turn order

## Future Improvements
With more time, I would add:
1. Player score tracking
2. Custom emoji category creation
3. Undo/redo functionality
4. Game history replay
5. Multiplayer support
6. Sound effects and animations
7. Dark/light theme toggle

## Features

- Interactive game board
- Turn-based gameplay
- Win detection
- Modern UI with smooth animations
- Responsive design

## Winning Conditions

A player wins when they achieve one of the following patterns:
- Three marks in a horizontal row
- Three marks in a vertical column
- Three marks in a diagonal line (either top-left to bottom-right or top-right to bottom-left)




