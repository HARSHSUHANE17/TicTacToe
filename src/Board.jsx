import React, { useState } from 'react';
import './App.css';
import Square from './components/Square';

const emojiCategories = {
  Animals: ['🐶', '🐱', '🐵', '🐰'],
  Food: ['🍕', '🍟', '🍔', '🍩'],
  Sports: ['⚽️', '🏀', '🏈', '🎾'],
};

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [player1Category, setPlayer1Category] = useState('');
  const [player2Category, setPlayer2Category] = useState('');
  const [player1Moves, setPlayer1Moves] = useState([]);
  const [player2Moves, setPlayer2Moves] = useState([]);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [winner, setWinner] = useState(null);

  const winningLines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];

  const startGame = () => {
    if (player1Category && player2Category) {
      setIsGameStarted(true);
    } else {
      alert('Both players must select a category!');
    }
  };

  const getRandomEmoji = (category) => {
    const emojis = emojiCategories[category];
    return emojis[Math.floor(Math.random() * emojis.length)];
  };

  const checkWinner = (board) => {
    for (let [a, b, c] of winningLines) {
      const valA = board[a], valB = board[b], valC = board[c];
      if (valA && valA === valB && valB === valC) {
        // check if this emoji belongs to player 1 or player 2
        if (emojiCategories[player1Category].includes(valA)) return 'Player 1';
        if (emojiCategories[player2Category].includes(valA)) return 'Player 2';
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (state[index] || winner) return;

    const currentCategory = isXTurn ? player1Category : player2Category;
    const currentMoves = isXTurn ? player1Moves : player2Moves;
    const setCurrentMoves = isXTurn ? setPlayer1Moves : setPlayer2Moves;

    let newState = [...state];
    let newMoves = [...currentMoves];
    let forbiddenIndex = null;

    if (newMoves.length === 3) {
      forbiddenIndex = newMoves[0];
      if (index === forbiddenIndex) return;
      const removed = newMoves.shift();
      newState[removed] = null;
    }

    const emoji = getRandomEmoji(currentCategory);
    newState[index] = emoji;
    newMoves.push(index);

    setCurrentMoves(newMoves);
    setState(newState);

    const result = checkWinner(newState);
    if (result) {
      setWinner(result);
    } else {
      setIsXTurn(!isXTurn);
    }
  };

  const resetGame = () => {
    setState(Array(9).fill(null));
    setIsXTurn(true);
    setPlayer1Moves([]);
    setPlayer2Moves([]);
    setWinner(null);
    setIsGameStarted(false);
    setPlayer1Category('');
    setPlayer2Category('');
  };

  return (
    <div className="board-container">
      {!isGameStarted ? (
        <div>
          <h3>Select Emoji Categories</h3>
          <div>
            <label>Player 1: </label>
            <select value={player1Category} onChange={(e) => setPlayer1Category(e.target.value)}>
              <option value="">--Select--</option>
              {Object.keys(emojiCategories).map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div>
            <label>Player 2: </label>
            <select value={player2Category} onChange={(e) => setPlayer2Category(e.target.value)}>
              <option value="">--Select--</option>
              {Object.keys(emojiCategories).map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <button onClick={startGame}>Start Game</button>
        </div>
      ) : winner ? (
        <div>
          <h2>🎉 {winner} Wins!</h2>
          <button onClick={resetGame}>Play Again</button>
        </div>
      ) : (
        <>
          <h3>
            Turn: {isXTurn ? 'Player 1' : 'Player 2'} (
            {isXTurn
              ? getRandomEmoji(player1Category)
              : getRandomEmoji(player2Category)}
            )
          </h3>
          <div className="board-row">
            <Square onClick={() => handleClick(0)} value={state[0]} />
            <Square onClick={() => handleClick(1)} value={state[1]} />
            <Square onClick={() => handleClick(2)} value={state[2]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(3)} value={state[3]} />
            <Square onClick={() => handleClick(4)} value={state[4]} />
            <Square onClick={() => handleClick(5)} value={state[5]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(6)} value={state[6]} />
            <Square onClick={() => handleClick(7)} value={state[7]} />
            <Square onClick={() => handleClick(8)} value={state[8]} />
          </div>
        </>
      )}
    </div>
  );
};

export default Board;
